Tags = new Mongo.Collection('tags');



Meteor.methods({
  addTags: function(tags){

    //validate that this is an array that might contain strings
    check(tags, Match.Optional([String]));

    //if the array is not empty
    if(tags.length > 0){

      //needed?
      var authorId = Meteor.userId();
      
      // loop through all tags
      for(var i = 0; i == tags.length; i++){


      // should only be checking for one tag here?
        var current_tag = Tags.find({tag:tag[i]});

        // if no matches are found for this tag
        // should only be checking for not nil here?
        if(current_tag.count() === 0){

          //extend this tag with additional attributes
          current_tag = _.extend(tag[i], {
            usedBy: Meteor.userId(),
            createdAt: new Date(),
            updatedAt: new Date()
          });

          var tagId = Tags.insert(current_tag._id, {
            $set: 
            {
              // should be adding to this, not replacing the existing
              // usedBy: authorId
              // authorId: Meteor.userId()
            }
          });

        } else {

          // var tag = Tags.findOne({_id: current_tag._id });

          var tag = current_tag.upsert(current_tag);
          // if tag exists, upsert this authorID to that tag

        };
        // else return false?

      }; // for
    };
}
  // ,
 //  updatePost: function(postAttributes){

 //    check(Meteor.userId(), String);
 //    check(postAttributes, {
 //      postId: String,
 //      title: String,
 //      content: String,
 //      tags: Match.Optional([String])
 //    });

 //    var post = Posts.findOne({_id: postAttributes.postId });

 //    // Validation: post content is not empty, current user is post author
 //    if(Logd.posts.hasContent(postAttributes.content)
 //       && post.authorId === Meteor.user()._id)
 //    {

 //      Posts.upsert(postAttributes.postId, {
 //        $set:
 //        { 
 //          title: postAttributes.title,
 //          content: postAttributes.content,
 //          tags: postAttributes.tags,
 //          updatedAt: new Date()       
 //        }
 //      });     
 //    };
 //  }
 // ,
 //  deleteTags: function(postId){
 //    check(Meteor.userId(), String);
 //    check(postId, String);
 //    Tags.remove(postId);
 //  }
});