let users = {
  turtle: {
    id: "turtle",
    name: "Sneak the Turtle",
    avatarURL: require("../images/turtle.jpg"),
    tweets: [
      "cuo3xlu6wb8lyf6afj5fx",
      "untv1qg7b9owsr1hcc0cvm",
      "rz5dl7dkbwhycbzt772t"
    ]
  },
  tiger: {
    id: "tiger",
    name: "Tony the Tiger",
    avatarURL: require("../images/tiger.jpg"),
    tweets: [
      "89mj2n8lslblkmsaipzbaa",
      "pfo0v501d0ju9sz4p3zvfr",
      "sr6cop9d933hv5saehcpr"
    ]
  },
  bison: {
    id: "bison",
    name: "Bob the Bison",
    avatarURL: require("../images/bison.jpg"),
    tweets: [
      "katnpnpgwwewsjma1hbpp",
      "xrvuspeyklmtqys8dw8yr",
      "0bsaavko4j5izz6q8c3yhlh",
      "id0griz9xerh57ffkb0o76",
      "dj5ea9x43959tqtlk5xf",
      "xzuv82rc4bg0g99he0q44kc"
    ]
  }
};

let tweets = {
  katnpnpgwwewsjma1hbpp: {
    id: "katnpnpgwwewsjma1hbpp",
    author: "tiger",
    content:
      "I agree. I'm always impressed when I see someone giving a talk in a language that's not their own.",
    timestamp: 1543170314,
    likes: ["bison"],
    replies: [],
    replyTo: "cuo3xlu6wb8lyf6afj5fx"
  },
  xrvuspeyklmtqys8dw8yr: {
    id: "xrvuspeyklmtqys8dw8yr",
    author: "bison",
    content: "It can be difficult at times.",
    timestamp: 1543163894,
    likes: [],
    replies: [],
    replyTo: "cuo3xlu6wb8lyf6afj5fx"
  },
  cuo3xlu6wb8lyf6afj5fx: {
    id: "cuo3xlu6wb8lyf6afj5fx",
    author: "turtle",
    content:
      "Shoutout to all the speakers I know for whom English is not a first language, but STILL explain concept well. It's hard enough to give a good talk in your mother tongue!",
    timestamp: 1543153334,
    likes: ["tiger"],
    replies: ["katnpnpgwwewsjma1hbpp", "xrvuspeyklmtqys8dw8yr"],
    replyTo: null
  },
  "0bsaavko4j5izz6q8c3yhlh": {
    id: "0bsaavko4j5izz6q8c3yhlh",
    author: "bison",
    content: "Sometimes you have to sacrifice simplicity for power.",
    timestamp: 1543096334,
    likes: ["tiger"],
    replies: [],
    replyTo: "89mj2n8lslblkmsaipzbaa"
  },
  "89mj2n8lslblkmsaipzbaa": {
    id: "89mj2n8lslblkmsaipzbaa",
    author: "tiger",
    content:
      "I hope one day the propTypes pendulum swings back. Such a simple yet effective API. Was one of my favorite parts of React.",
    timestamp: 1543094294,
    likes: ["bison", "turtle"],
    replies: ["0bsaavko4j5izz6q8c3yhlh"],
    replyTo: null
  },
  pfo0v501d0ju9sz4p3zvfr: {
    id: "pfo0v501d0ju9sz4p3zvfr",
    author: "tiger",
    content:
      "Want to work at Facebook/Google/:BigCompany? Start contributing code long before you ever interview there.",
    timestamp: 1543091354,
    likes: ["bison"],
    replies: [],
    replyTo: null
  },
  id0griz9xerh57ffkb0o76: {
    id: "id0griz9xerh57ffkb0o76",
    author: "bison",
    content: "Puppies are the best.",
    timestamp: 1543079474,
    likes: ["tiger", "turtle"],
    replies: [],
    replyTo: "untv1qg7b9owsr1hcc0cvm"
  },
  sr6cop9d933hv5saehcpr: {
    id: "sr6cop9d933hv5saehcpr",
    author: "tiger",
    content: "Also trashcans. Learned this the hard way.",
    timestamp: 1542975734,
    likes: [],
    replies: [],
    replyTo: "untv1qg7b9owsr1hcc0cvm"
  },
  untv1qg7b9owsr1hcc0cvm: {
    id: "untv1qg7b9owsr1hcc0cvm",
    author: "turtle",
    content: "Puppies 101: buy a hamper with a lid on it.",
    timestamp: 1543002374,
    likes: ["tiger"],
    replies: ["id0griz9xerh57ffkb0o76", "sr6cop9d933hv5saehcpr"],
    replyTo: null
  },
  rz5dl7dkbwhycbzt772t: {
    id: "rz5dl7dkbwhycbzt772t",
    author: "turtle",
    content:
      "The idea of best practices being a negative thing is an interesting concept.",
    timestamp: 1542964094,
    likes: ["bison"],
    replies: [],
    replyTo: "xzuv82rc4bg0g99he0q44kc"
  },
  dj5ea9x43959tqtlk5xf: {
    id: "dj5ea9x43959tqtlk5xf",
    author: "bison",
    content:
      "Is there a metric like code coverage, but that shows lines that, if changed (in a syntactically correct way), wouldn't cause tests to fail?",
    timestamp: 1542928454,
    likes: ["turtle"],
    replies: [],
    replyTo: null
  },
  xzuv82rc4bg0g99he0q44kc: {
    id: "xzuv82rc4bg0g99he0q44kc",
    author: "bison",
    content:
      "React came out 'rethinking best practices'. It has since accumulated 'best practices' of its own. Let's see if we can do better.",
    timestamp: 1542924074,
    likes: ["turtle", "tiger"],
    replies: ["rz5dl7dkbwhycbzt772t"],
    replyTo: null
  }
};

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getTweets() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...tweets }), 1000);
  });
}

function formatTweet(tweet) {
  return {
    ...tweet,
    id: generateUID(),
    timestamp: Date.now() / 1000,
    likes: [],
    replies: []
  };
}

export function _saveTweet(tweet) {
  return new Promise((res, rej) => {
    const formattedTweet = formatTweet(tweet);

    setTimeout(() => {
      tweets = {
        ...tweets,
        [formattedTweet.id]: formattedTweet
      };

      users = {
        ...users,
        [formattedTweet.author]: {
          ...users[formattedTweet.author],
          tweets: users[formattedTweet.author].tweets.concat([
            formattedTweet.id
          ])
        }
      };

      res(formattedTweet);
    }, 1000);
  });
}

export function _saveToggleTweet({ id, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      tweets = {
        ...tweets,
        [id]: {
          ...tweets[id],
          likes: tweets[id].likes.includes(authedUser)
            ? tweets[id].likes.filter(user => user !== authedUser)
            : tweets[id].likes.concat([authedUser])
        }
      };

      res({ id, authedUser });
    }, 200);
  });
}
