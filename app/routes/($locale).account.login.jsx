import { json, redirect } from '@shopify/remix-oxygen';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { useState } from 'react';

import { getInputStyleClasses } from '~/lib/utils';
import { Link } from '~/components';
import Login_img1 from "../asset/Login_img1.png";

export const handle = {
  isPublic: true,
};

export async function loader({ context, params }) {
  const customerAccessToken = await context.session.get('customerAccessToken');

  if (customerAccessToken) {
    return redirect(params.locale ? `${params.locale}/account` : '/account');
  }

  // TODO: Query for this?
  return json({ shopName: 'Hydrogen' });
}

const badRequest = (data) => json(data, { status: 400 });

export const action = async ({ request, context, params }) => {
  const formData = await request.formData();

  const email = formData.get('email');
  const password = formData.get('password');

  if (
    !email ||
    !password ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    return badRequest({
      formError: 'Please provide both an email and a password.',
    });
  }

  const { session, storefront } = context;

  try {
    const customerAccessToken = await doLogin(context, { email, password });
    session.set('customerAccessToken', customerAccessToken);

    return redirect(params.locale ? `/${params.locale}/account` : '/account', {
      headers: {
        'Set-Cookie': await session.commit(),
      },
    });
  } catch (error) {
    if (storefront.isApiError(error)) {
      return badRequest({
        formError: 'Something went wrong. Please try again later.',
      });
    }

    /**
     * The user did something wrong, but the raw error from the API is not super friendly.
     * Let's make one up.
     */
    return badRequest({
      formError:
        'Sorry. We did not recognize either your email or password. Please try to sign in again or create a new account.',
    });
  }
};

export const meta = () => {
  return [{ title: 'Login' }];
};

export default function Login() {
  const { shopName } = useLoaderData();
  const actionData = useActionData();
  const [nativeEmailError, setNativeEmailError] = useState(null);
  const [nativePasswordError, setNativePasswordError] = useState(null);

  return (

    <div className="flex justify-between sm-only:block">


      <div className="w-6/12 sm-only:hidden ">
        <img src={Login_img1} alt=""/>

      </div>

      <div className=" w-2/4 relative sm-only:w-full">
        <div className='w-2/4  sm-only:left-0  relative top-2/4 sm-only:transform-none sm-only:w-11/12 sm-only:m-auto 
            2xl-only:absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            md-only:w-10/12
            lg-only:w-10/12'>
          <p className='text-center text-xs text-slate-400 mb-2'>Home | Account</p>
          <h1 className="text-3xl font-medium text-center">Login</h1>
          {/* TODO: Add onSubmit to validate _before_ submission with native? */}
          <Form
            method="post"
            noValidate
            className="pt-6 pb-8 mb-4 space-y-3 sm-only:px-0  md-only:px-0">
            {actionData?.formError && (
              <div className="flex items-center justify-center mb-6 ">
                <p className="text-s text-red-600">{actionData.formError}</p>
              </div>
            )}

            <div>
              <input
                className={`mb-1 ${getInputStyleClasses(nativeEmailError)} py-3`}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                aria-label="Email address"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onBlur={(event) => {
                  setNativeEmailError(
                    event.currentTarget.value.length &&
                      !event.currentTarget.validity.valid
                      ? 'Invalid email address'
                      : null,
                  );
                }}
              />
              {nativeEmailError && (
                <p className="text-red-500 text-xs">{nativeEmailError} &nbsp;</p>
              )}
            </div>

            <div>
              <input
                className={`mb-1 ${getInputStyleClasses(nativePasswordError)} py-3`}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                aria-label="Password"
                minLength={8}
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onBlur={(event) => {
                  if (
                    event.currentTarget.validity.valid ||
                    !event.currentTarget.value.length
                  ) {
                    setNativePasswordError(null);
                  } else {
                    setNativePasswordError(
                      event.currentTarget.validity.valueMissing
                        ? 'Please enter a password'
                        : 'Passwords must be at least 8 characters',
                    );
                  }
                }}
              />
              
              {nativePasswordError && (
                <p className="text-red-500 text-xs">
                  {' '}
                  {nativePasswordError} &nbsp;
                </p>
              )}
            </div>

            <div className="flex space-x-4 mt-4">
                <input type="checkbox" id="keep-me-logged-in" name="keep-me-logged-in" className="h-4 w-4" />
                <label for="keep-me-logged-in" className="text-sm">Keep me logged in</label>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-sky-700 text-contrast py-2 px-4 focus:shadow-outline block w-full"
                type="submit"
                disabled={!!(nativePasswordError || nativeEmailError)}
              >
                Sign in
              </button>
            </div>
            <div className="flex justify-between items-center mt-8">
              <p className="align-baseline text-sm">
                {/* New to {shopName}? &nbsp; */}
                <Link className="inline underline" to="/account/recover">
                  Forgot your password?
                </Link>
              </p>
              <Link
                className="inline-block underline align-baseline text-sm"
                to="/account/register"
              >
                Create account
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

const LOGIN_MUTATION = `#graphql
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;

export async function doLogin({ storefront }, { email, password }) {
  const data = await storefront.mutate(LOGIN_MUTATION, {
    variables: {
      input: {
        email,
        password,
      },
    },
  });

  if (data?.customerAccessTokenCreate?.customerAccessToken?.accessToken) {
    return data.customerAccessTokenCreate.customerAccessToken.accessToken;
  }

  /**
   * Something is wrong with the user's input.
   */
  throw new Error(
    data?.customerAccessTokenCreate?.customerUserErrors.join(', '),
  );
}
