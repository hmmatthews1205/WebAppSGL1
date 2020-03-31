using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppSGL1
{
    [HubName("hub303")]
    public class MyHub303 : Hub
    {
        [HubMethodName("announceToAllClients")]
        public void Announce(string message) 
        {
            Clients.All.Announce(message);
        }
        public DateTime GetServerDateTime()
        {
            return DateTime.Now;
        }
    }
}