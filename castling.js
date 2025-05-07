const checkIfCastlingPossible = (rook) => {
    let ids = rook.parentNode.id;
    let pos1; let pos2; let pos3;

    switch (ids[0]) {
        case "a":
            pos1 = document.querySelector(`#${String.fromCodePoint(ids.charCodeAt(0) + 1) + Number(ids[1])}`);
            pos2 = document.querySelector(`#${String.fromCodePoint(ids.charCodeAt(0) + 2) + Number(ids[1])}`);
            pos3 = document.querySelector(`#${String.fromCodePoint(ids.charCodeAt(0) + 3) + Number(ids[1])}`);
            if (pos1.innerHTML == "" && pos2.innerHTML == "" && pos3.innerHTML == "" )return {isCastlingPossible:true, extraMove: String.fromCodePoint(ids.charCodeAt(0) + 2) +ids[1]};
            return {isCastlingPossible:false, extraMove: null};
            break;
        case "h":
            pos1 = document.querySelector(`#${String.fromCodePoint(ids.charCodeAt(0) - 1) + Number(ids[1])}`);
            pos2 = document.querySelector(`#${String.fromCodePoint(ids.charCodeAt(0) - 2) + Number(ids[1])}`);
            if (pos1.innerHTML == "" && pos2.innerHTML == "") return {isCastlingPossible:true, extraMove:String.fromCodePoint(ids.charCodeAt(0) - 1) + ids[1]};
            return {isCastlingPossible:false, extraMove: null};
            break;

        default:

            break;
    }
};



const castlingForKing = (pos) => {
    let rookDefaultPos;
    switch (pos[0]) {
        case "g":
            rookDefaultPos ="h"+(Number(pos[1]));
            rookCastledPos = "f"+(Number(pos[1]));
            break;
        case "c":
            rookDefaultPos ="a"+(Number(pos[1]));
            rookCastledPos = "d"+(Number(pos[1]));
            break;
    
        default:
            break;
    }

    [document.getElementById(rookDefaultPos).innerHTML, document.getElementById(rookCastledPos).innerHTML] = [document.getElementById(rookCastledPos).innerHTML, document.getElementById(rookDefaultPos).innerHTML];
    document.querySelector(`#${rookCastledPos} img`).dataset.ismoved="true";
}
