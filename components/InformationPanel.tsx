import weatherCodeToString from '@/lib/weatherCodeToString';
import CityPicker from './CityPicker';
import Image from 'next/image';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

type InformationPanelProps = {
	city: string;
	lat: string;
	long: string;
	results: Root;
};

function InformationPanel({ city, lat, long, results }: InformationPanelProps) {
	return (
		<div className="p-10 bg-gradient-to-br from-[#394f68] to-[#183B7E] text-white">
			<div className="pb-5">
				<h1 className="font-bold text-6xl">{decodeURI(city)}</h1>
				<p>
					Long/Lat:{long}, {lat}
				</p>
			</div>
			<CityPicker />
			<hr className="my-10" />
			<div className="mt-5 flex items-center justify-between spa-x-10 mb-5">
				<div>
					<p className="text-xl">
						{new Date().toLocaleDateString('en-GB', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</p>
					<p className="font-extralight">
						Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
					</p>
				</div>

				<p className="text-xl font-bold uppercase">
					{new Date().toLocaleTimeString('en-GB', {
						hour: 'numeric',
						minute: 'numeric',
						hour12: false,
					})}
				</p>
			</div>
			<hr className="mt-10 mb-5" />

			<div className="flex items-center justify-between">
				<div>
					<Image
						src={`https://www.weatherbit.io/static/img/icons/${
							weatherCodeToString[results.current_weather.weathercode].icon
						}.png`}
						alt={weatherCodeToString[results.current_weather.weathercode].label}
						width={75}
						height={75}
					/>
					<div className="flex items-center justify-between space-x-10">
						<p className="text-6xl font-semibold">
							{results.current_weather.temperature}°C
						</p>
						<p className="text-lg font-extralight text-right">
							{weatherCodeToString[results.current_weather.weathercode].label}
						</p>
					</div>
				</div>
			</div>
			<div className="space-y-2 py-5">
				<div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
					<SunIcon className="h-10 w-10 text-gray-400" />
					<div className="flex-1 flex justify-between items-center">
						<p className="font-extralight">Sunrise</p>
						<p className="text-2xl uppercase">
							{new Date(results.daily.sunrise[0]).toLocaleTimeString('en-GB', {
								hour: 'numeric',
								minute: 'numeric',
								hour12: true,
							})}
						</p>
					</div>
				</div>
				<div className="flex items-center space-x-2 px-4 py-3 border border-[#6F90CD] rounded-md bg-[#405885]">
					<MoonIcon className="h-10 w-10 text-gray-400" />
					<div className="flex-1 flex justify-between items-center">
						<p className="font-extralight">Sunset</p>
						<p className="text-2xl uppercase">
							{new Date(results.daily.sunset[0]).toLocaleTimeString('en-GB', {
								hour: 'numeric',
								minute: 'numeric',
								hour12: true,
							})}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InformationPanel;
