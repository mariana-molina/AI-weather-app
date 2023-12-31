import { SunIcon } from '@heroicons/react/solid';

export default function Loading() {
	return (
		<div className="bg-gradient-to-br from-[#394F68] to-[#183B7E] min-h-screen flex flex-col justify-center items-center text-slate-500">
			<SunIcon
				color="yellow"
				className="h-24 w-24 animate-bounce text-yellow-500"
			/>
			<h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
				Loading City Weather Information
			</h1>
			<h2 className="text-xl font-bold text-center mb-10 animate-pulse">
				Hold on, we are crunching the numbers & generating an AI summary of the
				weather!
			</h2>
		</div>
	);
}
