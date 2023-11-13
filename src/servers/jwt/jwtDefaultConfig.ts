// ** Auth Endpoint

export default {
	loginEndpoint: "/jwt/login",
	registerEndpoint: "/jwt/register",
	refreshEndpoint: "/jwt/refresh-token",
	logoutEndpoint: "/jwt/refresh-token",

	tokenType: "Bearer",
	accessTokenKey: "access_token",
	refreshTokenKey: "refresh_token",
};
