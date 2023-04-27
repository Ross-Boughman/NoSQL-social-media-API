const router = require("express").Router();
const { findAllThought, findOneThought, createThought, changeThought, deleteThought, createReaction, deleteReaction, } = require("../../controllers/thought-controller");

// routes for all thoughts
router.route("/").get(findAllThought).post(createThought);

// routes for single thoughts
router
  .route("/:id")
  .get(findOneThought)
  .put(changeThought)
  .delete(deleteThought);

// create reaction route
router.route("/:thoughtId/reactions").post(createReaction);

// delete reaction route
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;