const championgg_token = "13a49d2950a0a74457b1d3379c490850";
const GG = require('./node-gg');
const gg = GG.init('13a49d2950a0a74457b1d3379c490850');
const ddItems = require('./data-dragon/7.1.1/data/en_US/item.json');
const ddChampions = require('./data-dragon/7.1.1/data/en_US/champion.json');

var returnSkills = "";
var returnBuild = "";

skillOrder = function(response, json) {
  var skills = "";
  json[0].order.forEach(function(value) {
    skill += value;
  })
  returnSkills = skills;
}

//gg.champions.items.finished.popular("Nunu", itemBuild);//
itemBuild = function(response, json) {
  var build = "";
  json[0].items.forEach(function(value) {
    build += ddItems.data[value].name + "\n";
  });
  returnBuild = build;
}

champSearch = function() {
  //return document.getElementById("demo").innerHTML = gg.champions.items.finished.popular(name, itemBuild);
  document.getElementById("demo").innerHTML = <p> + "Hello" + </p>;
}
