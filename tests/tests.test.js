import ceil from '../src/ceil.js';
import difference from '../src/difference.js';
import toInteger from '../src/toInteger.js';
import upperFirst from '../src/upperFirst.js';
import countBy from '../src/countBy.js';
import add from '../src/add.js';
import toString from '../src/toString.js';
import divide from '../src/divide.js';
import filter from '../src/filter.js';
import isArrayLikeObject from '../src/isArrayLikeObject.js';
// add
// toString
// divide
// filter
// isArrayLikeObject
// ceil
// difference
// toInteger
// upperFirst
// countBy

describe('add', () => {
    test('returns the sum of two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('returns the sum of two negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });

    test('returns the sum of a positive and a negative number', () => {
        expect(add(2, -3)).toBe(-1);
    });

    test('returns the correct value when one of the arguments is zero', () => {
        expect(add(2, 0)).toBe(2);
    });

    // TODO: Negative test: String, null, undefined
});

describe('toString', () => {
    test('returns a string representation of a number', () => {
        expect(toString(42)).toBe('42');
    });

    test('returns a string representation of a boolean', () => {
        expect(toString(true)).toBe('true');
    });

    test('returns a string representation of an array', () => {
        expect(toString([1, 2, 3])).toBe('1,2,3');
    });

    test('returns a string representation of an object', () => {
        expect(toString({ a: 1, b: 2 })).toBe('[object Object]');
    });
});

describe('divide', () => {
    test('returns the quotient of two positive numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });

    test('returns the quotient of two negative numbers', () => {
        expect(divide(-6, -3)).toBe(2);
    });

    test('returns the quotient of a positive and a negative number', () => {
        expect(divide(6, -3)).toBe(-2);
    });

    test('throws an error when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow();
    });
});

describe('filter', () => {
    test('returns an array with the elements that pass the condition', () => {
        expect(filter([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4]);
    });

    test('returns an empty array when no elements pass the condition', () => {
        expect(filter([1, 3, 5], (n) => n % 2 === 0)).toEqual([]);
    });

    test('returns the original array when all elements pass the condition', () => {
        expect(filter([2, 4, 6], (n) => n % 2 === 0)).toEqual([2, 4, 6]);
    });
});

describe('isArrayLikeObject', () => {
    test('returns true for an array', () => {
        expect(isArrayLikeObject([1, 2, 3])).toBe(true);
    });

    test('returns true for an object with a length property', () => {
        expect(isArrayLikeObject({ length: 3 })).toBe(true);
    });

    test('returns false for an object without a length property', () => {
        expect(isArrayLikeObject({ a: 1, b: 2 })).toBe(false);
    });

    test('returns false for a string', () => {
        expect(isArrayLikeObject('hello')).toBe(false);
    });
});

describe('ceil', () => {
    test('rounds up to nearest integer', () => {
        expect(ceil(4.2)).toBe(5);
    });

    test('returns same number when already an integer', () => {
        expect(ceil(5)).toBe(5);
    });
});

describe('difference', () => {
    test('returns difference between two arrays', () => {
        expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
    });

    test('returns empty array when no difference', () => {
        expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
    });
});

describe('toInteger', () => {
    test('converts number to integer', () => {
        expect(toInteger(4.2)).toBe(4);
    });

    test('converts string to integer', () => {
        expect(toInteger('4.2')).toBe(4);
    });
});

describe('upperFirst', () => {
    test('capitalizes first letter of string', () => {
        expect(upperFirst('hello')).toBe('Hello');
    });

    test('returns empty string when input is empty', () => {
        expect(upperFirst('')).toBe('');
    });
});

describe('countBy', () => {
    test('counts number of occurrences based on condition', () => {
        const collection = [1, 2, 3, 4];
        const iteratee = (n) => n % 2 === 0;
        const expected = { 'true': 2, 'false': 2 };
        console.log(countBy(collection, iteratee));
        expect(countBy(collection, iteratee)).toEqual(expected);
    });

    test('returns empty object when no elements pass condition', () => {
        const collection = [1, 3, 5];
        const iteratee = (n) => n % 2 === 0;
        const expected = {};
        expect(countBy(collection, iteratee)).toEqual(expected);
    });
});
