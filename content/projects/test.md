---
title: "Dubhacks 2019"
description: "I was a hacker at Dubhacks 2019 this year. I started a team with two new people I didn't know and we were able to get second place for the community track, second place for the Google cloud prize, and second place for the AI incubator prize."
image: "dubhacks.jpg"
---
# Firebase Functios

Created: Oct 20, 2019 4:59 PM

repo: [https://github.com/nwplus/Functions](https://github.com/nwplus/Functions)

## Pre-reqs

- Node/NPM (duh)
- Firebase tools (`npm install -g firebase-tools`)

## What are cloud functions?

- Cloud functions (also known as a serverless backend) are backend functions that run when their endpoint is triggered (through HTTP or a firestore write)
    - Essentially when a function is triggered, a new container is spun up with everything needed to run the function. The function then runs in this container and once its done, the container exits.
    - This process happens incredibly quickly and is incredibly scalable because you aren't relying on one server to do all the heavy lifting.

Further reading: [https://firebase.google.com/docs/functions](https://firebase.google.com/docs/functions)

## Typescript

- Our firebase functions are written in typescript. This allows for very rich code competition and safer code.
- In most cases you won't notice a difference between javascript and typescript in our functions. This is because we aren't really using any complex types or classes. You may notice however that the functions need to be compiled before running, this is because typescript transpiles to javascript before its run by node.

further reading: [https://firebase.google.com/docs/functions/typescript](https://firebase.google.com/docs/functions/typescript)

## How the functions look:

- The functions repo has a folder called functions in it. This is where all of the development on the functions should be happening, and where all the npm commands can be run.
- All of our functions currently live in an **index.ts** file. When you serve (dev environment) or deploy (prod env) the functions, firebase looks inside this file and serves/deploys all exported functions.
- To start we need to import firebase functions:
```javascript
    import * as functions from 'firebase-functions';
```
- We then get access to `functions.https.onRequest()`  Which is a method that takes a callback (the function to be called when an HTTPS request is received).
- Here is an example of a simple firebase functions:
```javascript
    export const helloWorld = functions.https.onRequest((request, response) => {
      response.status(200).send('Hello, World!');
    });
```
- This will create a function called helloWorld that simply sends hello world as a response.
- You'll notice that the callback function looks a lot like an express `app.get()` function, and thats because firebase functions is actually built on express. Anything you can do with express you can do with firebase functions.

further reading (highly recommended): [https://firebase.google.com/docs/functions/get-started](https://firebase.google.com/docs/functions/get-started)

## CORS

- Cross origin requests are blocked by many backend functions in order to limit the chances of XSS attacks. In some cases however, it doesn't really matter where your function is called from. We have two outward facing functions (functions called from one of our nuxt projects).
- We use a cors module to insert the proper headers to allow cross origin requests. It looks something like this:
```javascript
    import * as corsModule from "cors";
    const cors = corsModule({origin: true})
    
    export const corsFunction = functions.https.onRequest(async (request, response) => {
        return cors(request, response, async () => {
    		  response.status(200).send('Hello, World!');
    	})
    })
```
- Thats all you have to do to make sure your function is callable from one of the nuxt projects.

Further reading: [https://www.npmjs.com/package/cors](https://www.npmjs.com/package/cors)

## Env variables

- There are quite a few things we probably don't want to post in our repo that are used in the firebase functions.
- Right now we have two things:
    - The mailchimp API key
    - the nw Admin password
- To set a variable for firebase functions use this command of the firebase cli:
```bash
    firebase functions:config:set someservice.key="THE API KEY"
```
- All env variables must have two parts: `<servicename>.<variable>`
- To use these variables in your dev environment you can run this command to add them to a file named .runtimeconfig.json in your functions directory:
```bash
    firebase functions:config:get > .runtimeconfig.json
```
- To access the env variables inside your function (for the mailchimp key):
```javascript
    functions.config().mailchimp.key
```
Further reading: [https://firebase.google.com/docs/functions/config-env](https://firebase.google.com/docs/functions/config-env)

## Testing and deploying

- Firebase functions will deploy to whatever project you have set in your firebase CLI.
    - To change firebase project, write: `firebase use nwhacks-2019` to use the prod environment or `firebase use nwhacks-2019-dev` to use the dev environment.
- Inside the package.json there are a bunch of useful commands that can help you run and deploy your functions.
- First is `npm run serve` . This will start a development server on your machine and show you the URL endpoints for the functions.
- Second is `npm run deploy` . This deploys the functions to firebase. If its your first time deploying this function, it will also give you the link to the function. Otherwise, it'll just tell you that the function has updated.
    - *Note: there isn't much of a point to deploy functions on nwhacks-2019-dev because we will never use those urls. (It's better to test functions by serving them locally)*
    - **When deploying functions, you'll be asked this:**

        ? Would you like to proceed with deletion? Selecting no will continue the rest of
         the deployments. (y/N)

    - **ALWAYS SAY NO TO THIS!!! Some of our functions are still in last year's repo and I'd like to keep them up for now.**

## Firestore based functions

- You can set some functions to be called when a write to firestore happens. Here is a quick example of our admin function that updates admin ID's when new admins are added to the firestore collections.
```javascript
    export const updateAdminsOnAdd = functions.firestore.document('admins/*').onCreate(async (change, context) => {
        const data = change.data()
        console.log(`New admin added: ${data !== undefined ? data.email : ''}`)
        const amount = await updateAdminIDs()
        console.log(`updated ${amount} admins`)
        return
    })
```
- This function runs when a new admin is added to the firestore collection "admins"
- *N.B. Because we're using typescript, I have to check whether data will be undefined or not before accessing it.*