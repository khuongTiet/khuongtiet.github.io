require.config({
  baseUrl: './',
  paths: {
    json: 'lib/require/json',
    GG : 'node-gg/index',
    http: 'http'
  }
})

define([
  'json!data-dragon/7.1.1/data/en_US/item.json',
  'json!data-dragon/7.1.1/data/en_US/champion.json',
  "GG.init('13a49d2950a0a74457b1d3379c490850')"
], function(ddItems, ddChampions, gg){}
);

skillOrder = function(response, json) {
  var skill = "";
  json[0].order.forEach(function(value) {
    skill += value;
  })
  return skill;
}

  //gg.champions.items.finished.popular("Nunu", itemBuild);//
function itemBuild(response, json) {
  alert("itemBuild");
  var build = "";
  json[0].items.forEach(function(value) {
    build += ddItems.data[value].name + "\n";
  });
  return build;
}

function testStringReturn(){
  var testing = "Hello World";
  return testing;
}

function clicked() {
  alert(testStringReturn());
  var build = gg.champions.items.finished.popular("Aatrox", itemBuild);
  alert(build);
  document.getElementById("demo").innerHTML = testStringReturn();
}
