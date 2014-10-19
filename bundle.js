(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log(AV)

var av = AV
//require('./node_modules/av/build/aurora.js')//av')
//require('./node_modules/aac/build/aac.js')//av')

var self = this;
var sampleRate = 44100//evt.data.sampleRate;
var resamplers = [];
var chans = 1;
var player = av.Asset.fromURL('aurora-test/audio.mp3')
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
 

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qb2hubnkvZGV2ZWxvcG1lbnQvYmFybi9hdXJvcmEvZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zb2xlLmxvZyhBVilcblxudmFyIGF2ID0gQVZcbi8vcmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvYXYvYnVpbGQvYXVyb3JhLmpzJykvL2F2Jylcbi8vcmVxdWlyZSgnLi9ub2RlX21vZHVsZXMvYWFjL2J1aWxkL2FhYy5qcycpLy9hdicpXG5cbnZhciBzZWxmID0gdGhpcztcbnZhciBzYW1wbGVSYXRlID0gNDQxMDAvL2V2dC5kYXRhLnNhbXBsZVJhdGU7XG52YXIgcmVzYW1wbGVycyA9IFtdO1xudmFyIGNoYW5zID0gMTtcbnZhciBwbGF5ZXIgPSBhdi5Bc3NldC5mcm9tVVJMKCdhdXJvcmEtdGVzdC9hdWRpby5tcDMnKVxuLy92YXIgcGxheWVyID0gYXYuQXNzZXQuZnJvbVVSTCgnaHR0cDovL2xvY2FsaG9zdDoxMTAwMi95b3V0dWJlLm1wMz9odHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUdVY1hJMkJJVU9RJmxpc3Q9UkRHVWNYSTJCSVVPUSZpbmRleD0xJylcblxucGxheWVyLm9uKCdmb3JtYXQnLCBmdW5jdGlvbihkKXtcblxuICAgIGQuc291cmNlTGVuZ3RoID0gcGxheWVyLnNvdXJjZS5sZW5ndGg7XG4gICAgY2hhbnMgPSBkLmNoYW5uZWxzUGVyRnJhbWU7XG5cbiAgICB2YXIgYnVmZmVyU2l6ZSA9IE1hdGguY2VpbCg0MDk2IC8gKHNhbXBsZVJhdGUgLyBkLnNhbXBsZVJhdGUpKTtcblxuLy8gICAgZm9yKHZhciB4ID0gMDsgeCA8IGNoYW5zOyB4Kyspe1xuLy8gICAgICByZXNhbXBsZXJzW3hdID0gbmV3IFJlc2FtcGxlcihkLnNhbXBsZVJhdGUsIHNhbXBsZVJhdGUsIDEsIGJ1ZmZlclNpemUpO1xuLy8gICAgfVxuXG4gIH0pO1xuXG4gIHBsYXllci5vbignbWV0YScsIGZ1bmN0aW9uKGQpe1xuICAgIGNvbnNvbGUubG9nKGQpXG4gIH0pO1xuXG4gIHBsYXllci5vbigncHJvZ3Jlc3MnLCBmdW5jdGlvbihldnQpe1xuICAgIGNvbnNvbGUubG9nKGV2dClcbiAgfSk7XG5cbiAgcGxheWVyLm9uKCdkYXRhJywgZnVuY3Rpb24oYnVmQXJyYXkpe1xuICAgIGZvcih4IGluIHJlc2FtcGxlcnMpe1xuICAvLyAgICBidWZBcnJheVt4XSA9IHJlc2FtcGxlcnNbeF0ucmVzYW1wbGVyKGJ1ZkFycmF5W3hdKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhidWZBcnJheSlcbiAgfSk7XG5cbiAgcGxheWVyLm9uKCdlbmQnLCBmdW5jdGlvbigpe1xuICB9KTtcbiAgcGxheWVyLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycil7XG4gICAgY29uc29sZS5sb2coZXJyKVxuICB9KTtcbiAgcGxheWVyLnN0YXJ0KCk7XG4gXG4iXX0=
