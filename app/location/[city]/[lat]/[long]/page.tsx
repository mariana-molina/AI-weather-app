import { getClient } from '@/apollo-client';
import CalloutCard from '@/components/CalloutCard';
import HumidityChart from '@/components/HumidityChart';
import InformationPanel from '@/components/InformationPanel';
import RainChart from '@/components/RainChart';
import StatCard from '@/components/StatCard';
import TempChart from '@/components/TempChart';
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQuery';
import cleanData from '@/lib/cleanData';
import getBasePath from '@/lib/getBasePath';

export const revalidate = 60;

type WeatherPageProps = {
	params: {
		city: string;
		lat: string;
		long: string;
	};
};

async function WeatherPage({ params: { city, lat, long } }: WeatherPageProps) {
	const client = getClient();
	const { data } = await client.query({
		query: fetchWeatherQuery,
		variables: {
			current_weather: 'true',
			longitude: long,
			latitude: lat,
			timezone: 'GMT',
		},
	});

	const results: Root = data.myQuery;

	//////////////////////////CHATGTP
	// const dataToSend = cleanData(results, city);
	// const res = await fetch(`${getBasePath()}/api/getWeatherSummary`, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-type': 'application/json',
	// 	},
	// 	body: JSON.stringify({
	// 		weatherData: dataToSend,
	// 	}),
	// });

	// const GPTData = await res.json();
	// const { content } = GPTData;
	////////////////////////////////////////////

	return (
		<div className="flex flex-col min-h-screen md:flex-row">
			<InformationPanel city={city} results={results} lat={lat} long={long} />
			<div className="flex-1 p-5 lg:p-10">
				<div className="p-5">
					<div className="pb-5">
						<h2 className="text-xl font-bold">Todays Overview</h2>
						<p className="text-sm text-gray-400">
							Last Updated at: {''}
							{new Date(results.current_weather.time).toLocaleString()} (
							{results.timezone})
						</p>
					</div>

					{/* <div className="m-2 mb-10">
						<CalloutCard message={content} />
					</div> */}

					<div className={'grid grid-cols-1 xl:grid-cols-2 gap-5 m-2'}>
						<StatCard
							title="Maximum Temperature"
							color="yellow"
							metric={`${results.daily.temperature_2m_max[0]}°`}
						/>
						<StatCard
							title="Minimum Temperature"
							color="green"
							metric={`${results.daily.temperature_2m_min[0]}°`}
						/>
						<div>
							<StatCard
								title="UV Index"
								color="rose"
								metric={`${results.daily.uv_index_max[0]}`}
							/>
							{Number(results.daily.uv_index_max[0]) > 5 && (
								<CalloutCard
									warning
									message="The UV is high today, be sure to wear SPF!"
								/>
							)}
						</div>
						<div className="flex space-x-3">
							<StatCard
								title="Wind Speed"
								color="cyan"
								metric={`${results.current_weather.windspeed} m/s`}
							/>
							<StatCard
								title="Wind Direction"
								color="violet"
								metric={`${results.current_weather.winddirection}°`}
							/>
						</div>
					</div>
				</div>
				<hr className="mb-5" />
				<div className="space-y-3">
					<TempChart results={results} />
					<RainChart results={results} />
					<HumidityChart results={results} />
				</div>
			</div>
		</div>
	);
}

export default WeatherPage;
