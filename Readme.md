# qr-code-api
This API simply creates the corresponding QR code of a given text. What's behind the scene is that the express framework simply takes care of all the requests&responses for `/qr` path with the query parameter of `text`. 

The nice thing is that serverless solution is also available within the project.

## Starting Express Server
Make sure you set the necessary environment variables. You can take a look at `.env.example` file for the variables.

For development, you can create `.env` file in the root directory of the project and set the necessary environment variables. 
  
After this step, you can start the server in development mode like below:

    npm run dev

## Making Requests:

For `/GET` requests, path should look like this: 

    /qr?text=YOUR_TEXT_HERE

For `/POST` requests to `/qr` route, payload should look like below: 

    {
        "text": "YOUR_TEXT_HERE",
    }
    

## Going Serverless
The `serverless-http` package is a handy piece of middleware that handles the interface between Node.js application and the specifics of API Gateway. With the help of this package, we wrap our express app and capture all traffic coming from api-gateway and route it to our express app.
The `serverless-offline` is a plugin for Serverless Framework which emulates AWS λ and API Gateway on your local machine. It starts an HTTP server that handles the request's lifecycle like APIG does and invokes your handlers.

Running the command below will start the `serverless-offline` server:

    sls offline start
    
After that, you can start making requests to your localhost:port again as you would do when you start your express server.

If you want to deploy your serverless application, all you need to do is to run this command:

    sls deploy

Viola!
