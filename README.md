#GK Portfolio

This project was made to allow a non-code-skill person add own post on website.
I made simple login with Google auth (created a login and password directly in Firebase Control Panel).

##In this project I used:

- Angular
- Firebase
- PWA (just for fun :) )

##In order to run this you have to do few steps:
###Prerequesities:

- Node.js https://nodejs.org/en/
- Angular CLI npm install -g @angular/cli
- Code Editor
- Firebase CLI npm install -g firebase-tools

1. Of course You need to clone the repo to your local machine with this line of code in Your terminal

- git clone https://github.com/MarekDzw/Angular-GK-Portfolio.git

2. Last but not least You have to run this command below in your terminal, to install all needed dependencies:

- npm install

3. Next step is to create and connect Your database to project

- first create new project on Google Firebase https://console.firebase.google.com/u/0/
- then add an application to Your project https://firebase.google.com/docs/web/setup
- add Firebase Api configuration to your Angular project (You need to add it to files in /environments), should look like this

```javascript
export const environment = {
  production: false,
  firebase: {
    apiKey: '<API_KEY>',
    authDomain: '<PROJECT_ID>.firebaseapp.com',
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
    projectId: '<PROJECT_ID>',
    storageBucket: '<BUCKET>.appspot.com',
    messagingSenderId: '<SENDER_ID>'
  }
};
```

4. Configure your local - database setup https://firebase.google.com/docs/hosting/quickstart

5. Last but not least You have to run this command below in your terminal, to install all needed dependencies:

- npm install

6. After install is complete run "ng s" in terminal and Enjoy!
   Got any question? Ask!

All rights reserved &copy;.
Code Marek Dzwonnik. Design Katarzyna Grudzień.
