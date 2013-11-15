var CardView = Ember.View.extend({
  classNameBindings:["isClosable:closable", "stateClass"],
  isClosable: function(){
     var currentState = this.get("controller.model.current_state");

     return App.get("loggedIn") && currentState.is_last && this.get("controller.model.state") === "open";
  }.property("controller.model.current_state","controller.model.state"),
  stateClass: function(){
     return "hb-state-" + this.get("controller.model.state");
  }.property("controller.model.current_state", "controller.model.state"),
  didInsertElement: function () {
    this._super();
    this.$("a, .clickable").on("click.hbcard", function (ev){ console.log(arguments); ev.stopPropagation(); } )
  },
  willDestroyElement : function () {
    this.$("a, .clickable").off("click.hbcard");
    return this._super();
  }

  
});

module.exports = CardView;

