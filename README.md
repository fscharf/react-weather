# React Weather

Simple application to search cities and retrieve weather data. You can easily set your current location whether the browser supports it. It has a simple weather display and 5-day forecast.

![Wallpaper](https://i.imgur.com/jeHO9rf.png)

## Technologies

- React
- Vite
- Axios
- TailwindCSS
- Prettier + Eslint
- Jest

## Requirements

Yarn v1.22+
Node.js v20+

## Installation

- Clone the repository
- Run `yarn install` to install dependencies.
- Create an account on [OpenWeatherMap](https://openweathermap.org/) in order to retrieve your **API Key**.
- Create a local `.env` file in the root project with the following variables:

```
  VITE_API_KEY=[YOUR_API_KEY_HERE]
  VITE_API_URL=https://api.openweathermap.org/data/2.5
```

- Done! Follow the next steps.

## Start

Run `yarn dev` to start development server.

## Testing

- `yarn test`: Run tests locally.
- `yarn test:watch`: Run tests locally and continously.

## Linting

- `yarn lint`: Retrieve code formatting errors or inconsistences.
- `yarn lint:fix`: Fix all code formatting errors.
- `yarn format`: Format all files inside `src` folder accordingly to Prettier configuration.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
