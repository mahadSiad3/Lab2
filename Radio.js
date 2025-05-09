// let radio = {
//     random: function (){
//       let randomSelection=  Math.floor(Math.random() * radio.station.length)      
//       //console.log(radio.station.length)
//       //console.log(radio.station[randomStation])
//      let randomStation = radio.station[randomSelection]
//      //console.log(randomStation.name)
//     let randomSongSelection = Math.floor(Math.random() * randomStation.songs.length) 
//     //console.log(randomSongSelection)
//     //console.log(randomStation.songs[randomSongSelection])
//    let randomSong = randomStation.songs[randomSongSelection]
//   // console.log(randomSong)
//    console.log("From Station: "+randomStation.name+ ", Now playing: "+randomSong.titile+", By: "+randomSong.artist)
// },
//     station :[{
    
//         name:"98.7",
//         songs:[{
            
//                 titile:"Ow my tooth hurts",
//                 artist:"George Washington"
//             },
//              {
//                 titile:"It would be nice to see the play",
//                 artist:"Abraham Lincoln"
//             },
//              {
//                 titile:"idk something sciency",
//                 artist:"Einstein last-name"
//             }]
//     }
//     ,
//     {
//         name:"99.2",
//         songs:[{
             
//                 titile:"Man i can't see anything over this hat",
//                 artist:"John wilks booth"
//             },
//              {
//                 titile:"Probably should've brought some asprin",
//                 artist:"Abraham Lincoln"
//             },
//              {
//                 titile:"The Bus of america",
//                 artist:"Rosa parks"
//             }]
        
//     }]
// }

// radio.random();

let secondRadio = {
    stations:[
        {
            name:"station1",
            songs: [
                {
                    title:"title1",
                    artist:"artist1",
                },
                {
                   title:"title2",
                    artist:"artist2",
                },
                {
                   title:"title3",
                    artist:"artist3",
                }
            ]
        },
        {
            name:"station2",
            songs:[
                {
                    title:"title4",
                    artist:"artist4",
                },
                {
                    title:"title5",
                    artist:"artist5",
                },
                {
                   title:"title6",
                    artist:"artist6",
                }
            ]
        }
    ],
    findingRandom: function(){
        let randomization = Math.floor(Math.random()*secondRadio.stations.length)
        let stationSelection = secondRadio.stations[randomization]
        let songRandomiztion = Math.floor(Math.random()*stationSelection.songs.length)  
        console.log(stationSelection.songs[songRandomiztion])
    }
}
 secondRadio.findingRandom();