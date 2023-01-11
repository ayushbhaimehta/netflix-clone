/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
    const result = await fetch(
        "https://moving-frog-84.hasura.app/v1/graphql",
        {
            method: "POST",
            headers: {
                "x-hasura-admin-secret": "aLCsU1d2OHqf3qY6y2Utr5d9bu1lOf38Iz60dpLSj2VDqq3QDApdiZsXH4cTxI8k"
            },
            body: JSON.stringify({
                query: operationsDoc,
                variables: variables,
                operationName: operationName
            })
        }
    );

    return await result.json();
}

const operationsDoc = `
    mutation MyMutation {
      insert_users(objects: {email: "ayushbhaimehta20002@gmail.com", id: 1, issuer: "Ayushbhai", publicAddress: "did:err:dabfJDA"}) {
        affected_rows
      }
    }
    
    query MyQuery {
      users {
        email
        id
        issuer
        publicAddress
      }
    }
    
    mutation MyMutation2 {
      insert_stats(objects: {favourited: 0, id: 1, userId: "Ayushbhai", videoID: "QOU-BkOSTjk", watched: true}) {
        affected_rows
      }
    }
    
    query MyQuery2 {
      stats {
        favourited
        id
        userId
        videoID
        watched
      }
    }
  `;

function executeMyMutation() {
    return fetchGraphQL(
        operationsDoc,
        "MyMutation",
        {}
    );
}

function fetchMyQuery() {
    return fetchGraphQL(
        operationsDoc,
        "MyQuery",
        {}
    );
}

function executeMyMutation2() {
    return fetchGraphQL(
        operationsDoc,
        "MyMutation2",
        {}
    );
}

function fetchMyQuery2() {
    return fetchGraphQL(
        operationsDoc,
        "MyQuery2",
        {}
    );
}

async function startExecuteMyMutation() {
    const { errors, data } = await executeMyMutation();

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
    }

    // do something great with this precious data
    console.log(data);
}

startExecuteMyMutation();

export async function startFetchMyQuery() {
    const { errors, data } = await fetchMyQuery();

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
    }

    // do something great with this precious data
    console.log(data);
}

// startFetchMyQuery();

async function startExecuteMyMutation2() {
    const { errors, data } = await executeMyMutation2();

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
    }

    // do something great with this precious data
    console.log(data);
}

startExecuteMyMutation2();

async function startFetchMyQuery2() {
    const { errors, data } = await fetchMyQuery2();

    if (errors) {
        // handle those errors like a pro
        console.error(errors);
    }

    // do something great with this precious data
    console.log(data);
}

startFetchMyQuery2();