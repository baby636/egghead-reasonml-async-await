// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Swapi$AsyncAwait = require("./Swapi.bs.js");

function let_(prom, cb) {
  return prom.then(Curry.__1(cb));
}

var Async = {
  let_: let_
};

function go(param) {
  console.log("Let's look at some Star Wars Stuff");
  var prom = Swapi$AsyncAwait.getPerson(/* () */0);
  return prom.then((function (person) {
                console.log("Look at this person:", person);
                console.log("Let's get their planet using this URL:", person.homeworld);
                var prom = Swapi$AsyncAwait.getPlanetFromUrl(person.homeworld);
                return prom.then((function (homeworld) {
                              console.log("And here is their homeworld:", homeworld.name);
                              return Promise.resolve(/* () */0);
                            }));
              }));
}

go(/* () */0);

exports.Async = Async;
exports.go = go;
/*  Not a pure module */
