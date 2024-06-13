import { setPostdata } from './set-post-data';

export const savePostAsync = (requestServer, newPostData) => (dispatch) =>
	requestServer('savePost', newPostData).then((updatedPost) => {
		dispatch(setPostdata(updatedPost.res));

		return updatedPost.res;
	});
