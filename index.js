const BOXES = document.querySelectorAll(".boxes");
const BOX = document.querySelectorAll(".box");

const GAME = document.querySelector(".chessboard");
const PROMOTE = document.querySelectorAll(".pawn-promo li");

let BgHighligtState = null;

let blackPawnPromo = false;
let whitePawnPromo = false;

let timeOut = false;


let turn;
let correctTurn;
let handleBlackTimer;
let handleWhiteTimer;
// =======================
// functn to rotate board
// ======================
const rotateBoard=()=>{
    GAME.style.transform="rotate(180deg)";
    GAME.querySelectorAll("img").forEach((img) => {
        img.style.transform="rotate(180deg)";
    });
    GAME.querySelectorAll(".timer").forEach((timer) => {
        timer.style.transform="rotate(180deg)";
    });
}
// ==========================
// INTRO_SECTION FUNCTIONALITY
// =============================
const INTRO_SECTION = document.querySelector(".intro-section");
const USER_CHOICE = document.querySelectorAll(".player-name");
const GAME_SECTION = document.querySelector(".game-section");
let player;
let computer;

USER_CHOICE.forEach(btn => {
    btn.addEventListener("click", (e) => handleUserChoice(e))
})

const handleUserChoice=(e)=> {
    player = e.target.innerHTML;
    INTRO_SECTION.classList.add("hidden");
    GAME_SECTION.classList.remove("hidden");
    boardDesign();
    turn = "white";
    player=="white"?computer="black":computer="white";
    player == "black" ? rotateBoard() : console.log("you are white");;
    handleWhiteTimer = setInterval(whiteTimer, 1000);
    if(computer=="white") handleComputerPlayer();
}
// ================================
// board desighn
// ==========================
const boardDesign=()=> {
    for (let i = 0; i < 8; i++) {
        const box = BOXES[i].getElementsByClassName("box");
        if (i % 2 === 0) {
            for (let j = 0; j < 8; j++) {
                if (j % 2 === 0) {
                    box[j].style.backgroundColor = "var(--black-box)";
                } else {
                    box[j].style.backgroundColor = "var(--white-box)";
                }
            }
        } else {
            for (let j = 0; j < 8; j++) {
                if (j % 2 === 0) {
                    box[j].style.backgroundColor = "var(--white-box)";
                } else {
                    box[j].style.backgroundColor = "var(--black-box)";
                }
            }
        }
    }
}
// ==========================
// handle turn
// =========================
const changeTurn = () => {                  //change turn
    switch (turn) {
        case "white":
            console.log("turn then:",turn);       
            turn = "black";
            console.log("turn now:",turn);
            whitePawnPromo = false;
            clearInterval(handleWhiteTimer);
            handleBlackTimer = setInterval(blackTimer, 1000);     
            if(computer=="black")handleComputerPlayer();
            break;
        case "black":
            console.log("turn then:",turn);       
            turn = "white";
            console.log("turn now:",turn);
            blackPawnPromo = false;
            clearInterval(handleBlackTimer);
            handleWhiteTimer = setInterval(whiteTimer, 1000);
            if(computer=="white")handleComputerPlayer();
            break;  
        default:
            break;
    }

}
// ==================================
// TIMER FUNCTION
// ===================================   
const BLACK_KING = document.querySelector(".black-king");
const WHITE_KING = document.querySelector(".white-king");

// ====================================
// highlight bg
// ==========================================
const highlightBg = (id) => {//function for adding yellow bg effect to squares
    document.getElementById(id).classList.add("bgEffect");
};

const removeHighlight = (id) => {// function for removing Yellow bg effect from squares
    if (id) document.getElementById(id).classList.remove("bgEffect");
};
// ==================================
// HANDLE CIRCLE
// =============================
const showCircle = (SqID) => {// function for showing Possible Move for Piece
    const SELECTED_PIECE = document.getElementById(SqID);
    const circle = document.createElement("span");
    circle.classList.add("round");
    SELECTED_PIECE.appendChild(circle);
};
const clearCircle=()=> {   // function for hiding Possible Move for Piece
    const CIRCLE = document.querySelectorAll(".round");
    if (CIRCLE) {
        CIRCLE.forEach((span) => {
            span.remove();
        });
    }
};
// ==================================
// HANDLE OPPONENTS
// =============================
const CAPTURED_BY_BLACK = document.querySelector("#capturedByBlack");
const CAPTURED_BY_WHITE = document.querySelector("#capturedByWhite");
const BLACK_POINTS = document.querySelector("#blackPoints");
const WHITE_POINTS = document.querySelector("#whitePoints");
const captureOpponentFunction = (id, color) => {    // fuctn to check if opponent exist
    const SELECTED_PIECE = document.querySelector(`#${id} img`);
    if (SELECTED_PIECE) {
        if (SELECTED_PIECE.classList.value.includes(color)) {
            SELECTED_PIECE.classList.add("opponent"); // if opponent exist then add opponent class and return true
            return true;
        }
        return false;
    }
};
const removeOpponent = () => { // funcn to remove opponent class
    const PIECES = document.querySelectorAll(".box img");
    PIECES.forEach((piece) => {
        if (piece.classList.value.includes("opponent")) {
            piece.classList.remove("opponent");
        }
    });
};
// ================================
// handle scores
// ========================================
const handlePoints = (capture, capturedBy) => {  // calculate totalpoints gained by players
    switch (capture.classList.value) {
        case "pawn":
            capturedBy.value += '+1';
            break;
        case "queen":
            capturedBy.value += '+9';
            break;
        default:
            capturedBy.value += '+3';
            break;
    }
    capturedBy.value = `+${eval(capturedBy.value)}`;
}

const showingCapturedPieces=(currPos)=> { // functn to show chaptured pieces on ui
    const SELECTED_PIECE = currPos.querySelector("img");
    if (SELECTED_PIECE && !SELECTED_PIECE.classList.value.includes("king")) {
        let capturedPiece = document.createElement("div");
        if (SELECTED_PIECE.classList.value.includes("white")) {
            CAPTURED_BY_BLACK.classList.remove("invisible");
            BLACK_POINTS.before(capturedPiece);
            handlePoints(SELECTED_PIECE, BLACK_POINTS);

        } else if (SELECTED_PIECE.classList.value.includes("black")) {
            CAPTURED_BY_WHITE.classList.remove("invisible");
            WHITE_POINTS.before(capturedPiece);
            handlePoints(SELECTED_PIECE, WHITE_POINTS);

        }
        capturedPiece.classList.add("capturedPiece");
        capturedPiece.innerHTML = currPos.innerHTML;
        // if (player == "Black") {
        //     capturedPiece.style.transform = "rotate(180deg)"
        // }
    };
}
// ===================================================
// popup-handle
// ========================================
const RESULT_SECTION = document.querySelector(".result-section");
const NEWGAME = document.querySelector(".newGame");
const WINNER_MESSAGE = document.querySelector('.winner-message');
const BLACK_WINNER = document.querySelector(".black-winner");
const WHITE_WINNER = document.querySelector(".white-winner");

const showResultPopup = (message, winner)=> { // funcn to show result on ui
    clearInterval(handleWhiteTimer);
    clearInterval(handleBlackTimer);
    BOX.forEach(box => box.disable = true)
    RESULT_SECTION.classList.remove("hidden");
    WINNER_MESSAGE.textContent = message;
    winner=="black" ? BLACK_WINNER.classList.remove("hidden") : WHITE_WINNER.classList.remove("hidden");
}

NEWGAME.addEventListener("click", (e) => { // functn to reload page when newbtn is clicked
    location.reload();
})

//==============================
// handle winner function
// ================================
const checkForWinner = (dead) => {
    let winner;
    const king= document.querySelector(".check");
    if(king){
        if(king.childNodes[1].className=="white-king" && turn == "black" ){
            showResultPopup( "Black wins! White - illegal move (self-check).", "black");
        }
        if(king.childNodes[1].className=="black-king" && turn == "white" ){
            showResultPopup( "White wins! Black - illegal move (self-check).", "white");
        }
    }; 
    if(timeOut){
        dead=="white"?winner="black":winner="white"
        showResultPopup(`${winner.toUpperCase()} wins by Timeout!`, winner)
    }   
}
