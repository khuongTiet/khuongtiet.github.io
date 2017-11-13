const ddbase = 'http://ddragon.leagueoflegends.com/cdn/';
const ddversion = '6.24.1';

$(function() {
  var champions = [];
  $.ajax({
    url: `${ddbase}/${ddversion}/data/en_US/champion.json`,
    type: 'GET',
    dataType: 'json',
    headers: {"Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "DELETE, GET, POST, PATCH, OPTIONS TRACE",
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}
  }).done(function(data) {
    champions = data;
  });
  console.log(champions);
});
function writeChampionCode() {
document.getElementById("champions").innerHTML =
'<ul>' +
  '<li><a class="champIcon" href="#champions" id="Aatrox" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Aatrox.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Ahri" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Ahri.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Akali" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Akali.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Alistar" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Alistar.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Amumu" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Amumu.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Anivia" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Anivia.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Annie" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Annie.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Ashe" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Ashe.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="AurelionSol" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/AurelionSol.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Azir" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Azir.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Bard" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Bard.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Blitzcrank" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Blitzcrank.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Brand" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Brand.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Braum" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Braum.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Caitlyn" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Caitlyn.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Camille" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Camille.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Cassiopeia" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Cassiopeia.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Chogath" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Chogath.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Corki" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Corki.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Darius" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Darius.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Diana" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Diana.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Draven" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Draven.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="DrMundo" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/DrMundo.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Ekko" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Ekko.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Elise" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Elise.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Evelynn" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Evelynn.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Ezreal" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Ezreal.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="FiddleSticks" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/FiddleSticks.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Fiora" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Fiora.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Fizz" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Fizz.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Galio" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Galio.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Gangplank" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Gangplank.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Garen" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Garen.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Gnar" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Gnar.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Gragas" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Gragas.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Graves" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Graves.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Hecarim" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Hecarim.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Heimerdinger" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Heimerdinger.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Illaoi" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Illaoi.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Irelia" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Irelia.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Ivern" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Ivern.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Janna" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Janna.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="JarvanIV" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/JarvanIV.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Jax" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Jax.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Jayce" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Jayce.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Jhin" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Jhin.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Jinx" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Jinx.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Kalista" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Kalista.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Karma" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Karma.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Karthus" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Karthus.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Kassadin" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Kassadin.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Katarina" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Katarina.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Kayle" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Kayle.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Kennen" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Kennen.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Khazix" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Khazix.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Kindred" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Kindred.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Kled" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Kled.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="KogMaw" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/KogMaw.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Leblanc" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Leblanc.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="LeeSin" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/LeeSin.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Leona" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Leona.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Lissandra" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Lissandra.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Lucian" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Lucian.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Lulu" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Lulu.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Lux" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Lux.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Malphite" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Malphite.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Malzahar" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Malzahar.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Maokai" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Maokai.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="MasterYi" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/MasterYi.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="MissFortune" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/MissFortune.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Mordekaiser" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Mordekaiser.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Morgana" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Morgana.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Nami" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Nami.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Nasus" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Nasus.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Nautilus" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Nautilus.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Nidalee" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Nidalee.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Nocturne" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Nocturne.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Nunu" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Nunu.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Olaf" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Olaf.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Orianna" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Orianna.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Pantheon" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Pantheon.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Poppy" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Poppy.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Quinn" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Quinn.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Rammus" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Rammus.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="RekSai" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/RekSai.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Renekton" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Renekton.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Rengar" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Rengar.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Riven" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Riven.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Rumble" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Rumble.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Ryze" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Ryze.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Sejuani" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Sejuani.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Shaco" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Shaco.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Shen" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Shen.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Shyvana" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Shyvana.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Singed" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Singed.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Sion" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Sion.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Sivir" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Sivir.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Skarner" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Skarner.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Sona" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Sona.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Swain" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Swain.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Syndra" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Syndra.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="TahmKench" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/TahmKench.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Taliyah" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Taliyah.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Talon" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Talon.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Taric" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Taric.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Teemo" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Teemo.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Thresh" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Thresh.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Tristana" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Tristana.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Trundle" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Trundle.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Tryndamere" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Tryndamere.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="TwistedFate" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/TwistedFate.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Twitch" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Twitch.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Udyr" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Udyr.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Urgot" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Urgot.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Varus" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Varus.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Vayne" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Vayne.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Veigar" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Veigar.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Velkoz" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Velkoz.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Vi" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Vi.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Viktor" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Viktor.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Vladimir" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Vladimir.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Volibear" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Volibear.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Warwick" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Warwick.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="MonkeyKing" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/MonkeyKing.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Xerath" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Xerath.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="XinZhao" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/XinZhao.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Yasuo" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Yasuo.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Yorick" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Yorick.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Zac" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Zac.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Zed" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Zed.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Ziggs" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Ziggs.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Zilean" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Zilean.png></a></li>' +
  '<li><a class="champIcon" href="#champions" id="Zyra" onclick="clicked(this.id);"><img src=./js/data-dragon/7.1.1/img/champion/Zyra.png></a></li>' +
'</ul>';
}

writeChampionCode();
