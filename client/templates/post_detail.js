// var isEditable = new ReactiveVar();


// Template.postDetail.created = function(){
//     this.data.makeEditable = false;
//     this.data.makeEditableDep = new Deps.Dependency();
// };

// Template.postDetail.helpers ({
//   isEditable: function() {
//     // this.makeEditable.depend();
//     return Template.instance().isEditable.get();
// }
// });

// Template.postDetail.events({
//   'click .edit' : function(event, template){
//     template.isEditable.set(true);
 
//   },
//     "click .cancel": function(event,template) {
//     template.isEditable.set(false);
//   }
// });