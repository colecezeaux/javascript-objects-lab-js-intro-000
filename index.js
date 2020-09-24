var recipes = {
  "prop" : "1"
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, recipes, {["prop2"] : 2})
}
