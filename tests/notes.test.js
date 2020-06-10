'use strict';

const notesMod = require('../lib/notes');

jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');

//assertions 
describe('Testing the notes module', () => {
  it('should show proof of life using console log function', () => {
    notesMod()
    //  1 no command gets nothing logged in console
    expect(console.log).toHaveBeenCalled();
    //  2 valid command and note data shows console log output
    expect(console.error).not.toHaveBeenCalled();
  });
});
