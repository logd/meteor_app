Tags = new Mongo.Collection('tags');


// BEFORE RUNNING THIS METHOD, CHECK TO SEE IF TAG EXISTS
// IF TAG EXIST, call updateTag instead

Meteor.methods({
  createTag: function(tagAttributes){

    check(Meteor.userId(), String);
    check(tagAttributes, {
      title:  String,
      authors: Match.ObjectIncluding({ authorId: String })
    });

    var tag = _.extend(tagAttributes, {
      //TODO: assign updatedAt to this author
      updatedAt: new Date()
    });

    var tag = {
      title: tagAttributes.title,
      authors: {
        authorId: tagAttributes.authors.authorId,
        updatedAt: new Date()
      }
    }

    var tagId = Tags.insert(tag);

     return {
       _id: tagId
     };
  },
  updateTag: function(tagId, tagAuthor){

    check(tagId, String);
    check(tagAuthor, {
      authorId: String
    });

    var tag = Tags.findOne({ _id: tagId });
    
    // var tag.authors = _.extend(tagAttributes, {
    //   //TODO: assign updatedAt to this author, not the tag
    //   authors: 
    //   updatedAt: new Date()
    // });

    Tags.upsert(tag._id, {
      $set:
      { 
        authors: 
        { 
          authorId: tagAuthor.authorId,
          updatedAt: new Date()
        }       
      }
    });
  }
});
  
// NOTES
// //if the array is not empty
//     if(tags.length > 0){

//       //needed?
//       var authorId = Meteor.userId();
      
//       // loop through all tags
//       for(var i = 0; i == tags.length; i++){


//       // should only be checking for one tag here?
//         var current_tag = Tags.find({tag:tag[i]});

//         // if no matches are found for this tag
//         // should only be checking for not nil here?
//         if(current_tag.count() === 0){

//           //extend this tag with additional attributes
//           current_tag = _.extend(tag[i], {
//             usedBy: Meteor.userId(),
//             createdAt: new Date(),
//             updatedAt: new Date()
//           });

//           var tagId = Tags.insert(current_tag._id, {
//             $set: 
//             {
//               // should be adding to this, not replacing the existing
//               // usedBy: authorId
//               // authorId: Meteor.userId()
//             }
//           });

//         } else {

//           // var tag = Tags.findOne({_id: current_tag._id });

//           var tag = current_tag.upsert(current_tag);
//           // if tag exists, upsert this authorID to that tag

//         };
//         // else return false?

//       }; // for