import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GithubProfile } from '@/components/global.types';
import axios from 'axios';

const TOKEN = process.env.API_KEY_GEMINI_AI;
const GITHUB_PERSONAL_TOKEN = process.env.GITHUB_PERSONAL_TOKEN;

/**
 * Handler for HTTP POST request
 * Fetches GitHub user profile data and generates roasting based on that data
 * @param request - Request Object containing GitHub username and language
 * @returns JSON Response containing roasting result or error message
 */
export async function POST(request: Request) {
	try {
		const { userNameGithub, language } = await request.json();
		const githubProfile = await getGithubProfile(userNameGithub);
		const prompt = await generatePrompt(githubProfile, language);
		const model = new GoogleGenerativeAI(
			TOKEN as string,
		).getGenerativeModel({
			model: 'gemini-1.5-flash', // this is the model that will be used to generate the content
			generationConfig: { temperature: 1.0 }, // this is the temperature for the AI to generate the content
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
 * Generates AI prompt based on GitHub profile data
 * @param data - Object containing GitHub user profile data
 * @param language - Desired output language
 * @returns Formatted prompt string for AI
 */
const generatePrompt = (data: GithubProfile, language: string) => {
	return `
		You are a roasting comedian who is an expert at analyzing GitHub profiles. Create a spicy, funny, entertaining roast with a touch of satire. Roast in ${language}. Use casual language, slang, trendy terms and use emojis.

		GitHub Profile Data to roast:
		Name: ${data.name}
		Username: ${data.login} 
		Bio: ${data.bio || 'Empty, not filled yet'}
		Location: ${data.location || 'Middle of nowhere'}
		Company: ${data.company || 'Still unemployed'}
		Website: ${data.blog || 'No website'}

		Account Statistics:
		• Followers: ${data.followers} people (${
		data.followers < 10 ? 'Wow so quiet!' : 'Pretty popular!'
	})
		• Following: ${data.following} people
		• Followers/Following Ratio: ${(data.followers / data.following).toFixed(2)}
		• Public Repositories: ${data.public_repos} (${
		data.public_repos < 5 ? 'Still a beginner!' : 'Pretty diligent!'
	})
		• Private Repositories: ${
			data.total_private_repos || 'Being mysterious hiding repos'
		}
		• Collaborators: ${data.collaborators || 0} (${
		data.collaborators ? 'Has friends!' : 'Forever alone coding'
	})
		• Member since: ${new Date(data.created_at).getFullYear()} (${
		new Date().getFullYear() - new Date(data.created_at).getFullYear()
	} years on GitHub)
		• Twitter: ${
			data.twitter_username
				? '@' + data.twitter_username
				: 'Anti social media'
		}

		Based on the data above, create a roast that:

		1. Analyzes their GitHub profile with a hilarious stand-up comedy style
		2. Makes jokes about:
		   - Followers and following ratio statistics
		   - Repository quantity and quality
		   - Activity and contributions
		3. Playfully tease about:
		   - Their coding habits
		   - Commit patterns and activities
		   - Bio and profile information
		4. Provide 3 development suggestions packaged with humor:
		   - Repository quality improvement
		   - Collaboration and networking
		   - Personal branding on GitHub
		5. Entertaining words of encouragement at the end

		Style Guide:
		- Use ${language} language
		- Use slang and trendy terms
		- Insert relevant meme and pop culture references
		- Roasting should be spicy but constructive
		- Smart and contextual humor
		- Actionable suggestions wrapped in jokes
		- Feel free to use emojis 🔥
		- Use <b> tags for important points and highlights or bold text, don't use * symbols

		Note: Avoid:
		- Harsh or offensive language
		- Too personal criticism
		- Markdown or formatting other than <b>
	`;
};

/**
 * Fetch GitHub user profile data using GitHub API
 * @param userNameGithub - GitHub username to fetch data from
 * @returns Promise that resolves with GitHub profile data
 */
const getGithubProfile = async (userNameGithub: string) => {
	const githubProfile = await axios.get(
		`https://api.github.com/users/${userNameGithub}`,
		{
			headers: {
				Accept: 'application/vnd.github+json',
				Authorization: `Bearer ${GITHUB_PERSONAL_TOKEN}`,
				'X-GitHub-Api-Version': '2022-11-28',
			},
		},
	);
	return githubProfile.data;
};
