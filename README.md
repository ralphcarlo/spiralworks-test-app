# Login Registration Test App

This project is a test app to showcase both front end and backend development meant for a job application requirement. The frontend part of this app was developed by the author himself with the help of online sources and stock knowledge from his years of experience working in AngularJS and Angular 2 (v6). The backend on the other hand was taken from an outside source to simply run an actual backend, replacing a dummy local storage API created on the frontend.

## Prerequisites

You will need `angular-cli` installed to run the app, and `npm` to install its packages. For the purposes of testing server connections real-time, it is mandatory to clone the repository of the backend here: `https://github.com/ralphcarlo/spiralworks-test-api`

## Setting Up

```
git clone https://github.com/ralphcarlo/spiralworks-test-app.git
cd spiralworks-test-app/
npm install
```

## Getting Started

Once cloned locally, on the root folder of this app, run `ng serve`. Make sure that you have all the prerequisites installed and the server running.

## Running the app

###### Run using a fake backend

Uncomment the following code in `app.module.ts` before starting the app.
```
// import { fakeBackendProvider } from "./_helpers";
// fakeBackendProvider
```

###### Run using a server

Before running the app, make sure to [clone this repository](https://github.com/ralphcarlo/spiralworks-test-api) as this is the test api to run alongside this app. The opposite is to be done for commenting the fake backend api like so...

```
import { fakeBackendProvider } from "./_helpers";
fakeBackendProvider
```

Run the test api on a separate terminal, then finally `ng serve` this app.
