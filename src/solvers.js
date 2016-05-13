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
  var solution = []; // Initialize empty array to hold each row array in solution
  var tempBoard = new Board({'n': n}); // Initialize temporary board to generate base rook solution

  // Iterate through each position in board
  // x = row, y = column position
  for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
      if (tempBoard.rows()[x][y] === 0) {
        // If position does not have a game piece, togglePiece() to add one
        tempBoard.togglePiece(x, y);

        // Check if that piece causes a row conflict at x or column conflict at y
        // If so, revert space and togglePiece()
        if (tempBoard.hasRowConflictAt(x) || tempBoard.hasColConflictAt(y)) {
            tempBoard.togglePiece(x, y);
        }
      }
    }
  }

  // tempBoard.attributes contains n Rooks solution as an object
  // Call the .rows() method to get an array containing each row array
  solution = tempBoard.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // generatePositions() returns array of all valid and unique board permutations for Rooks
  return generatePositions(n).length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var positions = [];

  positions = generatePositions(n); // Generate array of all valid and unique board permutations for Rooks

  // Iterate through each board permutation
  for (var p = 0; p < positions.length; p++) {
    // Iterate through each combination
    // Difference of 1 between two positions indicates a conflict
    // Example:
    //
    // '1230' - Difference between positions 0 and 1 (1 and 2 values) is 1
    // Indicates this board permutation is not a potential solution
    for (var i = 0; i < n - 1; i++) {
      if (p !== positions.length - 1 && positions[p][i+1] && (Math.abs(positions[p][i] - positions[p][i + 1]) === 1)) {
        p++; // If conflict, move on to next board permutation
        i = 0; // Re-initialize start position for calculating differences
      }
    }

    // Initialize a new board to create the possible Queen solution
    var newBoard = new Board({'n': n});
    
    // Iterate through each row/column to create the board from our board permutation
    for (var s = 0; s < positions[p].length; s++) {
      newBoard.togglePiece(s, positions[p][s]);
    }
    
    // Each board permutation is still a Rook solution
    // If it has no diagonal conflicts, also a Queen solution
    if (!newBoard.hasAnyMajorDiagonalConflicts() && !newBoard.hasAnyMinorDiagonalConflicts()) {
      // console.log('Single solution for ' + n + ' queens:', JSON.stringify(newBoard.rows()));
      return newBoard.rows();
    } 
  }
  
  return new Board({'n': n}).rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var positions = [];
  var count = 0;

  positions = generatePositions(n);

  for (var p = 0; p < positions.length; p++) {
    for (var i = 0; i < n - 1; i++) {
      if (p !== positions.length - 1 && positions[p][i+1] && (Math.abs(positions[p][i] - positions[p][i + 1]) === 1)) {
        p++;
        i = 0;
      }
    }
    var newBoard = new Board({'n': n});
    for (var s = 0; s < positions[p].length; s++) {
      newBoard.togglePiece(s, positions[p][s]);
    }
    if (!newBoard.hasAnyMajorDiagonalConflicts() && !newBoard.hasAnyMinorDiagonalConflicts()) {
      count++;
    } 
  }

  console.log('Number of solutions for ' + n + ' queens:', count);

  return count;
};



// Refactoring

// Recursive function to return unique potential permutations of the boards
// Returns an array of strings representing the positions in each row
// where the game piece will be
// 
// Example:
// var result = [ '0123', '0132' ]
// result[0][0]: '0' - Row 1 (top row), column 0 has the game piece
// result[0][1]: '1' - Row 1 (second row), column 1 has the game piece
// and so on...
window.generatePositions = function(n) {
  var result = [];
  var input = ''; // Initialize for recursive function

  for (var i = 0; i < n; i++) {
    input += '' + i; // Generate initial position indexes to create permutations
  }

  function generateCombos(input, currentSequence) {
    var nextInput;
    var remainingPositions;

    if (input == '') {
      result.push(currentSequence);
    } else {
      for (var i = 0; i < input.length; i++) {
        remainingPositions = input.substr(0, i) + input.substr(i + 1, input.length - 1);
        nextInput = currentSequence + input[i];
        generateCombos(remainingPositions, nextInput);
      }
    }
  }

  generateCombos(input, '');

  return result;
}


