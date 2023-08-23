'use client';

import { AreaChart, Card, Title } from '@tremor/react';

type RainChartProps = {
	results: Root;
};

function RainChart({ results }: RainChartProps) {
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
		'Rain (%)': results.hourly.precipitation_probability[i],
	}));

	const dataFormatter = (value: number): string => `${value}`;

	return (
		<Card>
			<Title>Chances of Rain</Title>
			<AreaChart
				className="mt-6"
				data={data}
				showLegend
				categories={['Rain (%)']}
				index="time"
				colors={['blue']}
				minValue={0}
				maxValue={100}
				valueFormatter={dataFormatter}
				yAxisWidth={40}
			/>
		</Card>
	);
}

export default RainChart;
