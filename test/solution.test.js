const expect = require("chai").expect;
const findStudentScoreByName = require("../src/solution");
//come back to this
describe("findStudentScoreByName", () => {
    it("should return the score associated with a specific student", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          const actual = findStudentScoreByName(students, "Leo Yeon-Joo");
          const expected = 8.9;
          expect(actual).to.equal(expected);
        });
    it("should return null if incorrect studen name is given", () => {
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ];
          const actual = findStudentScoreByName(students);
          const expected = null;
          expect(actual).to.equal(expected);
    });
});