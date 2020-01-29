# Protractor

[![E2E library: protractor](https://img.shields.io/badge/e2e%20library-protractor-blue)](https://www.npmjs.com/package/protractor)

### Requirements

- [Git](https://git-scm.com/download/) and [Node.js](https://nodejs.org/en/download/) installed.

**1** - Clone the repository and access the directory created by the clone.

**2** - Install the project dependencies:

```sh
npm install
```

### Running the tests

To run the tests on **Chrome**, run:

```sh
npm run test:chrome
```

To run the tests on **Firefox**, run:

```sh
npm run test:firefox
```

To run on both browsers, run:
```
npm test
```

## About the project

### Used dependencies
- [Protractor](https://www.npmjs.com/package/protractor)
- [Protractor-helper](https://www.npmjs.com/package/protractor-helper)
- [Faker](https://www.npmjs.com/package/faker)
- [Jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter)

### Directory structure

```
protractor-style-guide/
 |
 ├─ e2e/
 |   ├─ configs/
 |   ├─ page_objects/
 |   └─ spec/
 |
 ├─ .gitignore
 ├─ package.json
 └─ package-lock.json
```