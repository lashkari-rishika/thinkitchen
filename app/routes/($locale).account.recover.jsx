import {json, redirect} from '@shopify/remix-oxygen';
import {Form, useActionData} from '@remix-run/react';
import {useState} from 'react';


import {Link} from '~/components';
import {getInputStyleClasses} from '~/lib/utils';
import Login_img1 from '../asset/Login_img1.png';


export async function loader({context, params}) {
  const customerAccessToken = await context.session.get('customerAccessToken');

  if (customerAccessToken) {
    return redirect(params.locale ? `${params.locale}/account` : '/account');
  }

  return new Response(null);
}

const badRequest = (data) => json(data, {status: 400});

export const action = async ({request, context}) => {
  const formData = await request.formData();
  const email = formData.get('email');

  if (!email || typeof email !== 'string') {
    return badRequest({
      formError: 'Please provide an email.',
    });
  }

  try {
    await context.storefront.mutate(CUSTOMER_RECOVER_MUTATION, {
      variables: {email},
    });

    return json({resetRequested: true});
  } catch (error) {
    return badRequest({
      formError: 'Something went wrong. Please try again later.',
    });
  }
};

export const meta = () => {
  return [{title: 'Recover Password'}];
};

export default function Recover() {
  const actionData = useActionData();
  const [nativeEmailError, setNativeEmailError] = useState(null);
  const isSubmitted = actionData?.resetRequested;

  return (
    <div className="flex justify-between sm-only:block">
      <div className="w-6/12  sm-only:hidden  ">
        <img src={Login_img1} alt="" />
      </div>

      <div className="w-1/2	relative sm-only:w-full text-center ">
        {/* {isSubmitted ? (
          <>
            <div className="sm-only:left-0 bg-sky-700 p-6 relative top-2/4 sm-only:transform-none sm-only:w-11/12 sm-only:m-auto 2xl-only:absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 md-only:w-10/12	lg-only:w-10/12">
              <h1 className="text-2xl text-white">Request Sent.</h1>
              <p className="mt-4 text-white">
                If that email address is in our system, you will receive an
                email with instructions about how to reset your password in a
                few minutes.
              </p>
            </div>
          </>
        ) : (

          <>

            <div className="w-6/12 sm-only:left-0  relative top-2/4 sm-only:transform-none sm-only:w-11/12 sm-only:m-auto 
            2xl-only:absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            md-only:w-10/12	
            lg-only:w-10/12">
              <p className='text-center text-xs text-slate-400 mb-2'>Home  |  Account</p>
              <h1 className="sm-only:text-center text-xl 2xl-only:text-4xl text-center font-medium">Reset your password</h1>

    

              <p className="mt-4 sm-only:text-xs tracking-wide text-center">
                We will send you an email to reset your password
              </p>
              {/* TODO: Add onSubmit to validate _before_ submission with native? */}
              <Form
                method="post"
                noValidate
                className="pb-8 mt-4 mb-4 space-y-3"
              >
                {actionData?.formError && (
                  <div className="flex items-center justify-center mb-6 bg-zinc-500">
                    <p className="m-4 text-s text-contrast">
                      {actionData.formError}
                    </p>
                  </div>
                )}
                <div>
                  <input
                    className={`mb-1 ${getInputStyleClasses(
                      nativeEmailError,
                    )} py-3`}
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
                    <p className="text-red-500 text-xs">
                      {nativeEmailError} &nbsp;
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className=" bg-sky-700 text-contrast rounded py-2 px-4 focus:shadow-outline block w-full"
                    type="submit"
                  >
                    <Link  to="/account/login">
                    Submit
                    </Link>
                  </button>
                </div>
                <div className="text-center	">
                  <Link className="inline underline" to="/account/login">
                    cancel
                  </Link>
                </div>

                {/* <div className="flex items-center mt-8 border-t border-gray-300">
                  <p className="align-baseline text-sm mt-6">
                    Return to &nbsp;
                    <Link className="inline underline" to="/account/login">
                      Login
                    </Link>
                  </p>
                </div> */}
              </Form>
            </div>
          {/* </>
        )} */}
      </div>
    </div>
  );
}

const CUSTOMER_RECOVER_MUTATION = `#graphql
  mutation customerRecover($email: String!) {
    customerRecover(email: $email) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;


