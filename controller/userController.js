const User = require('../model/user');

const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  await User.findByIdAndUpdate(id, { name, email, password });
  const updatedUser = await User.findById(id);

  res.json({
    message: 'User updated',
    updatedUser,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.deleteOne({ _id: id });
  res.json({ message: 'User deleted' });
};

module.exports = { getAllUsers, updateUser, deleteUser };
