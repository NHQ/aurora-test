(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/johnny/development/barn/aurora/entry.js":[function(require,module,exports){
console.log(AV)

var av = AV
//require('./node_modules/av/build/aurora.js')//av')
//require('./node_modules/aac/build/aac.js')//av')

var self = this;
var sampleRate = 44100//evt.data.sampleRate;
var resamplers = [];
var chans = 1;
var player = av.Asset.fromURL('http://localhost:11004/audio.mp3')
//var player = av.Asset.fromURL('http://localhost:11002/youtube.mp3?https://www.youtube.com/watch?v=GUcXI2BIUOQ&list=RDGUcXI2BIUOQ&index=1')

player.on('format', function(d){

    d.sourceLength = player.source.length;
    chans = d.channelsPerFrame;

    var bufferSize = Math.ceil(4096 / (sampleRate / d.sampleRate));

//    for(var x = 0; x < chans; x++){
//      resamplers[x] = new Resampler(d.sampleRate, sampleRate, 1, bufferSize);
//    }

  });

  player.on('meta', function(d){
    console.log(d)
  });

  player.on('progress', function(evt){
    console.log(evt)
  });

  player.on('data', function(bufArray){
    for(x in resamplers){
  //    bufArray[x] = resamplers[x].resampler(bufArray[x])
    }
    console.log(bufArray)
  });

  player.on('end', function(){
  });
  player.on('error', function(err){
    console.log(err)
  });
  player.start();
 

},{}]},{},["/home/johnny/development/barn/aurora/entry.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qb2hubnkvZGV2ZWxvcG1lbnQvYmFybi9hdXJvcmEvZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zb2xlLmxvZyhBVilcblxudmFyIGF2ID0gQVZcbi8vcmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvYXYvYnVpbGQvYXVyb3JhLmpzJykvL2F2Jylcbi8vcmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvYWFjL2J1aWxkL2FhYy5qcycpLy9hdicpXG5cbnZhciBzZWxmID0gdGhpcztcbnZhciBzYW1wbGVSYXRlID0gNDQxMDAvL2V2dC5kYXRhLnNhbXBsZVJhdGU7XG52YXIgcmVzYW1wbGVycyA9IFtdO1xudmFyIGNoYW5zID0gMTtcbnZhciBwbGF5ZXIgPSBhdi5Bc3NldC5mcm9tVVJMKCdodHRwOi8vbG9jYWxob3N0OjExMDA0L2F1ZGlvLm1wMycpXG4vL3ZhciBwbGF5ZXIgPSBhdi5Bc3NldC5mcm9tVVJMKCdodHRwOi8vbG9jYWxob3N0OjExMDAyL3lvdXR1YmUubXAzP2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9R1VjWEkyQklVT1EmbGlzdD1SREdVY1hJMkJJVU9RJmluZGV4PTEnKVxuXG5wbGF5ZXIub24oJ2Zvcm1hdCcsIGZ1bmN0aW9uKGQpe1xuXG4gICAgZC5zb3VyY2VMZW5ndGggPSBwbGF5ZXIuc291cmNlLmxlbmd0aDtcbiAgICBjaGFucyA9IGQuY2hhbm5lbHNQZXJGcmFtZTtcblxuICAgIHZhciBidWZmZXJTaXplID0gTWF0aC5jZWlsKDQwOTYgLyAoc2FtcGxlUmF0ZSAvIGQuc2FtcGxlUmF0ZSkpO1xuXG4vLyAgICBmb3IodmFyIHggPSAwOyB4IDwgY2hhbnM7IHgrKyl7XG4vLyAgICAgIHJlc2FtcGxlcnNbeF0gPSBuZXcgUmVzYW1wbGVyKGQuc2FtcGxlUmF0ZSwgc2FtcGxlUmF0ZSwgMSwgYnVmZmVyU2l6ZSk7XG4vLyAgICB9XG5cbiAgfSk7XG5cbiAgcGxheWVyLm9uKCdtZXRhJywgZnVuY3Rpb24oZCl7XG4gICAgY29uc29sZS5sb2coZClcbiAgfSk7XG5cbiAgcGxheWVyLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uKGV2dCl7XG4gICAgY29uc29sZS5sb2coZXZ0KVxuICB9KTtcblxuICBwbGF5ZXIub24oJ2RhdGEnLCBmdW5jdGlvbihidWZBcnJheSl7XG4gICAgZm9yKHggaW4gcmVzYW1wbGVycyl7XG4gIC8vICAgIGJ1ZkFycmF5W3hdID0gcmVzYW1wbGVyc1t4XS5yZXNhbXBsZXIoYnVmQXJyYXlbeF0pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGJ1ZkFycmF5KVxuICB9KTtcblxuICBwbGF5ZXIub24oJ2VuZCcsIGZ1bmN0aW9uKCl7XG4gIH0pO1xuICBwbGF5ZXIub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKXtcbiAgICBjb25zb2xlLmxvZyhlcnIpXG4gIH0pO1xuICBwbGF5ZXIuc3RhcnQoKTtcbiBcbiJdfQ==
