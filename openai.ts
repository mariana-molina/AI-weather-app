import OpenAI from 'openai';

const configuration = {
	apiKey: process.env.OPENAI_API_KEY,
	// organization: 'org-6X4EclZd7jPo60Mx7VrlaELH',
};
const openai = new OpenAI(configuration);

export default openai;
