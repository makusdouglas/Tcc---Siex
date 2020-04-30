import bcrypt from 'bcryptjs';
export default { 
  async generateHash(password){
  if (password){
    console.log('PASSWORD'+ password);
    const password_hash = await bcrypt.hash(password, 8);
    console.log('PASSWORD_HASH'+ password_hash);
    return password_hash;
  }
},

async checkPassword(password, password_hash){
  const result = await bcrypt.compare(password, password_hash);
  return result;
}
}