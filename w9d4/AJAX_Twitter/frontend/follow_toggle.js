class FollowToggle {
  constructor(el) {
    this.$el = el;
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
    } else if (this.followState === "followed") {
      this.$el.text("Unfollow!");
    };
  }

  handleClick(e) {
    const followToggle = this;
    e.preventDefault();
    
    return $.ajax({
      method: (followToggle.followState === "unfollowed") ? 'POST' : 'DELETE', 
      url: `/users/${followToggle.userId}/follow`,
      dataType: 'JSON',
      success: function(){
        followToggle.followState = followToggle.followState === "unfollowed" ? "followed" : "unfollowed";
        followToggle.render();
      }
    });
  }

}


module.exports = FollowToggle;