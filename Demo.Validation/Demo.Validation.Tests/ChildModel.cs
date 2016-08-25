using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Validation.Tests
{
    public class ChildModel
    {
        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

    }
}
