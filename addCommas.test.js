const addCommas = require("./addCommas");
const jest = require("/usr/share/nodejs/jest/bin/jest.js")

const single = 1;
const ten = 10;
const hundred = 100;
const thousand = 1000;
const tenThousand = 10000;
const hundredThousand = 100000;
const million = 1000000;
const billion = 1000000000;

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("inspecting addCommas", ()=>{
  test('adds commas to numbers of different lengths', ()=>{
    expect(addCommas(single)).toBe('1');
    expect(addCommas(ten)).toBe('10');
    expect(addCommas(hundred)).toBe('100');
    expect(addCommas(thousand)).toBe('1,000');
    expect(addCommas(tenThousand)).toBe('10,000');
    expect(addCommas(hundredThousand)).toBe('100,000');
    expect(addCommas(million)).toBe('1,000,000');
    expect(addCommas(billion)).toBe('1,000,000,000');
  })
})
