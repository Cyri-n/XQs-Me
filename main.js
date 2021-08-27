const lateXQs = {
  _first: ["Sorry,", "I'm SO sorry,", "I'm so sorry,", "Apologies,",
          "Goddammit,", "So,", "Uh,", "You're not gonna believe this, but",
          "Sorry I'm late,", "I'm really f****** sorry,",
          "The capital of Iceland is Reykjavik, also", "Excuse my lateness,",
          "I formally apologize for being late,", "F****** hell,", "*sigh*,",
          "Man, I'm really sorry,", "My bad, guys,", "...", "Hi,", "Man,"],
    _second: ["my car got stolen", "I lost my keys", "my phone died",
             "I got lost on the way here", "I got stuck in traffic",
             "my dog ran out of the house", "I lost my phone",
             "I'm a little drunk", "my alarm legitimately didn't go off",
             "I was forced to perform an impromptu eulogy",
             "I lost track of time", "the fire alarm went off in my building",
             "I got entered into a rib eating contest", "Jesus came back",
             "I got into an accident", "I ran out of toilet paper",
             "I had some bad sushi", "my bag got caught in the train doors",
             "my stove caught on fire",
             "there was some fat guy wearing a red jumpsuit on my roof"],
    _third: ["so I had to call a cab from a payphone.",
            "so I was bathroomically incapacitated for a while.",
            "so I had to walk.", "and I had to deal with it.",
            "which meant I had to call 911 and wait for help.",
            "and then I had a breakdown.", "and I couldn't deal.",
            "so my neighbour\'s grand-niece had to get me some aspirin.",
            "so I had to file a report.", "and I had to resolve the situation.",
            "so I immediately called my mother for help.",
            "so I had to rush to Wal-Mart to get more toilet paper.",
            "and I was the only one who could fix the problem.",
            "and it took much longer than I expected.", ", haha",
            "and I wasn't prepared for that.", "and I took that personally.",
            "and ignoring it didn't help.", "but all's well that ends well.",
            "... you know what, no, you should be HONORED by my lateness."],

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

  createXQs () {
    return `${this.first} ${this.second} ${this.third}`;
  }
}

const XQs_Me = () => {
      return lateXQs.createXQs();
}
