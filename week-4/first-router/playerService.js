angular.module("myApp").service('playerService', function(){
var players = [
    {
      id: 1,
      name: 'Rudy Gobert',
      image: 'http://cdn.fansided.com/wp-content/uploads/usat-images/2017/03/9830254-nba-utah-jazz-at-minnesota-timberwolves-850x560.jpeg'
    },
    {
      id: 2,
      name: 'Gordon Heyward',
      image: 'https://pbs.twimg.com/profile_images/546764391375704064/N3x1qAXV_400x400.jpeg'
    },
    {
      id: 3,
      name: 'Joe Ingles',
      image: 'http://www.sbs.com.au/news/sites/sbs.com.au.news/files/styles/full/public/images/2/9/291014m_JoeIngles_800x600.jpg?itok=Egc-gScF&mtime=1414551745'
    }
  ]
  this.getPlayers = function(){
    return players;
  }
  this.findPlayerId = function(id){
    for(var i = 0; i < players.length; i++){
      if(players[i].id == id){
        return players[i]
      }
    }
    return null;
  }
})
