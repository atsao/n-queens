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
  
  // Ensure new solution gets created
  if (arguments[1] !== undefined) {
    solution = arguments[1];
  }

  console.log('solution before:', solution);

  if (n === 1) {
    solution.togglePiece(0, 0);
    return solution;
  }


  var xPositions = _.map(_.range(0, n), function(number) { return number; });
  var yPositions = xPositions.slice();
  var xBag = xPositions.slice();
  var yBag = xPositions.slice();

  // In xBag, grab one item
  // In yBag, grab one item
  // This is the first rook's position - togglePiece on this position in an empty board

  // splice() each bag - to remove the grabbed values

  // Next rook take the next items from each bag

  for (var x = 0; x < xPositions.length; x++) {

    for (var y = 0; y < yPositions.length; y++) {

    }
  }

  // for (var x = 0; x < n; x++) {
  //   for (var y = 0; y < solutionRows.length; y++) {
  //     if (rows[x][y] === 0) {
  //       solution.togglePiece(x, y);
  //       if (solution.hasRowConflictAt(x) || solution.hasColConflictAt(y)) {
  //         solution.togglePiece(x, y);
  //       }
  //     }
  //   }
  // }

  console.log(solution);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
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
