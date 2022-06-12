# Hacktrick - Mentoring

Category: SaltPay - Empowering start-ups & diverse founders

## Our Problem Statement 

```
How might we connect women business owners to mentors?
```

### Who?

Female / non-binary business owners (local to London), aged between 30-50s

### Why?

With fewer female founders, the pool of women who can mentor and advise their fellow entrepreneurs is consequently smaller. 

This makes it harder for enterprising women to learn from their peers and tap into those who have ‘been there, done that’.

This is significant because despite, women founders tending to provide a more immediate contribution to the economy, a 2017 study found that only 5.6% of UK women run their own business.

We decided to build our app for the aged 35+ audience, because our research found that women tend to start their own business in their forties.

### Where?

Local to london

### When?
- When they are having issues with their business, e.g. a decline in revenue
- When they are too stagnant and want some help in growing/expanding their business

### How?

A business data-driven webapp where founders can get matched to mentors.

Using the SaltPay System, we can track the revenue of the female founder's business. 

Based on the analysis we can send a personalised text message to them using the Vonage API. The text message will contains a link to the platform.

The solution has 3 features:
- A notification service - if revenue falls by a significant amount (out of norm), we send a notification to alert them of this service
- A directory of mentors, tailored specifically to their business type
- A scheduler, to arrange a time and place/schedule that is convenient for both mentor and mentee

This link takes you to our "Happy Path" for female founders https://whimsical.com/hacktrick-user-flows-YCiffdCYEsYpw2Lghhw2iN 

### Technology

To build the website we used React and deployed it on Netlify: https://hacktrick.netlify.app/

For the notification service, an API endpoint was created using python. It was deployed as a serverless/cloud function on google cloud. The api uses the Vonage sdk, to send an email.

For the scheduler we integrated Calendly into our webapp. 

To create the wireframes, conduction research and brainstorm we used Figma, Notion and Miro.

## Getting Started

### Setting up your frontend development environment

1. Install Node.js
2. Clone this repo, `cd web-app`, then...
3. Create a .env file /web-app, with this values `REACT_APP_INVITE_URL=[invite_api_url]` where invite_api_url is the value of the email sending API
4. To install packages, in the repo type `npm install`
5. Then start the server, `npm start`

### Setting up your backend development environment

1. Install Python v3.9
2. Install pipenv, `pip install pipenv`
3. Create a developer account on Vonage
4. Clone this repo, `cd functions`, then...
5. Activate the virtual env `pipenv shell`
6. Create the following environment variables `export KEY=[vonage_api_key]`, `export SECRET=[vonage_api_secret]`, `export WEBSITE_URL=[frontend_server_url]`
7. Enter this command to start the server on port 8080 `functions-framework --target=send_invite --signature-type=http --debug --port=8080` 


Members:

- Immanuella
- Jasmine
- Miyuki
- Lauren
- Lawrencia
