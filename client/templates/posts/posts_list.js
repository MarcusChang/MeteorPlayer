/**
 * Created by Marcus_Chang on 2016/5/25.
 */
Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});