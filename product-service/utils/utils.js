import {HttpCode} from './const';

export const normalizeResponse = (response) => {
	const defaultResponse = {
		statusCode: HttpCode.OK,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: '',
	};

	return Object.assign(
		{},
		defaultResponse,
		response,
	);
};

export const getErrorResponse = (error) => {
	const response = {
		statusCode: error.status || HttpCode.INTERNAL_SERVER_ERROR,
		body: JSON.stringify({
				error: {
					message: error.message,
				},
			},
			null,
			2
		),
	};

	return normalizeResponse(response);
};