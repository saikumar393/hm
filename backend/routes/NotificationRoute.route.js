const express=require("express")
const NotificationRouter=express.Router()

const NotificationController=require("../controllers/NotificationController.controller")
const auth=require("../middleware/auth.middleware");

// NotificationRouter.use(auth);

NotificationRouter.get("/getNotification",NotificationController.getNotifications)
NotificationRouter.post("/mark",NotificationController.markNotificationAsRead)

module.exports=NotificationRouter