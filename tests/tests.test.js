import ceil from '../src/ceil.js';
import difference from '../src/difference.js';
import toInteger from '../src/toInteger.js';
import upperFirst from '../src/upperFirst.js';
import countBy from '../src/countBy.js';
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
        expect(countBy([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual({ 'true': 2, 'false': 2 });
    });

    test('returns empty object when no elements pass condition', () => {
        expect(countBy([1, 3, 5], (n) => n % 2 === 0)).toEqual({});
    });
});
