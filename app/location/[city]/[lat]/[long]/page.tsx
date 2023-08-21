import React from 'react';
type WeatherPageProps = {
	params: {
		city: string;
		lat: string;
		long: string;
	};
};

function WeatherPage({ params: { city, lat, long } }: WeatherPageProps) {
	return <div>WeatherPage</div>;
}

export default WeatherPage;
