using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Validation.Tests
{
    public class PersonModel
    {
        [Required]
        public string Name { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        public ChildModel ChildModel { get; set; }

        public IList<ChildModel> OtherChilds { get; set; }
    }
}
