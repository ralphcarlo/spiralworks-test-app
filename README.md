# Login Registration Test App

This project is a test app to showcase both front end and backend development meant for a job application requirement. The frontend part of this app was developed by the author himself with the help of online sources and stock knowledge from his years of experience working on AngularJS and Angular 2 (v6). The backend on the other hand was taken from an outside source to simply run an actual backend, replacing a dummy local storage API created on the frontend.

The author does not claim any ownership of the backend, and was only included for the purposes of testing server connections real-time.

## Prerequisites

You will need `angular-cli` installed to run the app. For the server, you must have Node JS and MongoDB for the `backend-api`. Make sure to run both simultaneously for the app to properly work.

## Setting Up

```
git clone https://github.com/ralphcarlo/spiralworks-test-app.git
cd spiralworks/
ng serve
```

## Getting Started

Once cloned locally, on the root folder of this app, run `ng serve`. Open another terminal and navigate to `spiralworks/backend-api` and then run `npm start`. Make sure that you have all the prerequisites installed as this will not work. Run `mongo` on a separate panel, then run `npm start` (both should be in `spiralworks/backend-api`).
