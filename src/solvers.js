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

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(answer));
  
  return answer;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = findNRooksSolution(n); //fixme

  // // Base case
  // if (n === 1) {
  //   return 1;
  // }
  var comboArray = [];
  var positions = [];
  var input = '';
  for (var i = 0; i < n; i++) {
    input += '' + i;
  }

  function generateCombos(input, currentSequence) {
    var nextInput;
    var remainingPositions;

    if (input == '') {
      positions.push(currentSequence);
    } else {
      for (var i = 0; i < input.length; i++) {
        remainingPositions = input.substr(0, i) + input.substr(i + 1, input.length - 1);
        nextInput = currentSequence + input[i];
        generateCombos(remainingPositions, nextInput);
      }
    }
  }

  generateCombos(input, '');

  for (var p = 0; p < positions.length; p++) {
    var newBoard = new Board({'n': n});
    for (var s = 0; s < positions[p].length; s++) {
      newBoard.togglePiece(s, positions[p][s]);
    }
    comboArray.push(newBoard);
  }

  solutionCount = comboArray.length;

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  var comboArray = [];
  var positions = [];
  var input = '';

  if (n === 0) {
    var tempBoard = new Board({'n': 0});
    var answer = [];
    for (var value in tempBoard.attributes) {
      if (value !== 'n') {
        answer.push(tempBoard.attributes[value]);
      }
    }
    return answer;
  }


  for (var i = 0; i < n; i++) {
    input += '' + i;
  }

  function generateCombos(input, currentSequence) {
    var nextInput;
    var remainingPositions;

    if (input == '') {
      positions.push(currentSequence);
    } else {
      for (var i = 0; i < input.length; i++) {
        remainingPositions = input.substr(0, i) + input.substr(i + 1, input.length - 1);
        nextInput = currentSequence + input[i];
        generateCombos(remainingPositions, nextInput);
      }
    }
  }

  generateCombos(input, '');

  for (var p = 0; p < positions.length; p++) {
    var newBoard = new Board({'n': n});
    for (var s = 0; s < positions[p].length; s++) {
      newBoard.togglePiece(s, positions[p][s]);
    }
    if (!newBoard.hasAnyMajorDiagonalConflicts() && !newBoard.hasAnyMinorDiagonalConflicts()) {
      console.log('passing?');
      console.log('newBoard:', newBoard);
      // var tempBoard = new Board({'n': 0});
    var answer = [];
    for (var value in newBoard.attributes) {
      if (value !== 'n') {
        answer.push(newBoard.attributes[value]);
      }
    }
    return answer;
      // return newBoard;
    }
    // comboArray.push(newBoard);
  }




  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
