import shuffle  from './FisherYatesShuffle'

export default class Pieces {
  static generateBag7() {
    return shuffle([this.i, this.j, this.l, this.o, this.s, this.t, this.z])
  }

  static next3pieces(bags = [[], []]) {
    // Take 3 next pieces from first bag (starting from last)
    let pieces = bags[0].slice(-3).reverse()

    // Merge the remaining pieces from next bag, still starting from last
    if (pieces.length < 3) {
      pieces = pieces.concat(
        bags[1].slice(-3 + pieces.length).reverse()
      )
    }

    // Need to call the function to generate piece
    pieces = pieces.map((piece) => piece())

    // Remove empty rows for better alignment
    pieces.forEach((piece) => {
      while(piece[0].every((cell) => cell === ' ')) {
        piece.shift() // remove from start (only 'i')
      }

      while(piece[piece.length - 1].every((cell) => cell === ' ')) {
        piece.pop() // remove from end (fast!)
      }
    })

    return pieces
  }

  static i() {
    return [
      [' ', ' ', ' ', ' '],
      ['i', 'i', 'i', 'i'],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ']
    ];
  }

  static j() {
    return [
      ['j', ' ', ' '],
      ['j', 'j', 'j'],
      [' ', ' ', ' '],
    ];
  }

  static l() {
    return [
      [' ', ' ', 'l'],
      ['l', 'l', 'l'],
      [' ', ' ', ' '],
    ];
  }

  static o() {
    return [
      ['o', 'o'],
      ['o', 'o'],
    ];
  }

  static s() {
    return [
      [' ', 's', 's'],
      ['s', 's', ' '],
      [' ', ' ', ' '],
    ];
  }

  static t() {
    return [
      [' ', 't', ' '],
      ['t', 't', 't'],
      [' ', ' ', ' '],
    ];
  }

  static z() {
    return [
      ['z', 'z', ' '],
      [' ', 'z', 'z'],
      [' ', ' ', ' '],
    ];
  }
}
