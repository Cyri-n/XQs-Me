// have hold ~10 values NOT loop? have random number be global function?

/*
-[Initial apology(optional)][First person possessive + verb/noun]
[Failure/unfortunate event],[Conclusive consequence]-
*/
const lateXQs = {
  _first: ["placeholder1", "placeholder2"],
  _dependents: {
    _second: ["plho1", "plho2"],
    _third: ["placeh1", "placeh2"]
  },
  _fourth: ["pholder1", "pholder2"],

  get first () {
    const word1 = Math.floor(Math.random() * this._first.length);
    return this._first[word1];
  },

  get second () {
    const word2 = Math.floor(Math.random() * this._dependents._second.length);
    return this._dependents._second[word2];
  },

  get third () {
    const word3 = Math.floor(Math.random() * this._dependents._third.length);
    return this._dependents._third[word3];
  },

  get fourth () {
    const word4 = Math.floor(Math.random() * this._fourth.length);
    return this._fourth[word4];
  },

  createXQs () {
    return `${this.first} ${this.second} ` +
           `${this.third}, ${this.fourth}.`;
  }
}


/*
-[First person possessive][task/plan][Vague time (optional)],
[depart declaration]-
*/

const leaveXQs = {
  _first: ["p1", "p2"],
  _second: ["pl1", "pl2"],
  _third: ["ph1", "ph2"],
  _fourth: ["placeho1", "placeho2"],

  get first () {
    const word1 = Math.floor(Math.random() * this._first.length);
    return this._first[word1];
  },

  get second () {
    const word2 = Math.floor(Math.random() * this._second.length);
    return this._second[word2];
  },

  get third () {
    const word3 = Math.floor(Math.random() * this._third.length);
    return this._third[word3];
  },

  get fourth () {
    const word4 = Math.floor(Math.random() * this._fourth.length);
    return this._fourth[word4];
  },

  createXQs () {
    return `${this.first} ${this.second} ` +
           `${this.third}, ${this.fourth}.`;
  }
}

const XQs_Me = situation => {
  switch (situation) {
    case "late":
      return lateXQs.createXQs();
      break;
    case "leave":
      return leaveXQs.createXQs();
      break;
    default:
    return "If you're late, type 'late' as the function argument. " +
    "If you need to get out of an awkward situation, type 'leave'.";
  }
}
