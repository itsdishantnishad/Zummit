const express=require("express")
const router=express.Router();
const {registerUser, loginUser, logout, getUser,upcomingGroups}=require("../controllers/User/userController");
const {appointmentList} = require("../controllers/User/appointmentList");
const { protect } = require("../middleware/authMiddleware");


router.post("/register",registerUser);
router.post("/login",loginUser)
router.get("/logout",logout)
router.get("/getUser",protect,getUser)
router.get("/upcomingGroups",upcomingGroups);
router.get("/appointmentList",appointmentList);
module.exports=router;
