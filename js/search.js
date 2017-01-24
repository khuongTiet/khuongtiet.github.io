const ggKey = '13a49d2950a0a74457b1d3379c490850';
const hostname = 'api.champion.gg';
const port = 80;

function loadJSON(file, callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }


function load() {

    loadJSON("./js/data-dragon/7.1.1/data/en_US/item.json", function(response) {

        var actual_JSON = JSON.parse(response);
        console.log(actual_JSON);
    });


}

function skillOrder(response, json) {
  var skill = "";
  json[0].order.forEach(function(value) {
    skill += value;
  })
  return skill;
}

//gg.champions.items.finished.popular("Nunu", itemBuild);//
function itemBuild(json) {
  var build = "";
  json[0].items.forEach(function(value) {
    build += itemData[value].name + "\n";
  });
  return build;
}

function clicked() {
  load();

}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
