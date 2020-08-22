tickets = (peopleInLine) => {
    var check = (peopleInLine.includes(25))
    var twent = 0
    var fif = 0
    for (var i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] == 25) {
            twent++;
        } if (peopleInLine[i] == 50) {
            fif++;
            twent--;
            if (twent < 0) {
                return 'NO'
            }

        } if (peopleInLine[i] == 100) {
            if (fif > 0) {
                twent--;
                fif--;
                if (twent < 0) {
                    return 'NO'
                }
            } else {
                twent--;
                twent--;
                twent--;
                if (twent < 0) {
                    return 'NO'
                }
            }
        }
    }
    if (check == false) {
        return 'NO'
    }
    if (twent < 0) {
        return 'NO'
    } else return 'YES'
}