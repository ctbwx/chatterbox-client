let app = {

  // Parse API
  server: "http://parse.atx.hackreactor.com/chatterbox/classes/messages",

  // Message format
  message: {
    username: undefined,
    text: undefined,
    roomname: undefined
  },

  init: function() {

  },

  send: function(message) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

  fetch: function(message) {
    $.ajax({
      url: this.server,
      type: 'GET',
      data: message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message received');
      },
      error: function (data) {
        console.error('chatterbox: Failed to receive message', data);
      }
    });
  },

  clearMessages: function() {
    $("#chats").empty();
  },

  renderMessage: function(message) {
    let $message = $('<div></div>');
    $message.text(message);
    $("#chats").prepend($message);
  },

  renderRoom: function(room) {
    let $room = $("<option></option>");
    $room.text(room);
    $("#roomSelect").append($room);
  },


};

app.init();
