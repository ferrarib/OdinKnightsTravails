let knightMoves = [[1, 2], [2, 1], [-1,2], [-1,-2], [1,-2], [2, -1], [-2,-1], [-2,1]];

function possibleKnightMoves(startingPos, board) {
    let moves = [];
    knightMoves.forEach(move => {
        let position = [startingPos[0] + move[0], startingPos[1] + move[1]];
        let boardResult = board[position[0]]?.[position[1]];

        if (boardResult !== undefined){
            moves.push(position);
        }
    });

    return moves;
}

function printBoard(board){
    let boardString = "";
    board.forEach(row => {
        row.forEach(cell => {
            boardString += `${cell} `
        });
        boardString += "\n";
    });
    console.log(boardString);
}

function KnightMoves(startingPos, endingPos){

    let nodesVisited = Array(8).fill().map(_ => Array(8).fill(0));
    let level = 0;
    let nodeCounter = 0;
    numOfNodesAtLevel = 1;
    let queue = [[startingPos]];

    while (queue.length != 0){

        let currentPath = queue.shift();
        let currentMove = currentPath[currentPath.length - 1];
        nodeCounter++;

        if (JSON.stringify(currentMove)==JSON.stringify(endingPos)){
            console.log(`Quickest route in ${level} Moves: `, JSON.stringify(currentPath));
            break;
        }

        if (nodesVisited[currentMove[0]][currentMove[1]] == 1){
            continue;
        }

        nodesVisited[currentMove[0]][currentMove[1]] = 1;
        
        let possibleMoves = possibleKnightMoves(currentMove, nodesVisited);

        possibleMoves.forEach(move => {
            queue.push([...currentPath, move]);
        });

        if (nodeCounter == numOfNodesAtLevel){
            level++;
            numOfNodesAtLevel = queue.length;
            nodeCounter = 0;
        }

    }
}

KnightMoves([0,0], [3,3]);