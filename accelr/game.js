
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
  
    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', 'assets', true, true);
Module['FS_createPath']('/', 'lib', true, true);
Module['FS_createPath']('/', 'src', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      },
    };

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
        }

  
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
  
          var files = metadata.files;
          for (i = 0; i < files.length; ++i) {
            DataRequest.prototype.requests[files[i].filename].onload();
          }
              Module['removeRunDependency']('datafile_game.data');

    };
    Module['addRunDependency']('datafile_game.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage({"files": [{"audio": 0, "start": 0, "crunched": 0, "end": 4259179, "filename": "/accelr.love"}, {"audio": 0, "start": 4259179, "crunched": 0, "end": 4259318, "filename": "/conf.lua"}, {"audio": 0, "start": 4259318, "crunched": 0, "end": 4260496, "filename": "/main.lua"}, {"audio": 0, "start": 4260496, "crunched": 0, "end": 4260542, "filename": "/README.md"}, {"audio": 1, "start": 4260542, "crunched": 0, "end": 8170662, "filename": "/assets/BackGround.wav"}, {"audio": 0, "start": 8170662, "crunched": 0, "end": 8367465, "filename": "/assets/bg.png"}, {"audio": 0, "start": 8367465, "crunched": 0, "end": 8527865, "filename": "/assets/bg1.png"}, {"audio": 1, "start": 8527865, "crunched": 0, "end": 8620355, "filename": "/assets/gameOver.wav"}, {"audio": 1, "start": 8620355, "crunched": 0, "end": 8725305, "filename": "/assets/gameStart.wav"}, {"audio": 0, "start": 8725305, "crunched": 0, "end": 8726384, "filename": "/assets/meteor.png"}, {"audio": 0, "start": 8726384, "crunched": 0, "end": 8726592, "filename": "/assets/paddle1.png"}, {"audio": 1, "start": 8726592, "crunched": 0, "end": 8742460, "filename": "/assets/paddleHit.wav"}, {"audio": 0, "start": 8742460, "crunched": 0, "end": 8742734, "filename": "/assets/sunny.png"}, {"audio": 0, "start": 8742734, "crunched": 0, "end": 8743030, "filename": "/assets/tile2.png"}, {"audio": 1, "start": 8743030, "crunched": 0, "end": 8760854, "filename": "/assets/tilehit.wav"}, {"audio": 1, "start": 8760854, "crunched": 0, "end": 8773996, "filename": "/assets/wallHit.wav"}, {"audio": 0, "start": 8773996, "crunched": 0, "end": 8775005, "filename": "/lib/classic.lua"}, {"audio": 0, "start": 8775005, "crunched": 0, "end": 8776351, "filename": "/src/ball.lua"}, {"audio": 0, "start": 8776351, "crunched": 0, "end": 8776977, "filename": "/src/collision.lua"}, {"audio": 0, "start": 8776977, "crunched": 0, "end": 8778253, "filename": "/src/game.lua"}, {"audio": 0, "start": 8778253, "crunched": 0, "end": 8779010, "filename": "/src/grid.lua"}, {"audio": 0, "start": 8779010, "crunched": 0, "end": 8780160, "filename": "/src/paddle.lua"}, {"audio": 0, "start": 8780160, "crunched": 0, "end": 8780658, "filename": "/src/powerup.lua"}, {"audio": 0, "start": 8780658, "crunched": 0, "end": 8781180, "filename": "/src/tile.lua"}, {"audio": 0, "start": 8781180, "crunched": 0, "end": 8781266, "filename": "/src/UI.lua"}, {"audio": 0, "start": 8781266, "crunched": 0, "end": 8782240, "filename": "/src/walls.lua"}], "remote_package_size": 8782240, "package_uuid": "f5e73f7c-90a1-43de-9ea1-691f730f6512"});

})();
