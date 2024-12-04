import { GithubProfile } from '@/components/global.types';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const action: ActionFunction = async ({ request }) => {
	const genAI = new GoogleGenerativeAI(
		process.env.API_KEY_GEMINI_AI as string,
	);
	const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

	const formData = await request.json();
	const body = formData.body;
	console.log(body);
	return json({ data: body });
	const prompt = generatePrompt(JSON.parse(body));

	try {
		const res = await model.generateContent(prompt);
		const result = await res.response.text();
		return json({ data: result });
	} catch (error) {
		throw new Error(`Failed to generate content: ${error}`);
	}
};

const generatePrompt = (data: GithubProfile) => {
	return `
		Roasting lah profile github berikut dengan bahasa santai dan kekinian. Tingkat kekerasan roasting pedas.

		Data Profil Github untuk di roasting:
		Nama: ${data.name}
		Bio: ${data.bio}
		Lokasi: ${data.location}
		Perusahaan: ${data.company}
		Website: ${data.blog}
		
		Statistik GitHub:
		Followers: ${data.followers}
		Following: ${data.following}
		Repositori Publik: ${data.public_repos}
		Gists Publik: ${data.public_gists}
		Bergabung sejak: ${new Date(data.created_at).getFullYear()}
		Terakhir aktif: ${new Date(data.updated_at).toLocaleDateString()}

		Berikut beberapa aspek yang bisa dijadikan bahan roasting:

		1. Followers (${data.followers}) vs Following (${
		data.following
	}): Bandingkan jumlah pengikut dengan yang diikuti. Apakah terlalu introvert atau terlalu sosial di GitHub?
		
		2. Aktivitas Repositori: ${data.public_repos} repo publik tapi ${
		data.public_gists
	} gists - apa yang bisa dikatakan tentang ini?
		
		3. Bio Singkat: "${
			data.bio
		}" - Seberapa meyakinkan bio tersebut? Terlalu sederhana atau terlalu berlebihan?
		
		4. Profil Profesional:
		   - Perusahaan: ${data.company || 'Tidak disebutkan'}
		   - Website: ${data.blog || 'Tidak ada'}
		   - Email: ${data.email || 'Misterius, tidak dibagikan'}
		
		5. Keaktifan:
		   - Bergabung sejak ${new Date(data.created_at).getFullYear()}
		   - Update terakhir pada ${new Date(data.updated_at).toLocaleDateString()}
		   
		6. Media Sosial: ${
			data.twitter_username ? 'Ada Twitter' : 'Tidak ada Twitter'
		} - Seberapa sosial orangnya?

		7. Lokasi: ${
			data.location || 'Tidak disebutkan'
		} - Apa yang bisa dikatakan tentang lokasinya?

		Buatlah roasting yang kreatif dan lucu berdasarkan data di atas. Ingat untuk tetap sopan dan menghibur!
	`;
};
