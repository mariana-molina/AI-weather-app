import { NextResponse } from 'next/server';
import openai from '@/openai';

export async function POST(request: Request) {
	const { weatherData } = await request.json();

	const response = await openai.chat.completions.create({
		messages: [{ role: 'user', content: 'Say this is a test' }],
		model: 'gpt-3.5-turbo',
	});
	console.log('HERE CHATGPT RES:👌👌', response.choices);
	return NextResponse.json(response.choices[0].message);
}
