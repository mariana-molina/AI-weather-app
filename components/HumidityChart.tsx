'use client';

import { AreaChart, Card, Title } from '@tremor/react';

type HumidityChartProps = {
	results: Root;
};

function HumidityChart({ results }: HumidityChartProps) {
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
		'Humidity (%)': results.hourly.relativehumidity_2m[i],
	}));

	const dataFormatter = (value: number): string => `${value}`;

	return (
		<Card>
			<Title>Humidity levels</Title>
			<AreaChart
				className="mt-6"
				data={data}
				showLegend
				categories={['Humidity (%)']}
				index="time"
				colors={['teal']}
				minValue={0}
				maxValue={100}
				valueFormatter={dataFormatter}
				yAxisWidth={40}
			/>
		</Card>
	);
}

export default HumidityChart;
