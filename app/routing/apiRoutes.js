var friends = require("../data/friends.js")

// Routing

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);


    });
    app.post("/api/friends", function (req, res) {

      
        var userCurrentdata = 
        {
            friendName: req.body.name,
            friendPhoto: req.body.photo,
            friendScores: req.body.scores
        }
         

         var tableData = friends;
        // // tableData for all people
        var storeTotaldifference = [];
          var results =0;
console.log(tableData.length)
        for (var i=0; i < tableData.length; i++) {
               //console.log(tableData[i].friendName)
               results=0;
            for (var j = 0; j < tableData[i].friendScores.length; j++) {
                results += Math.abs( parseInt(userCurrentdata.friendScores[j]) - parseInt( tableData[i].friendScores[j]));

               // console.log(results)
            }
             
            storeTotaldifference.push({
                name: tableData[i].friendName,
                urlImage: tableData[i].friendPhoto,
                totalDifference: results
            });
        } //end forloop
         
      //  friends.push(userCurrentdata)​
        // console.log( userCurrentdata)
        // console.log( friends) 

        friends.push(userCurrentdata)

        storeTotaldifference.sort(function(a, b){return a.totalDifference - b.totalDifference})


        


       console.log(storeTotaldifference)
       res.json(storeTotaldifference[0])
  
 
        //  res.json(storeTotaldifference[0]);​
    });
  
}