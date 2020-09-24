var recipes = {
  "prop" : "1"
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {["prop2"] : 2})
}
