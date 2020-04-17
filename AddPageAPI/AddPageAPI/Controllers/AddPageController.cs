
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using AddPageAPI.Models;
using System.IO;
using Serilog;


namespace AddPageAPI.Controllers
{
    [Route("api/[controller]")]
    public class AddPageController : Controller
    {
        [Route("[action]")]
        [HttpPost("api/AddPage/AddPageFunc")]
        public void AddPageFunc([FromBody] AddPage Page)
        {
             Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .WriteTo.File("Logs\\myapp.txt", rollingInterval: RollingInterval.Day)
                .CreateLogger();
            
            var title=Page.title;
            var tags=Page.tags;
            var description=Page.description;
            
           Log.Information("Title:"+title+"Tags:"+tags+"Description:"+description);
         
        }
    }
        

    
}
