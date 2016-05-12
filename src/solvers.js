/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n}); //fixme
  var solutionRows = solution.rows();

  var rowCombos = [];
  var row = [];

  for (var x = 0; x < n; x++) {
    for (var i = 0; i < n; i++) {
      if (i === x) {
        row.push(1);
      } else {
        row.push(0);
      }
      // row.push(0);
    }
    rowCombos.push(row);
    row = [];
  }

  // console.log('rowsCombos:', rowCombos);

  var myBoard = [];
  for (var a = 0; a < rowCombos.length; a++) {
    var temp = [];
    for (var b = 0; b < rowCombos[a].length; b++) {
      var popped = rowCombos[a].pop();
      temp.push(rowCombos[a]);
    }
    myBoard.push(temp);
  }

  console.log(myBoard);

  function checkConflicts(board) {
    for (var x = 0; x < n; x++) {
      //iterate through y of board
      for (var y = 0; y < n; y++) {
        //check if square is empty
        if (tempBoard.rows()[x][y] === 0) {
          //add piece
          tempBoard.togglePiece(x, y);
          //check if piece has confict at row or collumn
          if (tempBoard.hasRowConflictAt(x) || tempBoard.hasColConflictAt(y)) {
              //change square to empty if conflict exists
              tempBoard.togglePiece(x, y);
          }
        }
        // console.log(tempBoard.attributes, 'tempBoard');
      }
    }
  }

  
  // Ensure new solution gets created
  // if (arguments[1] !== undefined) {
  //   solution = arguments[1];
  // }
  //storing solution boards
//   var solns = [];
//   function subroutine (changeX, changeY, nTimes) {
//     //store row that is changing
//     //var row = board.rows()[0];
//     var tempBoard = new Board({'n': n});
//     //initial toggle
//     tempBoard.togglePiece(changeX, changeY);
//     //iterate through x of board
//     for (var x = 0; x < n; x++) {
//       //iterate through y of board
//       for (var y = 0; y < n; y++) {
//         //check if square is empty
//         if (tempBoard.rows()[x][y] === 0) {
//           //add piece
//           tempBoard.togglePiece(x, y);
//           //check if piece has confict at row or collumn
//           if (tempBoard.hasRowConflictAt(x) || tempBoard.hasColConflictAt(y)) {
//               //change square to empty if conflict exists
//               tempBoard.togglePiece(x, y);
//           }
//         }
//         // console.log(tempBoard.attributes, 'tempBoard');
//       }
//     }
//     solns.push(tempBoard);
//     // nTimes -= 1;
//     // if (nTimes > 0) {
//     //   subroutine(nTimes,nTimes,nTimes);
//     // }
//   }
//   // for (x = 0; x < n; x++){
//   //   for (y = 0; y < n; y++) {
//   //     subroutine(x,y);
//   //   }
//   // }

// console.log(solns);

  // subroutine(0, 0, n);

  //console.log('solution before:', solution);

  if (n === 1) {
    solution.togglePiece(0, 0);
    return solution;
  }


  // var xPositions = _.map(_.range(0, n), function(number) { return number; });
  // var yPositions = xPositions.slice();
  // var xBag = xPositions.slice();
  // var yBag = xPositions.slice();

  // In xBag, grab one item
  // In yBag, grab one item
  // This is the first rook's position - togglePiece on this position in an empty board

  // splice() each bag - to remove the grabbed values

  // Next rook take the next items from each

  // for (var x = 0; x < xPositions.length; x++) {

  //   for (var y = 0; y < yPositions.length; y++) {

  //   }
  // }

  

  //console.log(solution);


  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log(solns.length, '# of sols');
  _.each(solns, function(s) {
    console.log(s.attributes);
  })
  return solns;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = findNRooksSolution(n); //fixme

  // Base case
  if (n === 1) {
    return 1;
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
