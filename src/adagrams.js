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


  
};

// Do not remove this line or your tests will break!
export default Adagrams;
