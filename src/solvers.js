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
  var answer = [];
  var tempBoard = new Board({'n': n});

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
    }
  }

  for (var value in tempBoard.attributes) {
    if (value !== 'n') {
      answer.push(tempBoard.attributes[value]);
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(answer));
  
  return answer;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solution = findNRooksSolution(n); //fixme

  // var comboArray = [];
  // var positions = [];

  // positions = generatePositions(n);

  // for (var p = 0; p < positions.length; p++) {
  //   var newBoard = new Board({'n': n});
  //   for (var s = 0; s < positions[p].length; s++) {
  //     newBoard.togglePiece(s, positions[p][s]);
  //   }
  //   comboArray.push(newBoard);
  // }

  // solutionCount = comboArray.length;

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;

  // The number of n rooks solutions is n!
  function factorial(n) {
    if (n === 0) {
      return 0;
    }

    if (n === 1) {
      return 1;
    }

    if (n > 1) {
      return (n * factorial(n - 1));
    }
  }

  return factorial(n);
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var solution = undefined; //fixme
  var comboArray = [];
  var positions = [];
  var input = '';
  var answer = [];
  var answerBoard = [];

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
      for (var v = 0; v < n; v++) {
        answer.push(newBoard.attributes[v]);
      }
      return answer;
    } 
  }

  return new Board({'n': n}).rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // var solution = undefined; //fixme

  var comboArray = [];
  var positions = [];
  var count = 0;
  var answer = [];
  var answerBoard = [];

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

// Recursive function to return unique potential combinations of the boards
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
    input += '' + i;
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


