module.exports = {
  generateNewUser() {
    const newUser = new UserModel("Guillaume", 12);
    return newUser;
  },
};
