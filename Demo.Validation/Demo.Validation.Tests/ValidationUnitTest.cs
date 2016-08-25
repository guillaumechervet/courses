using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Demo.Validation.Tests
{
    [TestClass]
    public class ValidationUnitTest
    {
        private readonly Validation _validation = new Validation();

        // Liste des attributs existant https://msdn.microsoft.com/en-us/library/system.componentmodel.dataannotations.validationattribute(v=vs.110).aspx
        // Créer de nouveaux attribut de validation https://msdn.microsoft.com/en-us/library/cc668224.aspx

        [TestMethod]
        public void Validation_ShouldFail_BecauseEmailNotValid()
        {
            var person = new PersonModel();
            person.Name = "Toto";
            person.Email = "toto@";

            bool isValid = _validation.Validate(person);

            Assert.IsFalse(isValid);
        }
     
        [TestMethod]
        public void Validation_ShouldFail_BecauseChildEmailNotValid()
        {
            var person = new PersonModel();
            person.Name = "Toto";
            person.ChildModel =new ChildModel()
            {
                Name = ""
            };
            

            bool isValid = _validation.Validate(person, true);

            Assert.IsFalse(isValid);
        }

        [TestMethod]
        public void Validation_ShouldFail_BecauseOtherChildsEmailNotValid()
        {
            var person = new PersonModel();
            person.Name = "Toto";
            person.ChildModel = new ChildModel()
            {
                Name = "Charlie"
            };
            person.OtherChilds = new List<ChildModel>() { new ChildModel() { Name = ""} };

            bool isValid = _validation.Validate(person, true);

            Assert.IsFalse(isValid);
        }

        [TestMethod]
        public void Validation_ShouldSuccess_BecauseInputIsValid()
        {
            var person = new PersonModel();
            person.Name = "Toto";
            person.ChildModel = new ChildModel()
            {
                Name = "Charlie"
            };
            person.OtherChilds = new List<ChildModel>() { new ChildModel() { Name = "Bernard" } };

            bool isValid = _validation.Validate(person, true);

            Assert.IsTrue(isValid);
        }
    }
}
