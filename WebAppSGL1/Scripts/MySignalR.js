(function () {
    var MyHub = $.connection.hub303;

    $.connection.hub.start()
        .done(function () {
            //console.log("My SignalR Connection was successfull!")
            $.connection.hub.logging = true;
            writeToPage("It worked ! ");
            MyHub.server.announceToAllClients("XXX My SignalR Connection was successfull!");
            
        })
        .fail(function () {
            writeToPage("Connection error...");
        });

    MyHub.client.announceToAllClients = function (message) {

        writeToPage(message); 

    }

    var writeToPage = function(message){
        $("#welcome-messages").append(message + "<br />");
    }


    $("#button01").on("click", function(){
        MyHub.server.getServerDateTime()
            .done(function (data) {
                writeToPage(data);
            })
            .fail(function (e) {
                writeToPage(e);
            });
    })
})()
