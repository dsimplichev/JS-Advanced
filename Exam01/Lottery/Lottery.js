const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number"||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },
 checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }
  
    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );
    let winningNumbers = 0;
  
    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }
  
    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  }
  ,
  secondChance(ticketID, secondChanceWinningIDs) {
    if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
      throw new Error("Invalid input!");
    }
    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};


module.exports = lottery;

const { expect } = require("chai");


describe("Lottery", function () {
  describe("buyLotteryTicket", function () {
    it("should return the correct message when input is valid", function () {
      const result = lottery.buyLotteryTicket(5, 3, true);
      expect(result).to.equal("You bought 3 tickets for 15$.");
    });

    it("should throw an error when buy is false", function () {
      expect(() => lottery.buyLotteryTicket(5, 3, false)).to.throw(
        "Unable to buy lottery ticket!"
      );
    });

    it("should throw an error when input is invalid", function () {
      expect(() => lottery.buyLotteryTicket(-5, 0, true)).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("checkTicket", function () {
    it("should return the correct message when winning numbers are between 3 and 5", function () {
      const result = lottery.checkTicket(
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 7, 8, 9]
      );
      expect(result).to.equal("Congratulations you win, check your reward!");
    });

    it("should return the correct message when all numbers are winning numbers", function () {
      const result = lottery.checkTicket(
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6]
      );
      expect(result).to.equal("You win the JACKPOT!!!");
    });

    it("should throw an error when input is invalid", function () {
      expect(() => lottery.checkTicket([1, 2, 3], [1, 2, 3, 4, 5, 6])).to.throw(
        "Invalid input!"
      );
    });
  });

  describe("secondChance", function () {
    it("should return the correct message when ticketID is included in secondChanceWinningIDs", function () {
      const result = lottery.secondChance(123, [456, 789, 123]);
      expect(result).to.equal("You win our second chance prize!");
    });

    it("should return the correct message when ticketID is not included in secondChanceWinningIDs", function () {
      const result = lottery.secondChance(123, [456, 789]);
      expect(result).to.equal("Sorry, your ticket didn't win!");
    });

    it("should throw an error when input is invalid", function () {
      expect(() => lottery.secondChance("123", [456, 789])).to.throw(
        "Invalid input!"
      );
    });
  });
});