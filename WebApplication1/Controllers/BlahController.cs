using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index() //loading main page
        {
            return View();
        }

        [HttpGet] //loading page without submission
        public IActionResult GradeCalc ()
        {
            return View();
        }

        [HttpPost] //loading page with submission
        public IActionResult GradeCalc (GradeCalcModel model)
        {
            return View();
        }
    }
}
