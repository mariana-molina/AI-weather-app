# Weather App

Welcome to the Weather App! This application provides you with real-time weather information for various cities around the world. You can select a country and city to get detailed weather data for the current day.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Screenshots](#screenshots)
- [Responsive Design](#responsive-design)
- [Usage](#usage)
- [Charts](#charts)
- [ChatGPT Integration](#chatgpt-integration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Weather App is a web application built using Next.js with TypeScript, Tremor 2.0, StepZen, and GraphQL. It leverages the Open-Meteo open-source weather API to fetch accurate weather data for display. The main functionality of the app is to allow users to select a country and city from all over the world, view detailed weather information, and receive a summary and clothing advice based on the weather conditions.

## Features

- Select a country and city to view current weather information.
- Display of various weather parameters, including coordinates, sunrise and sunset times, minimum and maximum temperatures, UV index, etc.
- Interactive charts displaying temperature, UV index, probability of precipitation, and humidity levels throughout the day.
- Integration with ChatGPT to provide summary and clothing advice based on the weather conditions.

## Technologies Used

- Next.js with TypeScript: Front-end framework for building interactive and performant web applications.
- Tremor 2.0: Used to create interactive charts for temperature, UV index, precipitation probability, and humidity levels.
- StepZen and GraphQL: Query data from the Open-Meteo weather API to fetch real-time weather information.
- ChatGPT Integration: Integration with ChatGPT to provide clothing advice and summarize weather data.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
```

## Screenshots

Here are some screenshots of the Weather App in action:
![first screen](https://github.com/mariana-molina/AI-weather-app/assets/118630670/b6c57f5d-6d2e-4dea-bc46-cc1959d5d6b0)
*Fig. 1: Selecting a country and city*

![weather info screen](https://github.com/mariana-molina/AI-weather-app/assets/118630670/c767d359-a2cc-4222-97f2-64d2915d0584)
*Fig. 2: Viewing detailed weather information*

![charts](https://github.com/mariana-molina/AI-weather-app/assets/118630670/3427b548-ad69-4982-adbe-42ceb78b1606)
*Fig. 3: Interactive charts section*


## Responsive Design

The Weather App is built with responsive design principles in mind, ensuring a seamless experience on both phone and computer screens. The layout and images adapt to different screen sizes, providing a user-friendly interface regardless of the device you're using.


##Usage
1. Start the development server:

```bash
npm run dev
# or
yarn dev
```
2. Open your web browser and navigate to http://localhost:3000.
3. Select a country, choose a city, and view detailed weather information for the day.

## Charts

The charts section of the application provides visual representations of key weather parameters:

- Temperature and UV index throughout the day.
- Probability of precipitation over time.
- Humidity levels.

To access the charts, follow these steps:

1. After selecting a country and city, navigate to the weather details page.
2. Scroll down to find the interactive charts section.
3. Interact with the charts to explore temperature trends, UV index changes, precipitation probabilities, and humidity variations throughout the day.

The charts offer a comprehensive view of the day's weather patterns, helping you better understand the conditions and plan your activities accordingly.

## ChatGPT Integration

The application is integrated with ChatGPT to provide personalized clothing advice and a small summary based on the weather conditions in the selected city. Please note that this feature might not be available in the deployed version due to limitations.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

For more information, you can visit the [project website](https://weather-dyocqra7m-mariana-molina.vercel.app/)
