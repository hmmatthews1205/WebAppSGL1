(function () {
    var MyHub = $.connection.myHhub01;

    $.connection.hub.start()
        .done(function () {
            //console.log("My SignalR Connection was successfull!")
            writeToPage("It worked ! ");
            MyHub.server.announce("XXX My SignalR Connection was successfull!");
        })
        .fail(function () {
            writeToPage("Connection error...");
        });

    MyHub.client.announce = function (message) {

        writeToPage(message); 

    }

    var writeToPage = function(message){
        $("#welcome-messages").append(message + "<br />");
    }
})()
