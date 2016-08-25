using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace Demo.Validation.Tests
{
    public class Validation
    {
        public bool Validate(object model, bool isRecurssive = false)
        {
            if (model == null)
            {
                return false;
            }
            var context = new ValidationContext(model, null, null);
            var list = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(model, context, list, true);
            if (!isValid)
            {
                return false;
            }

            if (isRecurssive)
            {
                return ValidateRecurssive(model);
            }
            return true;
        }

        private bool ValidateRecurssive(object model)
        {
            if (model == null)
            {
                return false;
            }

            var propertyInfos =
                model.GetType()
                    .GetProperties(BindingFlags.SetField | BindingFlags.Instance | BindingFlags.GetField |
                                   BindingFlags.CreateInstance | BindingFlags.Public);

            foreach (var propertyInfo in propertyInfos)
            {
                // Si one to one
                var value = propertyInfo.GetValue(model);

                if (value != null && !value.GetType().IsValueType && !(value is string))
                {
                    var list = value as IEnumerable;
                    if (list != null)
                    {
                        foreach (var item in list)
                        {
                            var isValid = Validate(item, true);
                            if (!isValid)
                            {
                                return false;
                            }
                        }
                    }
                    else
                    {
                        var isValid = Validate(value, true);
                        if (!isValid)
                        {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
    }
}