export function sortFileNames(filenames: Array<string>): void {
  filenames.sort((filenameA: string, filenameB: string) => {
    const minNameLen = Math.min(filenameA.length, filenameB.length);

    for (let i=0; i< minNameLen; i++) {
      const charA = filenameA[i];
      const charB = filenameB[i];
      let digitA: number | undefined;
      let digitB: number | undefined;

      if (isDigit(charA)) {
        digitA = getDigit(filenameA, i);
      }

      if (isDigit(charB)) {
        digitB = getDigit(filenameB, i);
      }

      if (digitA && digitB) {
        if (digitA < digitB) {
          return -1;
        } else if (digitA > digitB) {
          return 1;
        }
      } else if (charA < charB) {
        return -1;
      } else if (charA > charB) {
        return 1;
      }
    }

    return filenameA.length < filenameB.length ? -1 : 1; // sort by length instead
  });
}

function isDigit(char: string): boolean {
  return Number.isInteger(parseInt(char));
}

function getDigit(str: string, startDigitIndex: number): number {
  const result = [];

  for (let i=startDigitIndex; i<str.length; i++) {
    if (isDigit(str[i])) {
      result.push(str[i]);
    } else {
      break;
    }
  }

  return parseInt(result.join(""));
} // ["test22.png", "test10.png", "test2.png", "testingSuperLongNameWithDigit1.gif", "test.png"]

// run in main():
// const input = ["filethathasaverylongname21.gif", "file.gif",  "file10.jpg"]; // ["filethathasaverylongname21.gif", "file10.gif", "file2.gif"];

// sortFileNames(input);

// console.log(input);

// ---

/** Prep experience examples and questions --- TODO: PREP QUESTIONS
 * 2 interviews (STAR - Situation, Task, Action, Result)
 * 1 - Arek and Aron (Aron Observer)
 *  - Deliver Results (Created a Payment System) ---
 *   - S: It was the start of the pandemic and the founder finally agreed that we should work on adding payments to the platform.
 *   - T: As the front end engineer then I needed to implement an intuitive first version of the shop UI/UX.
 *   - A: I started planning by comparing existing ordering apps to learned which parts of the UI/UX were intuitive. It was my first time handling 
 *        payments so I used Stripe to process them securely. I also communicated with the backend engineer so the app would handle errors properly
 *        and know where to get the correct data from.
 *   - R: The payment processing feature helped businesses on Locasaur efficiently communicate with their customers and increased our users from hundreds
 *        to a couple thousand. Even back in November and December of 2021 we were able to help around 3 businesses make $56k through Locasaur alone.
 *  - Earning Trust of Others (remove mass message inbox or finding other shop categories) ---
 *   - S: One of the businesses on Locasaur was giving feedback about how it's hard to maintain lots of unread customer messages in the inbox
 *   - T: We noticed that our mass message feature makes it hard to track unread messages since if a team member was not the person who send the message,
 *        all fo the messages would be unread.
 *   - A: As the founder and I were thinking of solutions, he wanted to set the mass messages as unread for the entire team. But I suggested that it would
 *        be better just to extract mass messages from the inbox and set a dismissable recent mass message textbox at the top of the inbox. He disagreed,
 *        but I told him to at least ask the businesses what they thought. Later on he messaged me that the businesses wanted to go with my idea.
 *   - R: After implementing the feature, the businesses were able to find unread messages from customers even after a new mass message has just been sent
 *        out. Also, because we used to track the timestamp of a non mass inbox message, we were able to make the inbox retrieval more efficient since
 *        we didn't have to do an extra join on the SQL query
 * 2 Yanick and Thomas (Thomas Observer)
 *  - Having Ownership => (Deren leaving for internship) ---
 *    - S: One of our engineers was leaving to do a different internship. He was still a student, but he was already working at Locasaur before me
 *    - T: Back then I was handling everything on the front end web and mobile applications.
 *    - A: So since he gave us a heads up, I started leaning more about Express and how Locasaur's backend is structured. I was then able to take over his
 *         work while still working on frontend projects
 *    - R: I was really interested about learning how the entire teck stack works. Because of my curiosity and having ownership of Locasaur's codebase
 *         I was able to build new features and make the software more reliable and efficient
 */
// revisit counting steps, graph coloring ✔, dynamic programming, and backtracking problems.
// When what I was thinking was correct but I hesitate to let the interviewer know and they say my thought process before I do SMH

/**
 * Deliver Results ??? (Fix Mass Message Notifications)
 *   - S: Around the start of the year after the holidays, orders coming in are a bit slow.
 *   - T: I was aware that the notifications for our mass message feature isn't working properly.
 *        Since we had just finished feature requests from businesses over the holidays. I took this opportunity to fix the mass message issue.
 *   - A: I reviewed the implentation of the previous engineers and noticed that there were many requests to get users and create a new message.
 *        By batching the requests and queries, I was able to cut down the payload being received by our notifications server and send the mass message
 *        more efficiently.
 *   - R: After releasing the update, the founder noticed that people have been opening notifications from mass messages more and sending in orders.
 *        An example of this was the last snowstorm and one of the bakeries send out a message that they would close for a snow day. After the message,
 *        orders started to come in for future dates.
 */
