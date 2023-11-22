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
    
    test('returns the correct value when only one argument is passed', () => {
        expect(add(2)).toBe(2);
    });

    test('returns the correct value when one of the arguments is undefined', () => {
        expect(add(2, undefined)).toBe(2);
    });

    test('returns 0 when both arguments are undefined', () => {
        expect(add(undefined, undefined)).toBe(0);
    });

    test('returns NaN when and throws error one of the arguments is not a number', () => {
        expect(add(2, 'hello')).toBeNaN();
        expect(add(2, 'hello')).toThrow(Error('Invalid argument "hello"'));
    });

    test('returns NaN and throws error when both arguments are not numbers', () => {
        expect(add('6', '4')).toBeNaN();
        expect(add('6', '4')).toThrow(Error('Invalid argument "6"'));
    });
    
    test('returns NaN and throws error when one of the arguments is null', () => {
        expect(add(2, null)).toBeNaN();
        expect(add(2, null)).toThrow(Error('Invalid argument "null"'));
    }   );
    test('returns NaN and throws error when both arguments are null', () => {
        expect(add(null, null)).toBeNaN();
        expect(add(null, null)).toThrow(Error('Invalid argument "null"'));
    });

    test('returns NaN and throws error when one of the arguments is Infinity or -Infinity', () => {
        expect(add(2, Infinity)).toBeNaN();
        expect(add(2, -Infinity)).toBeNaN();
        expect(add(2, Infinity)).toThrow(Error('Invalid argument "Infinity"'));
    });

    test('returns NaN when both arguments are Infinity or -Infinity', () => {
        expect(add(Infinity, Infinity)).toBeNaN();
        expect(add(-Infinity, -Infinity)).toBeNaN();
        expect(add(Infinity, Infinity)).toThrow(Error('Invalid argument "Infinity"'));
    });

    test('returns NaN when one of the arguments is Boolean', () => {
        expect(add(2, true)).toBeNaN();
        expect(add(2, false)).toBeNaN();
        expect(add(2, true)).toThrow(Error('Invalid argument "true"'));
    });
});

describe('toString', () => {
    test('per example, returns a string representation of an array', () => {
        expect(toString([1, 2, 3])).toBe('1,2,3');
    });
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
        expect(toString({ a: 1, b: 2 })).toBe('{ a: 1, b: 2 }');
    });

    test('returns an empty string for null', () => {
        expect(toString(null)).toBe('');
    });

    test('returns an empty string for undefined', () => {
        expect(toString(undefined)).toBe('');
    });

    test('returns empty string when no argument is passed', () => {
        expect(toString()).toBe('');
    });

    test('returns numbers with correct sign', () => {
        expect(toString(-3)).toBe('-3');
        expect(toString(-0)).toBe('-0');
    });

    
});

describe('divide', () => {
    test('per example, returns the quotient of two numbers', () => {
        expect(divide(6, 4)).toBe(1.5);
    });
    test('returns the quotient of two positive numbers', () => {
        expect(divide(6, 3)).toBe(2);
    });

    test('returns the quotient of two negative numbers', () => {
        expect(divide(-6, -3)).toBe(2);
    });

    test('returns the quotient of a positive and a negative number', () => {
        expect(divide(6, -3)).toBe(-2);
    });

    test('returns correct value when only one argument is passed', () => {
        expect(divide(6)).toBe(6);
    });

    test('returns correct value when one of the arguments is undefined', () => {
        expect(divide(6, undefined)).toBe(6);
    });

    test('returns 1 when both arguments are undefined', () => {
        expect(divide(undefined, undefined)).toBe(1);
    });

    test('throws an error when dividing by zero', () => {
        expect(() => divide(6, 0)).toThrow(Error('Division by zero'));
    });

    test('throws an error when arguments are not numbers', () => {
        expect(() => divide('6', '3')).toThrow(Error('Invalid argument "6"'));
    });

    test('throws an error when one of the arguments is null', () => {
        expect(() => divide(6, null)).toThrow(Error('Invalid argument "null"'));
    });

    test('throws an error when both arguments are null', () => {
        expect(() => divide(null, null)).toThrow(Error('Invalid argument "null"'));
    });


});

describe('filter', () => {

    test('per example, returns active users', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ]
        expect(filter(users, ({ active }) => active)).toEqual([{ 'user': 'barney', 'active': true }]);
    });

    test('returns an array with the elements that pass the condition', () => {
        expect(filter([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4]);
    });

    test('returns an empty array when no elements pass the condition', () => {
        expect(filter([1, 3, 5], (n) => n % 2 === 0)).toEqual([]);
    });

    test('returns the original array when all elements pass the condition', () => {
        expect(filter([2, 4, 6], (n) => n % 2 === 0)).toEqual([2, 4, 6]);
    });

    test('returns an empty array when the input is an empty array', () => {
        expect(filter([], (n) => n % 2 === 0)).toEqual([]);
    });

    test('returns an empty array when the input is an empty object', () => {
        expect(filter({}, (n) => n % 2 === 0)).toEqual([]);
    });

    test('returns an empty array when the input is a string', () => {
        expect(filter('hello', (n) => n % 2 === 0)).toEqual([]);
    });

    test('will throw if predicate is not a function', () => {
        expect(() => filter([1, 2, 3], 'hello')).toThrow(Error('predicate is not a function'));
    });

    test('will throw if predicate is not defined', () => {
        expect(() => filter([1, 2, 3])).toThrow(Error('predicate is not defined'));
    });

});

describe('isArrayLikeObject', () => {
    test('per example, returns true for an array', () => {
        expect(isArrayLikeObject([1, 2, 3])).toBe(true);
    });
    test('returns true for an array', () => {
        expect(isArrayLikeObject([1, 2, 3])).toBe(true);
    });

    test('returns false for an object with a length property if object is not an Array', () => {
        expect(isArrayLikeObject({ length: 3 })).toBe(false);
    });

    test('returns false for an object without a length property', () => {
        expect(isArrayLikeObject({ a: 1, b: 2 })).toBe(false);
    });

    test('returns false for a string', () => {
        expect(isArrayLikeObject('hello')).toBe(false);
    });

    test('returns false for a function', () => {
        expect(isArrayLikeObject(Function)).toBe(false);
    });

    test('returns false for null', () => {
        expect(isArrayLikeObject(null)).toBe(false);
    });

    test('returns false for undefined', () => {
        expect(isArrayLikeObject(undefined)).toBe(false);
    });

    test('returns false for arguments object', () => {
        expect(isArrayLikeObject(arguments)).toBe(false);
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
