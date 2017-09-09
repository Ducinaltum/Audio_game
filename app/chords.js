var chords = {

}

major = [0, 4, 7]
minor= [0, 3, 7]
dim= [0, 3, 6]
aug= [0, 4, 8]
/*
majj: [0, 4, 7, 11],
dominant: [0, 4, 7, 10],
minor7: [0, 3, 7, 10],
minormajj: [0, 3, 7, 11],

/*

minor7b5
dim7
augmajj
aug7

sus
frigian

minor6
major6

majj9
dominant9
minor79
minormajj9
dominant9b

majj4
dominant4
majj4A
dominant4A
minor74
minormajj4
minor74A
minormajj4A
*/

function Chord(type){
    chord = [];
    chord[0] = type[0];
    tenor = Math.floor(Math.random()*type.length)
    //for
    chord[1] = type[tenor%type.length]
    chord[2] = type[(tenor+1)%type.length]
    chord[3] = type[(tenor+2)%type.length]
}

function setChord(type){
    acorde = new Chord(type)
}

chords = [];
chords.push(major,minor,dim,aug)

setChord(chords[Math.floor(Math.random()*chords.length)]);

