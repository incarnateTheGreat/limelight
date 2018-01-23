# Limelight

## Prerequisite

To operate the application, you must have `Angular 4` installed on your system. To install, go to [Angular 4](https://cli.angular.io/) for instructions on how to get started.

## Installation

Prior to running the Development Server, you must download the latest dependencies for this project. You will need [Node](https://nodejs.org/en/) and [NPM](https://docs.npmjs.com/getting-started/installing-node).

Run the following from the Command Line:

```
git clone https://github.com/incarnateTheGreat/limelight.git

cd limelight
```

Once the above steps are complete, download the latest dependencies by running:

```
npm install
```

## Development Server

1) From the Command Line, go to the home path that has the folder `limelight`.
2) Run `ng serve` to start the dev server.
3) Navigate to `http://localhost:4200/`.
4) The app will automatically reload if you change any of the source files.

## Assumptions and Planning

I went about the layout with a general understanding that:

1. There had to be a Login/Verification process
2. The User had to be able to successfully log out, which also meant that logged out users could not access the logged-in/verified part of the site.
3. There had to be sufficient services for the requirements of data necessary.
4. There should be some responsiveness to the layout, specifically for the Modal.
5. Load processes could be considerably long depending on the content, so a Loading Screen would be essential.
6. That error handling would be necessary for failed service connections or delayed/timed-out processes.
7. Navigation had to be easy.
8. To componentize as much of the site as possible.
9. To create utilities and easy-to-access global files.
10. To have a easy environment to work in.
