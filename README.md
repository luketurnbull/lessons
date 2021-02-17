# lessons

ISO BAR Code test using create-react-app

I've used the create-react-app since it creates the skeleton app, preconfigured with linting, transpiling, hot reloading and unit testing built in. To get going quickly. I decided to use the typescript template so I can make the application more readable and robust.

I installed redux to store and minipulate the data, along with react hooks to make data easily accessible across the react components.

I used Jest to run the tests and react-testing-library functionalities to test the components and jest solely for testing the logic of helper functions and actions inside of the reducers. These were already installed from the create-react-app,

I decided to install Material UI and wrap the Material UI components using Styled Components so that it's easy to create a great looking application with relatively little time.

I have also installed lodash.orderby to handle the sorting inside one of my selectors.

I have tested the main logic inside the application (the reducers, helpers, selectors). But if I could spend more time I would have used react-testing-library to create further "when" "then" tests, to test the flow.

My approach was to keep as much of the logic out of the components as I can and into seperate reducers to keep the application streamline and easily testable. And also to create small single resposibility components.
