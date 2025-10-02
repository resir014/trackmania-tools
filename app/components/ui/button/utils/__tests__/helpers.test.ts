import { describe, expect, test } from 'vitest';
import {
  buttonBlockStyles,
  buttonIconClasses,
  outlineButtonColors,
  primaryButtonColors,
  secondaryButtonColors,
} from '../helpers';
import { type ButtonColors, type ButtonIconPositions, type ButtonSizes } from '../types';

describe('buttonIconClasses', () => {
  test.each`
    size    | expected
    ${'xs'} | ${['-ml-0.5 mr-2', 'h-4 w-4']}
    ${'sm'} | ${['-ml-0.5 mr-2', 'h-4 w-4']}
    ${'md'} | ${['-ml-1 mr-2', 'h-5 w-5']}
    ${'lg'} | ${['-ml-1 mr-3', 'h-5 w-5']}
    ${'xl'} | ${['-ml-1 mr-3', 'h-5 w-5']}
  `('return $expected classes when size is $size', ({ size, expected }) => {
    expect(buttonIconClasses(size as ButtonSizes)).toEqual(expected);
  });
});

describe('buttonBlockStyles', () => {
  test.each`
    iconPosition | expected
    ${'left'}    | ${['inline-flex', 'flex-row']}
    ${'right'}   | ${['inline-flex', 'flex-row-reverse']}
  `('returns $expected classes when iconPosition is $iconPosition', ({ iconPosition, expected }) => {
    expect(buttonBlockStyles(false, iconPosition as ButtonIconPositions)).toEqual(expected);
  });
});

describe('primaryButtonColors', () => {
  test.each`
    color           | expected
    ${'blue'}       | ${'text-white bg-blue-600 hover:bg-blue-700'}
    ${'gray'}       | ${'text-white bg-gray-600 hover:bg-gray-700'}
    ${'green'}      | ${'text-white bg-green-600 hover:bg-green-700'}
    ${'indigo'}     | ${'text-white bg-indigo-600 hover:bg-indigo-700'}
    ${'light-blue'} | ${'text-white bg-light-blue-400 hover:bg-light-blue-500'}
    ${'pink'}       | ${'text-white bg-pink-600 hover:bg-pink-700'}
    ${'purple'}     | ${'text-white bg-purple-600 hover:bg-purple-700'}
    ${'red'}        | ${'text-white bg-red-600 hover:bg-red-700'}
    ${'yellow'}     | ${'text-white bg-yellow-600 hover:bg-yellow-700'}
  `('returns $expected classes when color is $color', ({ color, expected }) => {
    expect(primaryButtonColors(color as ButtonColors)).toEqual(expected);
  });

  test(`returns gray when color is not defined`, () => {
    expect(primaryButtonColors()).toBe('text-white bg-gray-600 hover:bg-gray-700');
  });
});

describe('secondaryButtonColors', () => {
  test.each`
    color           | expected
    ${'blue'}       | ${'text-blue-200 bg-blue-900 hover:bg-blue-800'}
    ${'gray'}       | ${'text-gray-200 bg-gray-900 hover:bg-gray-800'}
    ${'green'}      | ${'text-green-200 bg-green-900 hover:bg-green-800'}
    ${'indigo'}     | ${'text-indigo-200 bg-indigo-900 hover:bg-indigo-800'}
    ${'light-blue'} | ${'text-light-blue-200 bg-light-blue-900 hover:bg-light-blue-800'}
    ${'pink'}       | ${'text-pink-200 bg-pink-900 hover:bg-pink-800'}
    ${'purple'}     | ${'text-purple-200 bg-purple-900 hover:bg-purple-800'}
    ${'red'}        | ${'text-red-200 bg-red-900 hover:bg-red-800'}
    ${'yellow'}     | ${'text-yellow-200 bg-yellow-900 hover:bg-yellow-800'}
  `('returns $expected classes when color is $color', ({ color, expected }) => {
    expect(secondaryButtonColors(color as ButtonColors)).toEqual(expected);
  });

  test(`returns gray when color is not defined`, () => {
    expect(secondaryButtonColors()).toBe('text-gray-200 bg-gray-900 hover:bg-gray-800');
  });
});

describe('outlineButtonColors', () => {
  test.each`
    color           | expected
    ${'blue'}       | ${'text-blue-500 border-blue-500 hover:bg-blue-900'}
    ${'gray'}       | ${'text-gray-200 border-gray-200 hover:bg-gray-800'}
    ${'green'}      | ${'text-green-500 border-green-500 hover:bg-green-900'}
    ${'indigo'}     | ${'text-indigo-500 border-indigo-500 hover:bg-indigo-900'}
    ${'light-blue'} | ${'text-light-blue-400 border-light-blue-400 hover:bg-light-blue-900'}
    ${'pink'}       | ${'text-pink-500 border-pink-500 hover:bg-pink-900'}
    ${'purple'}     | ${'text-purple-500 border-purple-500 hover:bg-purple-900'}
    ${'red'}        | ${'text-red-500 border-red-500 hover:bg-red-900'}
    ${'yellow'}     | ${'text-yellow-500 border-yellow-500 hover:bg-yellow-900'}
  `('returns $expected classes when color is $color', ({ color, expected }) => {
    expect(outlineButtonColors(color as ButtonColors)).toEqual(expected);
  });

  test(`returns gray when color is not defined`, () => {
    expect(outlineButtonColors()).toBe('text-gray-700 border-gray-700 hover:bg-gray-900');
  });
});
