using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0.00, 100.00)] //each of these set the boundaries of each of the grades.  It also makes them required
        public int Assignments { get; set; }
        [Required]
        [Range(0.00, 100.00)]
        public int Group_Projects { get; set; }
        [Required]
        [Range(0.00, 100.00)]
        public int Quizzes { get; set; }
        [Required]
        [Range(0.00, 100.00)]
        public int Midterm { get; set; }
        [Required]
        [Range(0.00, 100.00)]
        public int Final { get; set; }
        [Required]
        [Range(0.00, 100.00)]
        public int Intex { get; set; }
    }
}
