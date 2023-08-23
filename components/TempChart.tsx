'use client';

import { AreaChart, Card, Title } from '@tremor/react';

type TempChartProps = {
	results: Root;
};

function TempChart({ results }: TempChartProps) {
	const hourly = results?.hourly.time
		.map(time =>
			new Date(time).toLocaleString('en-US', {
				hour: 'numeric',
				hour12: false,
			})
		)
		.slice(1, 25);

	const data = hourly.map((hour, i) => ({
		time: Number(hour),
		'UV Index': results.hourly.uv_index[i],
		'Temperature (C)': results.hourly.temperature_2m[i],
	}));

	const dataFormatter = (value: number): string => `${value}`;

	return (
		<Card>
			<Title>Temperature & UV Index</Title>
			<AreaChart
				className="mt-6"
				data={data}
				showLegend
				categories={['Temperature (C)', 'UV Index']}
				index="time"
				colors={['yellow', 'rose']}
				minValue={0}
				valueFormatter={dataFormatter}
				yAxisWidth={40}
			/>
		</Card>
	);
}

export default TempChart;
