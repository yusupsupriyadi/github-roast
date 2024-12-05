export type GithubProfile = {
	name: string;
	login: string;
	bio: string;
	location: string;
	company: string;
	blog: string;
	followers: number;
	following: number;
	public_repos: number;
	public_gists: number;
	created_at: string;
	updated_at: string;
	twitter_username: string;
	email: string;
	total_private_repos: number;
	collaborators: number;
};

export type Language = {
	name: string;
};
