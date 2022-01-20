using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission_2.Models;

namespace Mission_2.Controllers
{
    public class StuffController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]

        public IActionResult GradeCalcView()
        {
            return View();
        }

        [HttpPost]

        public IActionResult GradeCalcView(GradeCalcModel model)
        {
            return View();
        }

    }
}
