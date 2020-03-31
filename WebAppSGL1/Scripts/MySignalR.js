$.connection.hub.start()
    .done(function ()
    {
        //console.log("My SignalR Connection was successfull!")
        $.connection.myHhub01.server.announce("My SignalR Connection was successfull!");
    })
    .fail(function () {
        alert("Connection error...")
    });

$.connection.myHhub01.client.announce = function (message) {

    $("#welcome-messages").append(message + "<br />");
  
}