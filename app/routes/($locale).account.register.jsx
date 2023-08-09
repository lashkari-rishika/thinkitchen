import { redirect, json } from '@shopify/remix-oxygen';
import { Form, useActionData } from '@remix-run/react';
import { useState } from 'react';

import { getInputStyleClasses } from '~/lib/utils';
import { Link } from '~/components';

import { doLogin } from './($locale).account.login';
import Login_img1 from "../asset/Login_img1.png";


export async function loader({ context, params }) {
  const customerAccessToken = await context.session.get('customerAccessToken');

  if (customerAccessToken) {
    return redirect(params.locale ? `${params.locale}/account` : '/account');
  }

  return new Response(null);
}

const badRequest = (data) => json(data, { status: 400 });

export const action = async ({ request, context, params }) => {
  const { session, storefront } = context;
  const formData = await request.formData();

  const email = formData.get('email');
  const password = formData.get('password');
  const first_name = formData.get('first_name');
  const last_name = formData.get('last_name');
  const password_confirmation = formData.get('password_confirmation');

  if (
    !email ||
    !password ||
    !first_name ||
    !last_name ||
    !password_confirmation ||
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    typeof first_name !== 'string' ||
    typeof last_name !== 'string' ||
    typeof password_confirmation !== 'string'
  ) {
    return badRequest({
      formError: 'Please provide both an email and a password.',
    });
  }

  try {
    const data = await storefront.mutate(CUSTOMER_CREATE_MUTATION, {
      variables: {
        input: { email, password},
      },
    });

    if (!data?.customerCreate?.customer?.id) {
      /**
       * Something is wrong with the user's input.
       */
      throw new Error(data?.customerCreate?.customerUserErrors.join(', '));
    }

    const customerAccessToken = await doLogin(context, { email, password });
    session.set('customerAccessToken', customerAccessToken);

    return redirect(params.locale ? `${params.locale}/account` : '/account', {
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
        'Sorry. We could not create an account with this email. User might already exist, try to login instead.',
    });
  }
};

export const meta = () => {
  return [{ title: 'Register' }];
};

export default function Register() {
  const actionData = useActionData();
  const [nativeEmailError, setNativeEmailError] = useState(null);
  const [nativePasswordError, setNativePasswordError] = useState(null);
  const [nativefirstNameError, setNativeFirstNameError] = useState(null);
  const [nativelastNameError, setNativeLastNameError] = useState(null);
  const [nativepassword_confirmationError, setNativePasswordConfirmationError] = useState(null);

  return (
    <div className="flex justify-between sm-only:block">


      <div className="w-6/12  sm-only:hidden">
        <img src={Login_img1} alt=""/>

      </div>

      <div className='w-6/12 relative sm-only:w-full'>
        <div className="w-2/4  sm-only:left-0  relative top-2/4 sm-only:transform-none sm-only:w-11/12 sm-only:m-auto 
            2xl-only:absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            md-only:w-10/12	
            lg-only:w-10/12 ">
          <p className='text-center text-xs text-slate-400 mb-2'>Home | Account</p>
          <h1 className="text-4xl text-center">Create account</h1>
          {/* TODO: Add onSubmit to validate _before_ submission with native? */}
          <Form
            method="post"
            noValidate
            className="pt-6 pb-8 mb-4 space-y-3 px-8 sm-only:px-0  md-only:px-0">
            {actionData?.formError && (
              <div className="flex items-center justify-center mb-6 ">
                <p className="text-s text-contrast text-red-600">{actionData.formError}</p>
              </div>
            )}
            <div>
              <input
                className={`mb-1 ${getInputStyleClasses(nativefirstNameError)} py-3`}
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="off"
                required
                placeholder="First Name"
                aria-label="first_name"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onBlur={(event) => {
                  setNativeFirstNameError(
                    event.currentTarget.value.length &&
                      !event.currentTarget.validity.valid
                      ? 'Please enter a valid name'
                      : null,
                  );
                }}
              />
              {nativefirstNameError && (
                <p className="text-red-500 text-xs">{nativefirstNameError} &nbsp;</p>
              )}
            </div>
            <div>
              <input
                className={`mb-1 ${getInputStyleClasses(nativelastNameError)} py-3`}
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="off"
                placeholder="Last Name"
                aria-label="last_name"
                minLength={8}
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onBlur={(event) => {
                  setNativeLastNameError(
                    event.currentTarget.value.length &&
                      !event.currentTarget.validity.valid
                      ? 'please enter a valid last name'
                      : null,
                  );
                }}
              />
              {nativelastNameError && (
                <p className="text-red-500 text-xs">
                  {' '}
                  {nativelastNameError} &nbsp;
                </p>
              )}
            </div>

            <div>
            <input
              className={`mb-1 ${getInputStyleClasses(nativeEmailError)}`}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email address"
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
              className={`mb-1 ${getInputStyleClasses(nativePasswordError)}`}
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
          <div>
            <input
              className={`mb-1 ${getInputStyleClasses(nativepassword_confirmationError)}`}
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              autoComplete="off"
              placeholder="Confirm Password"
              aria-label="password_confirmation"
              minLength={8}
              required
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              onBlur={(event) => {
                if (
                  event.currentTarget.validity.valid ||
                  !event.currentTarget.value.length
                ) {
                  setNativePasswordConfirmationError(null);
                } else {
                  setNativePasswordConfirmationError(
                    event.currentTarget.validity.valueMissing
                      ? 'Please enter a password'
                      : 'Passwords must be at least 8 characters',
                  );
                }
              }}
            />
            {nativepassword_confirmationError && (
              <p className="text-red-500 text-xs">
                {' '}
                {nativepassword_confirmationError} &nbsp;
              </p>
            )}
          </div>
            {/* <div>
              <input
                className={`mb-1 ${getInputStyleClasses(nativePasswordError)} py-3`}
                id="Password"
                name="Password"
                type="Password"
                autoComplete="current-password"
                placeholder="Confirm Password"
                aria-label="Password" />
            </div> */}

            <div class="flex space-x-4 mt-4">
              <input type="checkbox" id="keep-me-logged-in" name="keep-me-logged-in" class="h-4 w-4" />
              <label for="keep-me-logged-in" class="text-sm">I agree to the Terms & Conditions*</label>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-sky-700 text-contrast rounded py-2 px-4 focus:shadow-outline block w-full"
                type="submit"
                disabled={!!(nativePasswordError || nativeEmailError)}
              >
                Create Account
              </button>
            </div>
            {/* <div className="flex items-center mt-8">
              <p className="align-baseline text-sm mt-6">
                Already have an account? &nbsp;
                <Link className="inline underline" to="/account/login">
                  Sign in
                </Link>
              </p>
            </div> */}
          </Form>
        </div>
      </div>
    </div>
  );
}

const CUSTOMER_CREATE_MUTATION = `#graphql
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
