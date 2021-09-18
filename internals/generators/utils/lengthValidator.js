/**
 * lengthValidator
 *
 * Check whether the given component length is inside max length limit
 */

function lengthValidator(componentName, maxLength) {
  return componentName.length >= (maxLength | 15);
}

module.exports = lengthValidator;
