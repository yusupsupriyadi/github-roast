export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				crawlDelay: 300,
			},
		],
		sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
	};
}
