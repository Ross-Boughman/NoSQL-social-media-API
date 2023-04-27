const router = require("express").Router();
const { findAllUser, findOneUser, createUser, createFriend, deleteFriend, changeUser, deleteUser, } = require("../../controllers/user");

// routes for creating a user or finding all users
router.route("/").get(findAllUser).post(createUser);

// routes for friends
router.route("/:userId/friends/:friendId").post(createFriend).delete(deleteFriend);

// routes for finding, updating, or removing one user
router.route("/:id").get(findOneUser).put(changeUser).delete(deleteUser);

module.exports = router;