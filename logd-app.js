// if (Meteor.isClient) {



//   Template.body.helpers({
//     tasks: function() {
//       if (Session.get("hideCompleted")) {
//         return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
//       } else {
//         return Tasks.find({}, {sort: {createdAt: -1}});
//       }
//     },
//     hideCompleted: function(){
//       return Session.get("hideCompleted");
//     },
//     tasksRemaining: function() {
//       return Tasks.find({checked: {$ne: true}}).count();
//     }
//   });

//   Template.body.events({
//     // called when new task form is submitted
//     "submit .new-task": function (event) {
//       var text = event.target.text.value;

//       Meteor.call('addTask', text);

//       // Tasks.insert({
//       //   text: text,
//       //   createdAt: new Date(),
//       //   owner: Meteor.userId(),
//       //   username: Meteor.user().username
//       // });

//       // clear form
//       event.target.text.value = "";
      
//       // prevent default form submit
//       return false
//     },
//     "change .hide-completed input": function (event) {
//       Session.set("hideCompleted", event.target.checked);
//     }
//   });

//   Template.task.helpers({
//     isOwner: function () {
//       return this.owner === Meteor.userId();
//     }
//   });

//   Template.task.events({
//     "click .toggle-checked": function () {
  
//       // UPDATE 
//       // was Tasks.update(this._id, {$set: {checked: ! this.checked}});
//       Meteor.call("setChecked", this._id, ! this.checked );
//     },
//     "click .delete": function () {

//       // DELETE
//       Meteor.call("deleteTask", this._id);

//       // was Tasks.remove(this._id);
//     },
//     "click .toggle-private": function(){
//       Meteor.call("setPrivate", this._id, ! this.private)
//     }
//   })

//   Accounts.ui.config({
//     passwordSignupFields: "USERNAME_ONLY"
//   })
// };

// // with a secure model, we need one db method for each operation
// Meteor.methods({
//   addTask: function(text) {
//     // ensure user is signed in before being able to add a task
//     if (!Meteor.userId()) {
//       throw new Meteor.error("not-authorized");
//     };

//     Tasks.insert({
//       text: text,
//       createdAt: new Date(),
//       owner: Meteor.userId(),
//       username: Meteor.user().username,
//       private: true
//     });
//   },
//   deleteTask: function(taskId){

//     var task  = Tasks.findOne(taskId);

//     // only allow owner to check off a private task
//     if (task.private && task.owner !== Meteor.userId()) {
//       throw new Meteor.error("not-authorized");
//     }

//     // if(confirm("Delete this task?")) {
//       Tasks.remove(taskId);
//     // }


//   },
//   setChecked: function (taskId, setChecked){
//     Tasks.update(taskId, { $set: { checked: setChecked }});
//   },
//   setPrivate: function (taskId, setToPrivate) {
//     var task = Tasks.findOne(taskId);

//     //only task owner can set a task to private
//     if (task.owner !== Meteor.userId()) {
//       throw new Meteor.error("not-authorized");
//     }

//     Tasks.update(taskId, { $set: { private: setToPrivate } });
//   }
// });


// if (Meteor.isServer) {

//   Meteor.publish("tasks", function(){

//     // only publish tasks that are public or belong to the current user
//     return Tasks.find({
//       $or: [
//         { private: { $ne: true } },
//         { owner: this.userId }
//       ]
//     });
//   });
// }



