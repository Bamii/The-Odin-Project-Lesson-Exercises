(function() {

    /* ------------------------------------------------------------------ */
    /*                                FLOW                                */
    /* ------------------------------------------------------------------ */
    /*                  ___ hoverBox(), reset() => Function___            */
    /* -> Function for the mouseover EventListener for the boxes          */
    /*                                                                    */
    /*                           ----------                               */
    /*                                                                    */
    /*                 ____ createBoxes() => Function ____                */
    /* -> The for loop iterates for a number of times the user requests.  */
    /*    It defaults to 64                                               */
    /* -> In the for loop, a variable 'gridColumn' is created again for   */
    /*    the sole purpose of when the Sketch Pad is being recreated      */
    /*    (State Retention), then a 'box' is created in each iteration    */
    /*    and is then appended to the 'gridColumn' with a equal width &   */
    /*    height.                                                         */
    /* -> The Boxes EventListener in the createBoxes() function adds an   */
    /*    EventListener to each box.                                      */
    /* ------------------------------------------------------------------ */


    /* CONSTANT & VARIABLE DECLARATIONS */
    let gridColumn = document.getElementById('grid-column');
    const containerDimension = 500;
    let value = 64;  /* Value gotten from user (squared root) */
    let boxUnit = document.getElementsByClassName('box');
    const resetBtn = document.getElementById('reset')

    /* FUNCTIONS */
    function hoverBox(e) {
        const target = e.target;
        target.style.background = "black";
    }

    function reset() {
        var promptValue = prompt('Wanna Reset? Enter a value greater or equal to 64. (It breaks when you cancel) :)');
        value = Number.parseInt(promptValue);
        console.log(Number.isInteger(value));

        if(value <= 64){
            /* CLEAR THE CONTAINER IN CASE THERE ARE ITEMS */
            if(gridColumn.firstChild) {
                let container = document.getElementById('container');
                const gridd = document.createElement('div');
                gridColumn.remove();
                gridd.id = "grid-column";
                container.appendChild(gridd);
            }
            createBoxes();
        } else {
            reset();
        }
    }

    function createBoxes() {
        boxUnit = document.getElementsByClassName('box');

        for(var i=0; i<(value * value); i++) {
            gridColumn = document.getElementById('grid-column');
            const boxDimension = containerDimension/value;
            const box = document.createElement('div');

            box.className += "box";
            box.style.height = `${boxDimension}px`;
            box.style.width = `${boxDimension}px`;
            gridColumn.appendChild(box);
        }

        /*************************/
        /* BOXES EVENT LISTENERS */
        /*************************/
        Array.prototype.forEach.call(boxUnit, function(el) {
            el.addEventListener('mouseover', hoverBox, false);
            /* el.addEventListener('mouseleave', hoverLeave, false); */
        });
    }

    /* FLOW */
    createBoxes();

    /* EVENT LISTENERS */
    resetBtn.addEventListener('click', reset, false);
})();