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
 
