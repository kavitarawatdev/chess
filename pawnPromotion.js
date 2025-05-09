// ===================================================
//pawn Promo-handle
// ========================================
let promotedPawnId;
let promoBox;
// function for pawn promotion

const PAWN_PROMO_LIST=document.querySelectorAll('.pawn-promo-list li');

const pawnPromotion = (id, promoBox) => {
    const selected_box=document.querySelector(`#${promoBox}`);
    selected_box.classList.remove("hidden");
    switch (id[0]) {
        case "a":
            selected_box.classList.add("pawn-promo-pos-a");
            break;
    
        case "b":
            selected_box.classList.add("pawn-promo-pos-b");

            break;
    
        case "c":
            selected_box.classList.add("pawn-promo-pos-c");

            break;
        
        case "d":
            selected_box.classList.add("pawn-promo-pos-d")

            break;
        case "e":
            selected_box.classList.add("pawn-promo-pos-e");

            break;

        case "f":
            selected_box.classList.add("pawn-promo-pos-f");
            break;

        case "g":
            selected_box.classList.add("pawn-promo-pos-g");
            break;
    
        case "h":
            selected_box.classList.add("pawn-promo-pos-h");
            break;
    
        default:
            break;
    }
}
const handlePawnPromo=(event)=>{
    const selected_box=document.querySelector(`#${promoBox}`);
    document.querySelector(`#${promotedPawnId} img`).src = event.target.src;
    document.querySelector(`#${promotedPawnId} img`).className = event.target.className;
    selected_box.classList.add("hidden");
    selected_box.classList.add("pawn-promo-pos-none");
    changeTurn()
    findingKings();
    check_on_white(white_king_pos);
    check_on_black(black_king_pos);
    checkForWinner();
}