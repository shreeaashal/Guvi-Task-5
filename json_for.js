//Iterate json using for loop
var actor = {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
  var keys = Object.keys(actor);
  console.log(keys)
  for (var i=0; i < keys.length; i++){
  var key = keys[i]
  console.log(keys[i])
  console.log(key + ":" + actor[key]);
  }