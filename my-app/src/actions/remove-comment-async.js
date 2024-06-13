import { setPostdata } from './set-post-data';

export const removeCommentAsync = (requestServer, postId, id) => (dispatch) => {
	requestServer('removePostComment', postId, id).then((postData) => {
		return dispatch(setPostdata(postData.res));
	});
};
