// const serverless = require("aws-serverless-express");

// const app = require("./app");

// /* 연결 */
// const server = serverless.createServer(app);

// exports.handler = (event, context) => {
//     console.log(`EVENT: ${JSON.stringify(event)}`);
//     serverless.proxy(server, event, context);
// };

exports.handler = (event) => {
    console.log("으악");
    const response = {
        statusCode: 200,
        body: { text: JSON.stringify("Hello from Lambda!") },
    };
    return response;
};
