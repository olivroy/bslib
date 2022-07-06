var toggleButtonsInputBinding = new Shiny.InputBinding();
$.extend(toggleButtonsInputBinding, {

  find: function(scope) {
    return $(scope).find(".btn-group.bslib-toggle-buttons");
  },

  getValue: function(el) {
    var inputs = $(el).find("input.btn-check");
    var vals = [];
    inputs.each(function(i) {
      if (this.checked) {
        vals.push($(this).attr("data-value"));
      }
    });
    return vals.length > 0 ? vals : null;
  },

  subscribe: function(el, callback) {
    $(el).on(
      'change.toggleButtonsInputBinding',
      function(event) { callback(true); }
    );
  },

  unsubscribe: function(el) {
    $(el).off(".toggleButtonsInputBinding");
  }

  // TODO: Should probably be able to update selected, and insert/remove items?
  //receiveMessage: function(el, data) {}

});

Shiny.inputBindings.register(toggleButtonsInputBinding);