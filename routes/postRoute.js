const express = require("express");
const router = express.Router();
const {fetchallpostsofUser ,newpostController , fetchallposts ,fetchonepost , deletepost , updatepost} = require("../controllers/postController")

router.post("/addpost" , newpostController)
router.get("/allposts" , fetchallposts)
router.get("/onepost/:id" , fetchonepost)
router.delete("/deletepost/:id" , deletepost )
router.post("/updatepost/:id" , updatepost)
router.post("/postofuser" , fetchallpostsofUser)
module.exports = router