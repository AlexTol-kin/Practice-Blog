import { setPostdata } from './set-post-data';

export const loadPostAsync = (requestServer, postId) => (dispatch) =>
	requestServer('fetchPost', postId).then((postData) => {
		if (postData.res) {
			dispatch(setPostdata(postData.res));
		}

		return postData;
	});
