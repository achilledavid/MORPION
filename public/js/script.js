var green = true;
var blue = false;
var tab = [null, null, null, null, null, null, null, null, null];

function choose(cell) {
    if (green) {
        cell.classList.add('green');
        green = false;
        blue = true;
        fillTab(cell.id, 'green');
    }
    else if (blue) {
        cell.classList.add('blue');
        blue = false;
        green = true;
        fillTab(cell.id, 'blue');
    }
}

function reset() {
    window.location.reload();
}

function fillTab(id, color) {
    tab[id] = color;
    console.log(tab)
    verify();
}

function verify() {
    if (tab[0] == tab[1] && tab[1] == tab[2] && tab[2] != null) {
        alert(tab[0] + ' won');
        reset();
    }
    else if (tab[3] == tab[4] && tab[4] == tab[5] && tab[5] != null) {
        alert(tab[3] + ' won');
        reset();
    }
    else if (tab[6] == tab[7] && tab[7] == tab[8] && tab[8] != null) {
        alert(tab[6] + ' won');
        reset();
    }
    else if (tab[0] == tab[3] && tab[3] == tab[6] && tab[6] != null) {
        alert(tab[0] + ' won');
        reset();
    }
    else if (tab[1] == tab[4] && tab[4] == tab[7] && tab[7] != null) {
        alert(tab[1] + ' won');
        reset();
    }
    else if (tab[2] == tab[5] && tab[5] == tab[8] && tab[8] != null) {
        alert(tab[2] + ' won');
        reset();
    }
    else if (tab[0] == tab[4] && tab[4] == tab[8] && tab[8] != null) {
        alert(tab[0] + ' won');
        reset();
    }
    else if (tab[2] == tab[4] && tab[4] == tab[6] && tab[6] != null) {
        alert(tab[2] + ' won');
        reset();
    }
}