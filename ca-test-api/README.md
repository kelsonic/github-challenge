# REST API boilerplate (ES6)

This is a REST API boilerplate I built that uses ES6, Node, Express, MongoDB, and Mongoose.

I am using this for the GitHub Challenge for a backend database.

I updated the user tests and the user schema for this challenge so that users have firstName, lastName, and email properties.

While this was not directly part of the challenge, a persisted model was required for users' favorite repos to save. Therefore, I decided to implement this REST API with the challenge.

## Getting Started

Install dependencies:
```sh
npm install
```

Start server:
```sh
# set DEBUG env variable to get debug logs
DEBUG=express-mongoose-es6-rest-api:* npm start
## OR
# requires gulp to be installed globally
npm i -g gulp
gulp serve
```

Your server should be running on [http://localhost:9000](http://localhost:9000).

Execute tests:
```sh
# compile with babel and run tests
npm test (or gulp mocha)

# use --code-coverage-reporter text to get code coverage for each file
gulp mocha --code-coverage-reporter text
```

Other gulp tasks:
```sh
# Wipe out dist and coverage directory
gulp clean

# Lint code with ESLint
gulp lint

# Default task: Wipes out dist and coverage directory. Compiles using babel.
gulp
```

## Code Coverage

Get code coverage summary on executing `npm test`
![Code Coverage Text Summary](https://cloud.githubusercontent.com/assets/4172932/12827832/a0531e70-cba7-11e5-9b7c-9e7f833d8f9f.JPG)

`npm test` also generates HTML code coverage report in `coverage/` directory. Open `lcov-report/index.html` to view it.
![Code coverage HTML report](https://cloud.githubusercontent.com/assets/4172932/12625331/571a48fe-c559-11e5-8aa0-f9aacfb8c1cb.jpg)

## A Boilerplate-only Option

If you would prefer not to use any of our tooling, delete the following files from the project: `package.json`, `gulpfile.babel.js`, and `.eslintrc`. You can now safely use the boilerplate with an alternative build-system or no build-system at all if you choose.

## Contributing

1. Fork it
2. Make a new branch
3. Edit it, create new features, etc.
4. Make a pull request :D

## License

MIT License. View it [here](LICENSE).