var express = require('express');
var router = express.Router();
var model = require('../models/record');


/* GET home page. */
router.get('/', function(req, res, next) {
  model.find(function(error, decks){
      res.render('pages/welcome');
    })
});

router.get('/mycollection', function(req, res, next) {
if (req.user) {
  model.find(function(error, decks){
      if (error) {
        console.log(error);
      } else {
        res.render('pages/mycollection', {currentUser: req.user.username});
      };
  })
}});

router.post('/editdeck', function(req, res, next) {
  console.log(req.body);
  var currentDeck = req.body.name;
  modelCards.find(function(error, cards){
    if (error) console.log(error);
    var currentCards = [];
    for (var card in cards) {
      if (cards[card].DeckName == req.body.name) {
        currentCards.push(cards[card]);
      }
    }
    res.render('pages/editdeckview', {
      cards: currentCards,
      currentDeck: currentDeck,
      currentUser: req.user.username
    });
  });
});

// router.get('/editdeck', function(req, res, next) {
//   console.log(req.params);
//   modelCards.find(function(error, cards){
//     if (error) console.log(error);
//     res.render('pages/editdeckview', {
//     cards: cards,
//     });
//   });
// });

// router.get('/publicdecks', function(req, res, next) {
//   model.find(function(error, decks){
//       if (error) {
//         console.log(error);
//       } else {
//         var currentDecks = [];
//         for (var deck in decks) {
//           if (decks[deck].Public == true) {
//             currentDecks.push(decks[deck]);
//           }
//         };
//         if (req.user) {
//           res.render('pages/publicdecks',
//           {
//             decks: currentDecks,
//             message: "Welcome to public decks.",
//             currentUser: req.user.username
//           });
//         } else {
//           res.render('pages/publicdecks',
//           {
//             decks: currentDecks,
//             message: "Welcome to public decks."
//           });
//         }
//       };
//     });
//   });

//study mode code
// router.post('/studydeck', function(req, res, next) {
//     console.log(req.body);
//   var currentDeck = req.body.name;
//   modelCards.find(function(error, cards){
//     if (error) console.log(error);
//     var currentCards = [];
//     for (var card in cards) {
//       if (cards[card].DeckName == req.body.name) {
//         currentCards.push(cards[card]);
//       }
//     }
//       if (req.user) {
//           res.render('pages/studymode',
//           {
//             cards: currentCards,
//             currentUser: req.user.username,
//             currentDeck : currentDeck
//           });
//         } else {
//           res.render('pages/studymode',
//           {
//             cards: currentCards,
//             currentDeck : currentDeck
//           });
//         }
//   });
// });




module.exports = router;
