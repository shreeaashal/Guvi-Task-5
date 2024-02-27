//Iterate json using forin loop

var actor = {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  }

for (var key in actor) {
    if (actor.hasOwnProperty(key)) {
      console.log(key + ': ' + actor[key]);
    }
  }

