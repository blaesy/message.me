const c_users = [];

// joins the user to the specific chatroom
const userJoin = (id, username) => {
    if (c_users.find(item => item.id === id)){
        return true;
    } else {
        const p_user = { id, username };
        c_users.push(p_user);
        return false;
    }
}

const getAllUsers = () => {
    return c_users;
}

console.log("user out", c_users);

// Gets a particular user id to return the current user
const getCurrentUser = (id) => {
  return c_users.find((p_user) => p_user.id === id);
}

// called when the user leaves the chat and its user object deleted from array
const userDisconnect = (id) => {
  const index = c_users.findIndex((p_user) => p_user.id === id);

  if (index !== -1) {
    return c_users.splice(index, 1)[0];
  }
}

module.exports = {
    getAllUsers,
  userJoin,
  getCurrentUser,
  userDisconnect,
};