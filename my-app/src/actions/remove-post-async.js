export const removePostAsync = (requestServer, id) => (dispatch) =>
	requestServer('removePost', id);
