Users.beforeCreate((user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, user.salt);
      })
      .then((hash) => {
        user.password = hash;
      });
  });
  
  Users.prototype.hash = function (password, salt) {
    return bcrypt.hash(password, salt);
  };


  
