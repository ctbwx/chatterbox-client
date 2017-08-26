let app = {

  // Parse API
  server: "http://parse.atx.hackreactor.com/chatterbox/classes/messages",

  rooms: {},

  friends: {},

  currentRoom: 'Random',

  init: function() {
    this.fetch( function(responseData) {
      console.log(this);
      console.log(responseData.results);
      for (var message of responseData.results) {
        this.renderMessage(message);
      }

    }.bind(this) );
  },

  send: function(data, success) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: data,
      contentType: 'application/json',
      success: success
    });
  },

  fetch: function(success) {
    $.ajax({
      url: this.server,
      type: 'GET',
      data: 'order=-createdAt',
      contentType: 'application/json',
      success: success
    });
  },

  clearMessages: function() {
    $("#chats").empty();
  },

  renderMessage: function(message) {
    let $node = $(`<div class="message">
      <div class="user-${message.username}">${message.username}</div>
      <div class="messageText"></div>
    </div>`);
    $node.find(".messageText").text(message.text);
    $node.find(".username").click((event) => {
      if (this.friends[message.username]) {
        delete this.friends[message.username];
      } else {
        this.friends[message.username] = message.username;
      }

      this.handleUsernameClick();
    });
    $("#chats").prepend($node);
  },

  renderRoom: function(room) {
    let $room = $("<option></option>");
    $room.text(room);
    $("#roomSelect").append($room);
  },

  handleUsernameClick: function() {

  },

  handleSubmit: function() {

  }


};
