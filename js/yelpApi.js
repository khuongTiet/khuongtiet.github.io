const host = "https://api.yelp.com";
const consumerKey = "HfZYioGspKJEVBUusVs8xw";
const consumerSecret = "KIA1ZAoMXtxh5L-UhQwa5nBypZc";
const token = "2DhReZDvFxZ1ejIp59Gj2htKEncyaTwM";
const tokenSecret = "syU_nbdxGR0tBI2ZPnZWDPQiV0U";

function formatcb(


function clicked()
{
  var url = host + "/v2/search?term=food&location=San+Francisco";
  var result = httpGetAsync(url, formatcb);
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
