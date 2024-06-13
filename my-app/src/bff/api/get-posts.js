import { transformPost } from '../transformers';

export const getPosts = (page, limit) =>
	fetch(`http://localhost:3005/posts?_page=${page}&_per_page=${limit}`)
		.then((loadedPosts) => Promise.all([loadedPosts.json()]))
		.then(([loadedPosts]) => ({
			posts: loadedPosts.data && loadedPosts.data.map(transformPost),
			links: loadedPosts,
		}));
