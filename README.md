# Openweather

This is a single page application built with Angular version 10 which shows weather information of 5 cities. The data is provided by OpenWeather API. It is deployed to Heroku, running on a Node/Express server.

The deployed version can be found on: https://openweather-client.herokuapp.com/

Running the application in a local machine requires Node(and npm), and Angular CLI to be installed. Running the `npm install` followed by `ng serve` will start it up.

## Architecture
The main architecture is divided into seperate modules, consisting of the core, shared, and weather modules to produce a clean, extendable and maintainable structure and accomodate to changes depending on requirements.

### Core
The core module includes models(environment), the API and Weather services, and their correspondent mappers, which are used to transform incoming responses.

### Shared
The shared module host components, services, utility helpers, interceptors and mock services that are used from other parts of the application, without the dublication of the code.

### Weather(main)
The is the module which handles the view of the application. SCSS is used to style the components, and the FontAwesome library is imported to use icons.

## Service layer
The services are placed in the core module. A base API service is used to host the HTTP methods that sit in between other services to reuse the some functionalites, such as passing a base url, which in this case comes from the Environment service, and handling errors.

The Weather service handles and receive server calls to the OpenWeather API. The methods and respones are represented by interfaces of expected input and output. The incoming respones are going through a pipe, then to our custom mappersi which also are located in the core module. The mappers transform and only obtain the needed data.

## Pipes and Utilities
The app makes use of built-in pipes, such as `TitleCase` and `Date` to formate titles and dates. It also uses a custom pipe, `TemperatureDegree`, which is used to transform the given temperature value in Celsius unit format (`C°`).

As a utility helper, the app uses a function that converts Kelvin temperature unit to Celsius.

These helpers are placed in the shared module for reusability.

## Interceptors
The app has an interceptor that is used to intercept HTTP requests for showing a loading spinner.

When a call starts, the `loadingSub` subscription in the Loading service is supplied with true, and then with false once the call is finished.

The `loadingSub` subscription from Loading service is then subscribed to in the App component to show the loading spinner component.

## Testing
The unit tests can be run against the spec files with `ng test` command, which then will run the tests, open a browser window, show the results both in the terminal and browser tab, waiting in watch mode for file changes.

The app's services make http calls which return Observables, and so for the unit testing of services and components that use these services, a mock(stub) service is used. Expected responses are returned from the mock service in Observables by using `Observable.of()`.

In our unit tests where service calls are made, a mock service is provided. In the test suite's `beforeEach()` lifecycle, the `TestBed` is configured with a module with the real service, but will instead use the mock service provided with the `useClass` property.

The components unit tests test various cases whether certain views are rendered or properties have values.
