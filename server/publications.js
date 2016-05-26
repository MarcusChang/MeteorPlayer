/**
 * Created by Marcus_Chang on 2016/5/27.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});