import { useState } from "react";
import { API, withSSRContext, Auth } from "aws-amplify";
import Head from "next/head";
import { getOphthalmologist, getUser } from "../src/graphql/queries";
import { Dialog } from "@headlessui/react";
import {
  updateOphthalmologist,
  updateUser,
  createUser,
} from "../src/graphql/mutations";
import Button from "../components/buttons/Button";

const DefaultAuth = "AMAZON_COGNITO_USER_POOLS";

const Profile = ({ status, response, accountId, accountType }) => {
  console.log(status, response, accountId, accountType);
  const [state, setState] = useState(status);
  const [name, setName] = useState(status === "EDIT" ? response.name : "");

  const [location, setLocation] = useState(
    status === "EDIT" ? (accountType === "O" ? response.location : "") : ""
  );

  const [age, setAge] = useState(
    status === "EDIT" ? (accountType === "P" ? response.age : "") : ""
  );
  const [address, setAddress] = useState(
    status === "EDIT" ? (accountType === "P" ? response.address : "") : ""
  );

  const editUserDetails = async () => {
    if (accountType === "O") {
      try {
        const message = await API.graphql({
          query: updateOphthalmologist,
          variables: {
            input: {
              id: accountId,
              name: name,
            },
          },
          authMode: DefaultAuth,
        });
        console.log(message);
      } catch (e) {
        console.log(e);
      }
    } else if (accountType === "P") {
      try {
        const message = await API.graphql({
          query: updateUser,
          variables: {
            input: {
              id: accountId,
              name: name,
            },
          },
          authMode: DefaultAuth,
        });
        console.log(message);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const addUserDetails = async () => {
    if (accountType === "P") {
      try {
        const message = await API.graphql({
          query: createUser,
          variables: {
            input: {
              id: accountId,
              name: name,
              age: parseInt(age),
              address: address,
            },
          },
          authMode: DefaultAuth,
        });
        console.log(message);
        setState("ADD");
      } catch (e) {
        console.log("error => ", e);
      }
    }
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    state === "EDIT" ? editUserDetails() : addUserDetails();
  };

  if (state === "ERROR") {
    return <>An Error Occured please Log In Again</>;
  } else if (accountType === "P") {
    return (
      <div className="flex my-20">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                defaultValue={state === "EDIT" ? name : ""}
                required
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                placeholder="Address"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
                defaultValue={state === "EDIT" ? address : ""}
              />
              {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you d like
            </p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Age
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="age"
                onChange={(event) => {
                  setAge(event.target.value);
                }}
                defaultValue={state === "EDIT" ? age : ""}
              />
            </div>
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
                <span>Save Details</span>
              ) : (
                <span>Save new Details</span>
              )}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex my-20">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              defaultValue={state === "EDIT" ? name : ""}
              required
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Location"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
              defaultValue={state === "EDIT" ? location : ""}
            />
            {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you d like
            </p> */}
          </div>
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
              <span>Save Details</span>
            ) : (
              <span>Save new Details</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const userInfo = await SSR.Auth.currentAuthenticatedUser();
  try {
    const results = await SSR.API.graphql({
      query: getOphthalmologist,
      variables: {
        id: userInfo.attributes.sub,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    if (results.data.getOphthalmologist) {
      return {
        props: {
          status: "EDIT",
          response: results.data.getOphthalmologist,
          accountId: userInfo.attributes.sub,
          accountType: "O",
        },
      };
    }
  } catch (e) {
    return {
      props: {
        status: "ERROR",
      },
    };
  }

  try {
    console.log(userInfo);
    const results = await SSR.API.graphql({
      query: getUser,
      variables: {
        id: userInfo.attributes.sub,
      },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

    if (results.data.getUser) {
      return {
        props: {
          status: "EDIT",
          response: results.data.getUser,
          accountId: userInfo.attributes.sub,
          accountType: "P",
        },
      };
    } else {
      return {
        props: {
          status: "ADD",
          response: results.data.getUser,
          accountId: userInfo.attributes.sub,
          accountType: "P",
        },
      };
    }
  } catch (e) {
    return {
      props: {
        status: "ERROR",
      },
    };
  }
}
