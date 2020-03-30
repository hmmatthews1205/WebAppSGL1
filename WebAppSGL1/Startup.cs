using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebAppSGL1.Startup))]
namespace WebAppSGL1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
