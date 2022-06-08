const express = require("express");
const { getUser, addUser, updateUser, deleteUser, userLogin } = require("../conrollers/user");
const router = express.Router();


router.route("/useracc").get(getUser)
router.route("/useracc").post(addUser)
router.route("/useracc/:id").put(updateUser).delete(deleteUser)


// ============login user ====== 
router.route("/login").post(userLogin)









module.exports = router;