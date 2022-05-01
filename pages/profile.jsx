import { useState } from "react";
import { API, withSSRContext, Auth } from "aws-amplify";
import Head from "next/head";
import { getOphthalmologist } from "../src/graphql/queries";
import { Dialog } from "@headlessui/react";
import {
  updateOphthalmologist,
  createOphthalmologist,
} from "../src/graphql/mutations";
import Button from "../components/buttons/Button";

const Profile = ({ status, response, accountId }) => {
  const [state, setState] = useState(status);
  const [name, setName] = useState(status == "EDIT" ? response.name : "");
  const [isOpen, setIsOpen] = useState(false);

  const editUserDetails = async (updatedName) => {
    try {
      const message = await API.graphql({
        query: updateOphthalmologist,
        variables: {
          input: {
            id: accountId,
            name: updatedName,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log(message);

      setState("ADD");
    } catch (e) {
      console.log(e);
    }
  };

  const addUserDetails = async (updatedName) => {
    try {
      const message = await API.graphql({
        query: createOphthalmologist,
        variables: {
          input: {
            id: accountId,
            name: updatedName,
          },
        },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      console.log(message);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    state === "EDIT" ? editUserDetails(name) : addUserDetails(name);
  };

  if (state === "ERROR") {
    return <>An Error Occured please Log In Again</>;
  }

  return (
    <>
      <Head>Profile</Head>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <Dialog.Overlay className={"fixed inset-0 bg-black opacity-30"} />
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog>
      <main>
        <div>
          <Button onClick={() => setIsOpen(!isOpen)}>
            hello there my friend
          </Button>
        </div>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {state == "EDIT" ? (
                  <div>Edit Your Name</div>
                ) : (
                  <div>Create Your new Name</div>
                )}
              </h2>
            </div>
            <form className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="email"
                    type="text"
                    defaultValue={state === "EDIT" ? response.name : ""}
                    required
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                {/* <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div> */}
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmission}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                  </span>
                  {state == "EDIT" ? (
                    <span>Save Changes</span>
                  ) : (
                    <span>Save new Name</span>
                  )}
                </button>
              </div>
            </form>
          </div>
          <button
            onClick={() => {
              Auth.signOut();
            }}
          >
            Log Out
          </button>
        </div>
      </main>
    </>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const userInfo = await SSR.Auth.currentAuthenticatedUser();
  try {
    console.log(userInfo);
    const results = await SSR.API.graphql({
      query: getOphthalmologist,
      variables: {
        id: userInfo.attributes.sub,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log(results.data.getOphthalmologist);

    if (results.data.getOphthalmologist) {
      return {
        props: {
          status: "EDIT",
          response: results.data.getOphthalmologist,
          accountId: userInfo.attributes.sub,
        },
      };
    } else {
      return {
        props: {
          status: "ADD",
          accountId: userInfo.attributes.sub,
        },
      };
    }
  } catch (e) {
    return {
      props: {
        stats: "ERROR",
      },
    };
  }
}
