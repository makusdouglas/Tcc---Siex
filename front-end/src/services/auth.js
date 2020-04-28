import expiryData from './expiryData';

export function isAutenticated() {
  const token = expiryData.getWithExpiry('token');
  console.log('TOKEN AUTH', token);
  if (!token) {
    return false;
  }
  return true;
}
