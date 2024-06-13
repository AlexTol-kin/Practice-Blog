export const getCommentsCount = (comments = [], postId) => {
	const postsComments = comments.filter(
		({ postId: commentPostId }) => commentPostId === postId,
	);
	return postsComments.length;
};
