window.onload = function () {
    var r1f1 = document.getElementById("r1f1");
    var r1f2 = document.getElementById("r1f2");
    var r1f3 = document.getElementById("r1f3");

    var r2f1 = document.getElementById("r2f1");
    var r2f2 = document.getElementById("r2f2");
    var r2f3 = document.getElementById("r2f3");

    var r3f1 = document.getElementById("r3f1");
    var r3f2 = document.getElementById("r3f2");
    var r3f3 = document.getElementById("r3f3");

    var tictactoe = document.getElementsByClassName("tictactoe");



    var countx = 0;
    var counto = 0;


    var finalwinner = document.getElementById("winner");




    r1f1.addEventListener('click', function () {
        if (this.getAttribute("data-type") == null || this.getAttribute("data-type") == undefined) {
            winner();
            whichOne(countx, counto, 0);
        }
    });

    r1f2.addEventListener('click', function () {
        if (this.getAttribute("data-type") == null || this.getAttribute("data-type") == undefined) {
            whichOne(countx, counto, 1);
            winner();

        }
    });

    r1f3.addEventListener('click', function () {
        if (this.getAttribute("data-type") == null || this.getAttribute("data-type") == undefined) {
            whichOne(countx, counto, 2);
            winner();

        }
    });

    r2f1.addEventListener('click', function () {
        if (this.getAttribute("data-type") == null || this.getAttribute("data-type") == undefined) {
            whichOne(countx, counto, 3);
            winner();

        }
    });
    r2f2.addEventListener('click', function () {
        if (this.getAttribute("data-type") == null || this.getAttribute("data-type") == undefined) {
            whichOne(countx, counto, 4);
            winner();
        }
    });

    r2f3.addEventListener('click', function () {
        if (this.getAttribute("data-type") == null || this.getAttribute("data-type") == undefined) {
            whichOne(countx, counto, 5);
            winner();
        }
    });

    r3f1.addEventListener('click', function () {
        if (this.getAttribute("data-type") == null || this.getAttribute("data-type") == undefined) {
            whichOne(countx, counto, 6);
            winner();
        }
    });

    r3f2.addEventListener('click', function () {
        if (this.getAttribute("data-type") == null || this.getAttribute("data-type") == undefined) {
            whichOne(countx, counto, 7);
            winner();
        }
    });
    r3f3.addEventListener('click', function () {
        if (this.getAttribute("data-type") == null || this.getAttribute("data-type") == undefined) {
            whichOne(countx, counto, 8);
            winner();
        }

    });

    function addX(number) {
        let data = document.createAttribute("data-type");
        let p = document.createElement("p");

        let addx = "X";


        tictactoe[number].append(p);
        p.innerHTML = addx;
        data.value = addx;
        tictactoe[number].setAttributeNode(data);
        countx++;
    }

    function addO(number) {
        let data = document.createAttribute("data-type");
        let p = document.createElement("p");

        let addo = "O"

        tictactoe[number].append(p);
        p.innerHTML = addo;
        tictactoe[number].setAttributeNode(data);

        data.value = addo;


        counto++;


    }


    function whichOne(countx, counto, number) {
        if (countx > counto) {
            addO(number);
        } else {

            addX(number);
        }
    }

    function winner() {
        if ((document.getElementById("r1f1").getAttribute("data-type") == "X" && document.getElementById("r1f2").getAttribute("data-type") == "X" && document.getElementById("r1f3").getAttribute("data-type") == "X") ||
            ((document.getElementById("r2f1").getAttribute("data-type") == "X") && document.getElementById("r2f2").getAttribute("data-type") == "X" && document.getElementById("r2f3").getAttribute("data-type") == "X") ||
            (document.getElementById("r3f1").getAttribute("data-type") == "X" && document.getElementById("r3f2").getAttribute("data-type") == "X" && document.getElementById("r3f3").getAttribute("data-type") == "X") ||
            (document.getElementById("r1f1").getAttribute("data-type") == "X" && document.getElementById("r2f1").getAttribute("data-type") == "X" && document.getElementById("r3f1").getAttribute("data-type") == "X") ||
            (document.getElementById("r1f2").getAttribute("data-type") == "X" && document.getElementById("r2f2").getAttribute("data-type") == "X" && document.getElementById("r3f2").getAttribute("data-type") == "X") ||
            (document.getElementById("r1f3").getAttribute("data-type") == "X" && document.getElementById("r2f3").getAttribute("data-type") == "X" && document.getElementById("r3f3").getAttribute("data-type") == "X") ||
            (document.getElementById("r1f1").getAttribute("data-type") == "X" && document.getElementById("r2f2").getAttribute("data-type") == "X" && document.getElementById("r3f3").getAttribute("data-type") == "X") ||
            (document.getElementById("r1f3").getAttribute("data-type") == "X" && document.getElementById("r2f2").getAttribute("data-type") == "X" && document.getElementById("r3f1").getAttribute("data-type") == "X")) {
            finalwinner.innerHTML = "X PLAYER WON";
            window.setTimeout(function () { window.location.reload() }, 6000);
        } else if (
            (document.getElementById("r1f1").getAttribute("data-type") == "O" && document.getElementById("r1f2").getAttribute("data-type") == "O" && document.getElementById("r1f3").getAttribute("data-type") == "O") ||
            (document.getElementById("r2f1").getAttribute("data-type") == "O" && document.getElementById("r2f2").getAttribute("data-type") == "O" && document.getElementById("r2f3").getAttribute("data-type") == "O") ||
            (document.getElementById("r3f1").getAttribute("data-type") == "O" && document.getElementById("r3f2").getAttribute("data-type") == "O" && document.getElementById("r3f3").getAttribute("data-type") == "O") ||
            (document.getElementById("r1f1").getAttribute("data-type") == "O" && document.getElementById("r2f1").getAttribute("data-type") == "O" && document.getElementById("r3f1").getAttribute("data-type") == "O") ||
            (document.getElementById("r1f2").getAttribute("data-type") == "O" && document.getElementById("r2f2").getAttribute("data-type") == "O" && document.getElementById("r3f2").getAttribute("data-type") == "O") ||
            (document.getElementById("r1f3").getAttribute("data-type") == "O" && document.getElementById("r2f3").getAttribute("data-type") == "O" && document.getElementById("r3f3").getAttribute("data-type") == "O") ||
            (document.getElementById("r1f1").getAttribute("data-type") == "O" && document.getElementById("r2f2").getAttribute("data-type") == "O" && document.getElementById("r3f3").getAttribute("data-type") == "O") ||
            (document.getElementById("r1f3").getAttribute("data-type") == "O" && document.getElementById("r2f2").getAttribute("data-type") == "O" && document.getElementById("r3f1").getAttribute("data-type") == "O")) {
            finalwinner.innerHTML = "O PLAYER WON";
            window.setTimeout(function () { window.location.reload() }, 6000)
        }


    }
}