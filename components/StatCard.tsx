'use client';

import { Color, Card, Text, Metric } from '@tremor/react';

type StatCardProps = {
	title: string;
	metric: string;
	color?: Color;
};

function StatCard({ title, metric, color }: StatCardProps) {
	return (
		<Card decoration="top" decorationColor={color}>
			<Text>{title}</Text>
			<Metric>{metric}</Metric>
		</Card>
	);
}

export default StatCard;
