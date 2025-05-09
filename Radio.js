let radio = {
    random: function (){
      let randomSelection=  Math.floor(Math.random() * radio.station.length)      
      //console.log(radio.station.length)
      //console.log(radio.station[randomStation])
     let randomStation = radio.station[randomSelection]
     //console.log(randomStation.name)
    let randomSongSelection = Math.floor(Math.random() * randomStation.songs.length) 
    //console.log(randomSongSelection)
    //console.log(randomStation.songs[randomSongSelection])
   let randomSong = randomStation.songs[randomSongSelection]
  // console.log(randomSong)
   console.log("From Station: "+randomStation.name+ ", Now playing: "+randomSong.titile+", By: "+randomSong.artist)
},
    station :[{
    
        name:"98.7",
        songs:[{
            
                titile:"Ow my tooth hurts",
                artist:"George Washington"
            },
             {
                titile:"It would be nice to see the play",
                artist:"Abraham Lincoln"
            },
             {
                titile:"idk something sciency",
                artist:"Einstein last-name"
            }]
    }
    ,
    {
        name:"99.2",
        songs:[{
             
                titile:"Man i can't see anything over this hat",
                artist:"John wilks booth"
            },
             {
                titile:"Probably should've brought some asprin",
                artist:"Abraham Lincoln"
            },
             {
                titile:"The Bus of america",
                artist:"Rosa parks"
            }]
        
    }]
}

radio.random();
