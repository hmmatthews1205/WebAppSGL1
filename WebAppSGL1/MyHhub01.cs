using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAppSGL1
{
    public class MyHhub01 : Hub
    {
        public void Announce(string message) 
        {
            Clients.All.Announce(message);
        }
        
    }
}