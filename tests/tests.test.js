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
import { template } from '@babel/core';
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

    test('returns NaN and throws error when both arguments are Infinity or -Infinity', () => {
        expect(add(Infinity, Infinity)).toBeNaN();
        expect(add(-Infinity, -Infinity)).toBeNaN();
        expect(add(Infinity, Infinity)).toThrow(Error('Invalid argument "Infinity"'));
    });

    test('returns NaN and throws error when one of the arguments is Boolean', () => {
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

    // Positive tests
    test('per example, rounds up to nearest integer', () => {
        expect(ceil(4.006)).toBe(5);
    });

    test('per example, rounds up to two decimals', () => {
        expect(ceil(6.004, 2)).toBe(6.01);
    });

    test('per example, rounds up to -2 decimals', () => {
        expect(ceil(6040, -2)).toBe(6100);
    });

    test('rounds up to nearest negative integer', () => {
        expect(ceil(-4.006)).toBe(-4);
    });

    test('returns same number when already an integer', () => {
        expect(ceil(5)).toBe(5);
    });

    test('returns same number when already an integer with decimals', () => {
        expect(ceil(5.0)).toBe(5);
    });

    test('rounds up a very small  or large number', () => {
        expect(ceil(0.00000000000000000000000001)).toBe(1);
        expect(ceil(100000000000000000000000000.1)).toBe(100000000000000000000000001);
    });

    // Negative tests

    test('throws error when number is not a number', () => {
        expect(ceil('hello')).toThrow(Error('number is not a number'));
    });

    test('throws error when precision is not a number', () => {
        expect(ceil(4.006, 'hello')).toThrow(Error('precision is not a number'));
    });

    test('throws error when number is null', () => {
        expect(ceil(null)).toThrow(Error('number is not a number'));
    });

    test('throws error when precision is null', () => { 
        expect(ceil(4.006, null)).toThrow(Error('precision is not a number'));
    });

    test('throws error when number is undefined', () => {
        expect(ceil(undefined)).toThrow(Error('number is not a number'));
    });

    test('throws error when precision is undefined', () => {        
        expect(ceil(4.006, undefined)).toThrow(Error('precision is not a number'));
    });

    test('throws error when no arguments are passed', () => {
        expect(ceil()).toThrow(Error('number is not defined'));
    });

    test('throws error when only precision is passed', () => {
        expect(ceil(undefined, 2)).toThrow(Error('number is not defined'));
    });

    test('throws error when number is Infinity', () => {
        expect(ceil(Infinity)).toThrow(Error('number is not a number'));
    });

    test('throws error when precision is Infinity', () => {
        expect(ceil(4.006, Infinity)).toThrow(Error('precision is not a number'));
    });
});

describe('difference', () => {

    // Positive tests

    test('per example, returns difference between two arrays of integers', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });

    test('returns empty array when no difference', () => {
        expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
    });

    test('returns difference between two arrays of strings', () => {
        expect(difference(['a', 'b', 'c'], ['a', 'b', 'd'])).toEqual(['c']);
    });

    test('returns difference between two arrays of objects', () => {
        expect(difference([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }])).toEqual([{ 'x': 2 }]);
    });

    test('returns difference between two arrays of mixed types', () => {
        expect(difference([1, 'a', true], [1, 'b', false])).toEqual(['a', true]);
    });

    // Negative tests

    test('throws error when first argument is not an array', () => {
        expect(difference(1, [1, 2])).toThrow(Error('first argument is not an array'));
    });

    test('throws error when second argument is not an array', () => {
        expect(difference([1, 2], 1)).toThrow(Error('second argument is not an array'));
    });

    test('throws error when first argument is null', () => {
        expect(difference(null, [1, 2])).toThrow(Error('first argument is not an array'));
    });

    test('throws error when second argument is null', () => {
        expect(difference([1, 2], null)).toThrow(Error('second argument is not an array'));
    });

    test('throws error when first argument is undefined', () => {
        expect(difference(undefined, [1, 2])).toThrow(Error('first argument is not an array'));
    });

    test('throws error when second argument is undefined', () => {
        expect(difference([1, 2], undefined)).toThrow(Error('second argument is not an array'));
    });

    test('throws error when no arguments are passed', () => {
        expect(difference()).toThrow(Error('first argument is not defined'));
    });

    test('throws error when only first argument is passed', () => {
        expect(difference([1, 2])).toThrow(Error('second argument is not defined'));
    });

    test('throws error when first argument is an empty object', () => {
        expect(difference({}, [1, 2])).toThrow(Error('first argument is not an array'));
    });

    test('throws error when second argument is an empty object', () => {
        expect(difference([1, 2], {})).toThrow(Error('second argument is not an array'));
    });

    test('throws error when first argument is an empty string', () => {
        expect(difference('', [1, 2])).toThrow(Error('first argument is not an array'));
    });

    test('throws error when second argument is an empty string', () => {
        expect(difference([1, 2], '')).toThrow(Error('second argument is not an array'));
    });

    test('throws error when first argument is a function', () => {
        expect(difference(Function, [1, 2])).toThrow(Error('first argument is not an array'));
    });

    test('throws error when second argument is a function', () => {
        expect(difference([1, 2], Function)).toThrow(Error('second argument is not an array'));
    });

    test('throws error when both arguments are not array-like objects', () => {
        expect(difference(1, 1)).toThrow(Error('first argument is not an array'));
    });
});

describe('toInteger', () => {

    // Positive tests

    test('per example, converts string to integer', () => {
        expect(toInteger('3.2')).toBe(3);
    });

    test('per example, converts Number.MIN_VALUE to 0', () => {
        expect(toInteger(Number.MIN_VALUE)).toBe(0);
    });

    test('per example, converts 3.2 to 3', () => {
        expect(toInteger(3.2)).toBe(3);
    });

    test('per example, converts Infinity to 1.7976931348623157e+308', () => {
        expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
        expect(toInteger(-Infinity)).toBe(-1.7976931348623157e+308);
    });

    test('converts negative number with decimals to negative integer', () => {
        expect(toInteger(-3.2)).toBe(-3);
    });

    test('converts negative number without decimals to negative integer', () => {
        expect(toInteger(-3)).toBe(-3);
    });

    // Negative tests

    test('returns NaN when input is not a number', () => {
        expect(toInteger('abc')).toBe(NaN);
        expect(toInteger(null)).toBe(NaN);
        expect(toInteger(undefined)).toBe(NaN);
        expect(toInteger({})).toBe(NaN);
        expect(toInteger([])).toBe(NaN);
        expect(toInteger(true)).toBe(NaN);
        expect(toInteger(false)).toBe(NaN);
    });

    test('throws error when input is an empty string', () => {
        expect(toInteger('')).toThrow(Error('input is an empty string'));
    });

    test('throws error when input is a string with non-numeric characters', () => {
        expect(toInteger('abc123')).toThrow(Error('input is a string with non-numeric characters'));
        expect(toInteger('12abc34')).toThrow(Error('input is a string with non-numeric characters'));
    });


});

describe('upperFirst', () => {

    // Positive tests

    test('per example, capitalizes first letter of string', () => {
        expect(upperFirst('fred')).toBe('Fred');
    });

    test('per example, returns all caps when string is all caps', () => {
        expect(upperFirst('FRED')).toBe('FRED');
    });

    test('returns empty string when input is empty', () => {
        expect(upperFirst('')).toBe('');
    });

    test('returns same string when first character is already capitalized', () => {
        expect(upperFirst('Fred')).toBe('Fred');
    });

    // Negative tests

    test('throws error when input is not a string', () => {
        expect(upperFirst(123)).toThrow(Error('input is not a string'));
        expect(upperFirst(null)).toThrow(Error('input is not a string'));
        expect(upperFirst(undefined)).toThrow(Error('input is not a string'));
        expect(upperFirst({})).toThrow(Error('input is not a string'));
        expect(upperFirst([])).toThrow(Error('input is not a string'));
        expect(upperFirst(true)).toThrow(Error('input is not a string'));
        expect(upperFirst(false)).toThrow(Error('input is not a string'));
    });

    test('throws error when first character is not a letter', () => {
        expect(upperFirst('123abc')).toThrow(Error('first character is not alphabetic'));
    });

});

describe('countBy', () => {
    // countBy() has erroneous baseAssignValue(), value should be 1 instead of 0

    // Positive tests
    test('per example, counts number of active users', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'betty', 'active': true },
        { 'user': 'fred', 'active': false }
      ];
      expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
      
    });

    test('counts number of users with the same name', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
        ];
    expect(countBy(users, value => value.user)).toEqual({ 'barney': 2, 'fred': 1 });
    });

    test('counts even numbers from 1-4', () => {
        expect(countBy([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual({ 'true': 2, 'false': 2 });
    });

    test('whole collection returns false', () => {
        expect(countBy([1, 3, 5], (n) => n % 2 === 0)).toEqual({ 'false': 3 });
    });

    test('whole collection returns true', () => {
        expect(countBy([2, 4, 6], (n) => n % 2 === 0)).toEqual({ 'true': 3 });
    });

    test('returns empty object when collection is empty', () => {
        expect(countBy([], (n) => n % 2 === 0)).toEqual({});
    });

    // Negative tests

    test('throws error when collection is not an array or object', () => {
        expect(countBy(3, (n) => n % 2 === 0)).toThrow(Error('collection is not an array or object'));
    });

    test('throws error when iteratee is not a function', () => {
        expect(countBy([1, 2, 3], 'hello')).toThrow(Error('iteratee is not a function'));
    });

    test('throws error when iteratee is not defined', () => {
        expect(countBy([1, 2, 3])).toThrow(Error('iteratee is not defined'));
    });

    test('throws error when collection is null', () => {
        expect(countBy(null, (n) => n % 2 === 0)).toThrow(Error('collection is not an array or object'));
    });

    test('throws error when iteratee is null', () => {
        expect(countBy([1, 2, 3], null)).toThrow(Error('iteratee is not a function'));
    });

    test('throws error when no arguments are passed', () => {
        expect(countBy()).toThrow(Error('collection is not defined'));
    });
});
