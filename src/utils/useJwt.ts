import usingJwt from "../servers/jwt/usingJwt";

const { jwt } = usingJwt({});

export default jwt.getHttp();
