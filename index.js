"use strict"

const plus_btn_bottom = document.querySelector(`.plus-btn-bottom`),
      matrix = document.querySelector(`.matrix`),
      row = document.getElementById(`row_main`),
      square = document.querySelector(`.square`),
      plus_btn_right = document.querySelector(`.plus-btn-right`),
      minus_btn_left = document.querySelector(`.minus-btn-left`),
      minus_btn_top = document.querySelector(`.minus-btn-top`),
      container = document.querySelector(`.container`);

// function to add bottom line
plus_btn_bottom.addEventListener(`click`, () => {
    let line = document.createElement(`div`); // create line for squares
    line.classList.add(`row`); // getting class from element
    matrix.append(line); // add line to end of matrix 
    for (let node of row.childNodes) { // sorting out childNodes of row
        if (node.nodeName == `DIV`) {
            const squareElement = document.createElement(`div`); // making a squares for line
            squareElement.classList.add(`square`); // getting class from element
            line.append(squareElement); // add equal amount of squares to collumm to line
        };
    };
});

// function to add collumm from right

plus_btn_right.addEventListener(`click`, () => {
    for (let node of matrix.childNodes) { // sorting out childNodes of matrix
        if (node.nodeName == `DIV`) {
            const squareElement = document.createElement(`div`); // create child for each node
            squareElement.classList.add(`square`); // getting class from element
            node.append(squareElement); // add child for each element
        };
    };
});

// function to minus definite row 

minus_btn_left.addEventListener(`click`, (e) => {
    for (let node of matrix.childNodes) { // sorting out childNodes of matrix
        if (node.nodeName == "#text") {
            continue; // miss element if node.nodeName == "#text"
        } else if (matrix.children.length == 1) { // break cycle if the row has only one line
            break;
        } else if (node.offsetTop == e.target.offsetTop) { // compare the node`s cords with cursor`s cords, if equal - true 
            if (node.offsetTop == matrix.firstElementChild.offsetTop) { // cansel removing first line
                break;
            } else if (node.nextElementSibling == null) { // check if definite line is last
                minus_btn_left.style.top = `${parseInt(minus_btn_left.style.top) - 52}px`; // switch position of button after removing last line
            }
            node.remove(); // remove the definite line, because cords are equal
            break;
        }
    };
});

// function to minus definite columm 

minus_btn_top.addEventListener(`click`, (e) => {
    for (let node of matrix.childNodes) { // sorting out childNodes of matrix
        if (node.nodeName == "#text") {
            continue; // miss element if node.nodeName == "#text"
        } else if (node.children.length == 1) { // break cycle if the row has only one collum
            break;
        } 
        for (let nodeChild of node.children) { // sorting out childs of node matrix
            if (nodeChild.offsetLeft == e.target.offsetLeft) { // compare the nodeChilds`s cords with cursor`s cords, if equal - true
                if (nodeChild.nextElementSibling == null) { // check if definite collum is last
                    minus_btn_top.style.left = `${parseInt(minus_btn_top.style.left) - 52}px`; // switch position of button after removing last collum
                }
                nodeChild.remove(); // remove the definite collum, because cords are equal
            }
        }
    };
});

// function to follow buttons when cursor in right area

document.addEventListener('DOMContentLoaded', () => {
    const followCursor = () => { 
        matrix.addEventListener('mousemove', (e) => {
            minus_btn_top.style.left = e.target.offsetLeft + 'px'; // following the top button
            minus_btn_left.style.top = e.target.offsetTop + 'px'; // following the left button
        })
        }
    followCursor(); // run the function
})







