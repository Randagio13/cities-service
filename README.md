<div align="center">
  
# Countries Service

[![NPM](https://nodei.co/npm/@ac-dev/cities-service.png?compact=true)](https://nodei.co/npm/@ac-dev/cities-service/)
<br />
[![](https://img.shields.io/npm/dt/@ac-dev/cities-service.svg?style=flat-square)](https://www.npmjs.com/package/@ac-dev/countries-service)

</div>

## Table of contents

1. [Mission](#mission)
2. [Getting started](#getting-started)
   - [Installation](#installation)
   - [Import](#import)
3. [Usage](#usage)
4. [Contributors](#contributors)
5. [Need help](#need-help)
6. [Licence](#license)
7. [Sponsor](#sponsor)

## Mission

- I've never found any complete library to get all world countries, states, and cities. I want to develop the best one. Of course, contributors are welcome!!
- I took this [data](https://github.com/dr5hn/countries-states-cities-database) as a starting point.
- This package is a part of [countries-states-cities-service](https://github.com/Randagio13/countries-states-cities-service)

## Getting started

To get started with this library, you need to install it and add it to your project.

### Installation

Cities Service is available as an npm package.

```bash
# npm
npm install @ac-dev/cities-service

# yarn
yarn add @ac-dev/cities-service
```

### Import

Import single named import as follow:

```typescript
import { Cities } from '@ac-dev/cities-service'
```

## Usage

The code snippet below shows how to put into action `cities-service` in some common use cases.

- Get all cities.

```typescript
const cities = Cities.getCities()
```

- Get all cities by `asc` sort.

```typescript
const cities = Cities.getCities({
  sort: {
    mode: 'asc',
  },
})
```

- Get all cities by `desc` sort.

```typescript
const cities = Cities.getCities({
  sort: {
    mode: 'desc',
  },
})
```

- Get all cities by `alphabetical` sort.

```typescript
const cities = Cities.getCities({
  sort: {
    mode: 'alphabetical',
    key: 'name',
  },
})
```

- Get Italian cities.

```typescript
const cities = Cities.getCities({
  filters: {
    country_code: 'IT',
  },
})
```

- Get Italian and French cities.

```typescript
const cities = Cities.getCities({
  filters: {
    country_code: ['IT', 'FR'],
  },
})
```

- Get Italian Ligurian cities.

```typescript
const cities = Cities.getCities({
  filters: {
    country_code: 'IT',
    state_code: '42', // Region iso2
  },
})
```

## Contributors

Any contribution is appreciated. You can get started with the steps below:

1. Fork [this repository](https://github.com/Randagio13/countries-states-cities-service) (learn how to do this [here](https://help.github.com/articles/fork-a-repo)).

2. Clone the forked repository.

3. Make your changes and create a pull request ([learn how to do this](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)).

4. I will attend to your pull request and provide some feedback.

## Need help?

Ping me [on Twitter](https://twitter.com/randagio19)

## License

This repository is licensed under the [MIT](LICENSE) License.

## Sponsor

Don't be shy! 😜

[:heart: Sponsor](https://github.com/sponsors/Randagio13)
