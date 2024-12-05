export default async function sitemap() {
	return [
		{
			url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
			lastModified: new Date().toISOString(),
		},
		
	];
}