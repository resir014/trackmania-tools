import { describe, expect, test } from 'vitest';
import { alertColors, renderAlertIcon } from '../helpers';
import { type BaseColors } from '~/components/ui/types';

describe('alertColors', () => {
  test.each`
    color           | expected
    ${'blue'}       | ${'bg-blue-900 bg-opacity-50 text-blue-300'}
    ${'gray'}       | ${'bg-gray-900 bg-opacity-50 text-gray-300'}
    ${'green'}      | ${'bg-green-900 bg-opacity-50 text-green-300'}
    ${'indigo'}     | ${'bg-indigo-900 bg-opacity-50 text-indigo-300'}
    ${'light-blue'} | ${'bg-light-blue-900 bg-opacity-50 text-light-blue-300'}
    ${'pink'}       | ${'bg-pink-900 bg-opacity-50 text-pink-300'}
    ${'purple'}     | ${'bg-purple-900 bg-opacity-50 text-purple-300'}
    ${'red'}        | ${'bg-red-900 bg-opacity-50 text-red-300'}
    ${'yellow'}     | ${'bg-yellow-900 bg-opacity-50 text-yellow-300'}
  `('returns $expected classes when color is $color', ({ color, expected }) => {
    expect(alertColors(color as BaseColors)).toEqual(expected);
  });

  test(`returns yellow color when color is not defined`, () => {
    expect(alertColors()).toEqual('bg-yellow-900 bg-opacity-50 text-yellow-300');
  });
});

describe('renderAlertIcon', () => {
  test('return null if icon undefined', () => {
    expect(renderAlertIcon()).toEqual(null);
  });
});
