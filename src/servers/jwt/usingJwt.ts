import JwtService from './jwtService';

export default function usingJwt(jwtOverrideConfig: object) {
  const jwt = new JwtService(jwtOverrideConfig);
  return { jwt };
}
