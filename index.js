  const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    
    function theBeatlesPlay(musicians, instruments) {
      var allPlayers = [];
      for (var i = 0; i < musicians.length; i++) {
      allPlayers.push(musicians[i] + " plays " + instruments[i]);
    }
    return allPlayers;
    }
   

  
  function johnLennonFacts() {
    var facts = ["foo", "bar"];
     var newFacts = [];
     var i = 0;
      while (i < facts.length) {
      newFacts.push(facts[i] +"!!!"); i++;
      }
      return newFacts;
    }