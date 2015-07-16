Notifications = new Mongo.Collection("notifications");

Notifications.allow({
  update: function(userId, doc, fieldNames){

    return ownsDocument(userId, doc) && 
    fieldName.length === 1 &&
    fieldNames[0] === 'read';

  }
});

// createSaveNotification = function()