const NotificationModel = require("../models/NotificationModel.model");

const getNotifications = async (req,res) => {
    try {
        const userId = req.user._id;
        const notifications = await NotificationModel.find({userId,markAsRead : false})
        if(notifications)
            res.status(200).send("notification found");
        else    
            res.status(400).send("No such notification");
    } catch (error) {
        return res.status(400).json(error);
    }
}

const markNotificationAsRead = async (req, res) => {
    try {
      const notificationId = req.params.id;
      const notification = await NotificationModel.findById({"userId":notificationId});
  
      if (!notification) return res.status(404).json({ message: 'Notification not found' });
  
      notification.markAsRead = true;
      await notification.save();
  
      res.status(200).json({ message: 'Notification marked as read' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {getNotifications,markNotificationAsRead};