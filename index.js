var recipes = {
  "prop" : "1"
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2) {
  return recipes["prop2"] = "2"
}
