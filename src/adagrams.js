const Adagrams = {

  drawLetters() {
    const letters = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      S: 4,
      T: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1
    }

    let letterPool = []
    for (const letter in letters) {
      let i = 0
      while (i < letters[letter] ) {
        letterPool.push(letter)
        i += 1
      }
    }

    let k = 0
    let playerHand = []
    while (k < 10) {
      let random = Math.floor((Math.random() * (letterPool.length)) + 1);
      playerHand.push(letterPool[random])
      letterPool.splice(random, letterPool[random])
      k += 1
    }

    return playerHand
    // Implement this method for wave 1
  },

  usesAvailableLetters(word, drawn) {
    let letterArray = word.split("");
    console.log(letterArray);
    console.log(drawn);

    for (let letter of letterArray) {
      if (drawn.includes(letter))  {
        drawn.splice(drawn.indexOf(letter), 1);
      } else {
        return false;

      }
    }
    console.log(word);
    console.log(drawn);
    return true;
  },

  scoreWord(word){
      const letterScores = {
        "A": 1,
        "E": 1,
        "I": 1,
        "O": 1,
        "U": 1,
        "L": 1,
        "N": 1,
        "R": 1,
        "S": 1,
        "T": 1,
        "D": 2,
        "G": 2,
        "B": 3,
        "C": 3,
        "M": 3,
        "P": 3,
        "F": 4,
        "H": 4,
        "V": 4,
        "W": 4,
        "Y": 4,
        "K": 5,
        "J": 8,
        "X": 8,
        "Q": 10,
        "Z": 10
      }


      let totalScore = 0;

      let UpperCaseWord = word.toUpperCase();
      console.log(totalScore);



      for (let letter of UpperCaseWord) {
        totalScore += letterScores[letter];
      }

      if (UpperCaseWord.length > 6) {
        totalScore += 8;
      }
      console.log(totalScore);
      return totalScore;

    },


    highestScoreFrom(words) {

    const highest = {
      word: '',
      score: 0
    }

    for (let word of words) {

      let scoreForWord = this.scoreWord(word)

      if (scoreForWord > highest.score ) {
        highest.score = scoreForWord;
        highest.word = word;
      }
      else if (scoreForWord == highest.score ) {
        if (word.length == 10 && highest.word.length != 10) {
          highest.score = scoreForWord;
          highest.word = word;
        } else if (word.length < highest.word.length && highest.word.length != 10) {
          highest.score = scoreForWord;
          highest.word = word;
        }


      }

    }

    return highest
  }



};

// Do not remove this line or your tests will break!
export default Adagrams;
