import { addComments, getPost } from '../api';
import { sessions } from '../sessions';
import { getPostCommentsWithAuthor } from '../utils';
import { ROLE } from '../constans';

export const addPostComment = async (hash, userId, postId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	await addComments(userId, postId, content);

	const post = await getPost(postId);

	const commentsWithAuthor = await getPostCommentsWithAuthor(postId);

	return {
		error: null,
		res: { ...post, comments: commentsWithAuthor },
	};
};
