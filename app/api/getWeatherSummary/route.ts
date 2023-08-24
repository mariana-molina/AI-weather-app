import { NextResponse } from 'next/server';
import openai from '@/openai';

export async function POST(request: Request) {
	const { weatherData } = await request.json();

	const response = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		temperature: 0.8,
		n: 1,
		stream: false,
		messages: [
			{
				role: 'system',
				content:
					'Pretend you are a weather news presenter LIVE on television be energetic and full of charisma. State the city you are providing a summary for. Then give a summary of todays weather only. Make it easy to understand for the user and list things to prepare (advice) for those weather conditions like use SPF or take an umbrella in 150 words or less',
			},
			{
				role: 'user',
				content: `hi, can i get a summary of todays weather. Use the following information to get the weather data: ${JSON.stringify(
					weatherData
				)}`,
			},
		],
	});

	return NextResponse.json(response.choices[0].message);
}
