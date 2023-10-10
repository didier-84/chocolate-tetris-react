import shuffle  from './FisherYatesShuffle'

class Pieces {
  static generateBag7() {
    return shuffle([this.i, this.j, this.l, this.o, this.s, this.t, this.z])
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

export default Pieces
