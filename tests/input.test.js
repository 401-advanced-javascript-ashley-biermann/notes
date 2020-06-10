'use strict';

const minimist = require('minimist');
const Input = require('../lib/input');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    action: 'add',
    payload: 'check out my sweet note from the tests!',
  }
});

describe('Testing the Input module', () => {
  it('should return an object with keys of action and payload', () => {
    let options = new Input;
    expect(options.action).toBe('add');
    expect(options.payload).toBe('check out my sweet note from the tests!');
  });
});
