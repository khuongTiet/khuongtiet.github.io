
var nameToId = {
  "Aatrox" : 266, "Ahri" : 103, "Akali" : 84, "Alistar" : 12, "Amumu" : 32, "Anivia" : 34, "Annie" : 1, "Ashe" : 22, "AurelionSol" : 136,
  "Azir" : 268, "Bard" : 432, "Blitzcrank" : 53, "Brand" : 63, "Braum" : 201, "Caitlyn" : 51, "Camille" : 164, "Cassiopeia" : 69,
  "Chogath" : 31, "Corki" : 42, "Darius" : 122, "Diana" : 131, "DrMundo" : 36, "Draven" : 119, "Ekko" : 245, "Elise" : 60, "Evelynn" : 28,
  "Ezreal" : 81, "FiddleSticks" : 9, "Fiora" : 114, "Fizz" : 105, "Galio" : 3, "Gangplank" : 41, "Garen" : 85, "Gnar" : 150, "Gragas" : 79,
  "Graves" : 104, "Hecarim" : 120, "Heimerdinger" : 74, "Illaoi" : 420, "Irelia" : 39, "Ivern" : 427, "Janna" : 40, "JarvanIV" : 59, "Jax" : 24,
  "Jayce" : 126, "Jhin" : 202, "Jinx" : 222, "Kalisa" : 429, "Karma" : 43, "Karthus" : 30, "Kassadin" : 38, "Katarina" : 55, "Kayle" : 10,
  "Kennen" : 85, "Khazix" : 121, "Kindred" : 203, "Kled" : 240, "KogMaw" : 96, "LeBlanc" : 7, "LeeSin" : 64, "Leona" : 89, "Lissandra" : 127,
  "Lucian" : 236, "Lulu" : 117, "Lux" : 99, "Malphite" : 54, "Malzahar" : 90, "Maokai" : 57, "MasterYi" : 11, "MissFortune" : 21, "Mordekaiser" : 82,
  "Morgana" : 25, "Nami" : 267, "Nasus" : 75, "Nautilus" : 111, "Nidalee" : 76, "Nocturne" : 56, "Nunu" : 20, "Olaf" : 2, "Orianna" : 61, "Pantheon" : 80,
  "Poppy" : 78, "Quinn" : 133, "Raummus" : 33, "RekSai" : 421, "Renekton" : 58, "Rengar" : 107, "Riven" : 92, "Rumble" : 68, "Ryze" : 13, "Sejuani" : 113,
  "Shaco" : 35, "Shen" : 98, "Shyvana" : 102, "Singed" : 27, "Sion" : 14, "Sivir" : 15, "Skarner" : 72, "Sona" : 37, "Soraka" : 16, "Swain" : 50,
  "Syndra" : 134, "TahmKench" : 223, "Taliyah" : 163, "Talon" : 91, "Taric" : 44, "Teemo" : 17, "Thresh" : 412, "Tristana" : 18, "Trundle" : 48,
  "Tryndamere" : 23, "TwistedFate" : 4, "Twitch" : 29, "Udyr" : 77, "Urgot" : 6, "Varus" : 110, "Vayne" : 67, "Veigar" : 45, "VelKoz" : 161, "Vi" : 254,
  "Viktor" : 112, "Vladimir" : 8, "Volibear" : 106, "Warwick" : 19, "MonkeyKing" : 62, "Xerath" : 101, "XinZhao" : 5, "Yasuo" : 157, "Yorick" : 83,
  "Zac" : 154, "Zed" : 238, "Ziggs" : 115, "Zilean" : 26, "Zyra" : 143
}

function hideAll(exception) {
  // var iconsToHide = document.getElementsByClassName("champIcon");
  // for (var i = 0; i < iconsToHide.length; i++) {
  //   iconsToHide[i].style.visibility = "hidden";
  // }
  document.getElementById("champions").style.visibility = "hidden";
}

function resetVisibility() {
  // var iconsToShow = document.getElementsByClassName("champIcon");
  // for (var i = 0; i < iconsToShow.length; i++) {
  //   iconsToShow[i].style.visibility = "visible";
  //   iconsToShow[i].style.float = "left";
  // }
  document.getElementById("champions").style.visibility = "visible";
  document.getElementById("hiddenIcon").innerHTML = '';
  writeChampionCode();
}

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

function load(path) {

    loadJSON(path, function(response) {
        var actual_JSON = JSON.parse(response);
        return actual_JSON;
    })
}

function clicked(id) {
  hideAll(id);
  document.getElementById("hiddenIcon").innerHTML =
  '<a href="#mainPage" onclick="resetVisibility()"><img src=./js/data-dragon/7.1.1/img/champion/' + id + '.png></a>'
  ;
  document.getElementById("champions").innerHTML = '<img src=./js/data-dragon/img/champion/splash/' + id + '_0.jpg width = 100%>';
  document.getElementById("champions").style.visibility = "visible";
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
