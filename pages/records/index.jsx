import { withSSRContext } from "aws-amplify";
import { useState, useEffect } from "react";
import RecordCard from "../../components/RecordCard";
import { getUser, getOphthalmologist } from "../../src/graphql/queries";

const Records = ({ status, response, accountId, accountType }) => {
  console.log(accountType);
  useEffect(() => {
    getUserData();
  }, []);

  const [records, setRecords] = useState([]);
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    if (accountType === "O") {
    } else {
      setRecords([...response.getUser.Records.items]);
      console.log("records = ", records);
    }
  };

  if (status === "ERROR") {
    return <div>Error Occured</div>;
  } else if (status === "NEW") {
    return <div>Please configure your account before continueing...</div>;
  } else if (accountType === "P") {
    return (
      <div>
        <div className="flex justify-center my-5 font-extrabold">
          Your Records
        </div>
        <div>count = {records.length}</div>
        <div>
          {records.map((record, index) => {
            return (
              <RecordCard
                key={index}
                disease={record.diseaseType}
                patient={response.getUser.name}
                veryfyStatus={record.isVerified == false ? "False" : "True"}
                by={record.verifiedBy}
              >
                {record.details}
              </RecordCard>
            );
          })}
        </div>
      </div>
    );
  }
  return <div>Ophthalamologist</div>;
};

export default Records;

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
      console.log(results);
      return {
        props: {
          status: "EXISTING",
          response: results.data.getOphthalmologist,
          accountId: userInfo.attributes.sub,
          accountType: "O",
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

  try {
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
          status: "EXISTING",
          response: results.data,
          accountId: userInfo.attributes.sub,
          accountType: "P",
        },
      };
    } else {
      return {
        props: {
          status: "NEW",
          response: results.data.getUser,
          accountId: userInfo.attributes.sub,
          accountType: "P",
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
