//Iterate json using foreach loop

var actor = {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }
  Object.entries(actor).forEach(function([key, value]) {
    console.log(key + ': ' + value);
  });