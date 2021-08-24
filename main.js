// code sketch


/*
Late excuse object?
Five unique variables for return phrase
-[Initial apology(optional)][First person possessive + verb/noun]
[Failure/unfortunate event],[Conclusive consequence]-
*/
const lateXQs = {
  const _firstApology = [],
  const _dependents = {
    const _second = [],
    const _third = []
  },
  const _fourth = [],

  get first() {

  },

  get second() {

  },

  get third() {

  },

  get fourth() {

  },

  createXQs() {
    return // all gets
  }
}

/*
Leave excuse object?
Four unique variables for return phrase
-[First person possessive][task/plan][Vague time (optional)],
[depart declaration]-
*/

const leaveXQs = {
  const _first = [],
  const _second = [],
  const _third = [],
  const _fourth = [],

    get first() {

    },

    get second() {

    },

    get third() {

    },

    get fourth() {

    },

    createXQs() {
      return // all gets
    }
}

const randomApology = situation => {
  switch (situation) {
    case imLate:
      return lateXQs.createXQs();
      break;
    case need2Go:
      return leaveXQs.createXQs();
      break;
  }
}

const XQs-Me = randomApology(situation); // imLate / need2Go

/* Word selectors
Math.floor(Math.random() * thing.length)
Math.floor(Math.random() * thing2.length)
Math.floor(Math.random() * thing3.length)
*/
