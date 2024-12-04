import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GithubProfile } from '@/components/global.types';
import axios from 'axios';

const TOKEN = process.env.API_KEY_GEMINI_AI;

/**
 * Handler untuk HTTP POST request
 * Mengambil data profil GitHub user dan menghasilkan roasting berdasarkan data tersebut
 * @param request - Object Request yang berisi username GitHub dan bahasa
 * @returns Response JSON berisi hasil roasting atau pesan error
 */
export async function POST(request: Request) {
	try {
		const { userNameGithub, language } = await request.json();
		const githubProfile = await getGithubProfile(userNameGithub);
		const prompt = await generatePrompt(githubProfile, language);
		const model = new GoogleGenerativeAI(
			TOKEN as string,
		).getGenerativeModel({
			model: 'gemini-1.5-flash',
			generationConfig: { temperature: 2.0 },
		});
		const res = await model.generateContent(prompt);
		const result = res.response.text();
		return NextResponse.json({ data: result });
	} catch (error) {
		return NextResponse.json(
			{ error: `Error memproses permintaan: ${error}` },
			{ status: 500 },
		);
	}
}

/**
 * Menghasilkan prompt untuk AI berdasarkan data profil GitHub
 * @param data - Object berisi data profil GitHub user
 * @param language - Bahasa yang diinginkan untuk output
 * @returns String prompt yang terformat untuk AI
 */
const generatePrompt = (data: GithubProfile, language: string) => {
	return `
		Roast the following GitHub profile with a casual and modern tone. Make it spicy but keep it fun. Make sure to use ${language} language.

		GitHub Profile Data to roast:
		Name: ${data.name}
		Bio: ${data.bio}
		Location: ${data.location}
		Company: ${data.company}
		Website: ${data.blog}
		
		GitHub Statistics:
		Followers: ${data.followers}
		Following: ${data.following}
		Public Repositories: ${data.public_repos}
		Public Gists: ${data.public_gists}
		Joined since: ${new Date(data.created_at).getFullYear()}
		Last active: ${new Date(data.updated_at).toLocaleDateString()}

		Here are some aspects that can be used for roasting:

		1. Followers (${data.followers}) vs Following (${
		data.following
	}): Compare the number of followers with following. Are they too introverted or too social on GitHub?
		
		2. Repository Activity: ${data.public_repos} public repos but ${
		data.public_gists
	} gists - what can be said about this?
		
		3. Brief Bio: "${
			data.bio
		}" - How convincing is that bio? Too simple or too over the top?
		
		4. Professional Profile:
		   - Company: ${data.company || 'Not mentioned'}
		   - Website: ${data.blog || 'None'}
		   - Email: ${data.email || 'Mysterious, not shared'}
		
		5. Activity:
		   - Joined since ${new Date(data.created_at).getFullYear()}
		   - Last update on ${new Date(data.updated_at).toLocaleDateString()}
		   
		6. Social Media: ${
			data.twitter_username ? 'Has Twitter' : 'No Twitter'
		} - How social are they?

		7. Location: ${
			data.location || 'Not mentioned'
		} - What can be said about their location?

		Create a creative and funny roast based on the data above. Remember to keep it respectful and entertaining!
	`;
};

/**
 * Mengambil data profil GitHub user menggunakan GitHub API
 * @param userNameGithub - Username GitHub yang akan diambil datanya
 * @returns Promise yang resolve dengan data profil GitHub
 */
const getGithubProfile = async (userNameGithub: string) => {
	const githubProfile = await axios.get(
		`https://api.github.com/users/${userNameGithub}`,
	);
	return githubProfile.data;
};
