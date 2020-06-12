'use strict';

const Note = require('../lib/notes');
const supergoose = require('cf-supergoose');


beforeAll(() => {
  supergoose.startDB();
})

afterAll(() => {
  supergoose.stopDB();
})

jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');

//assertions 
describe('Testing the notes module', () => {
  it('should show proof of life using console log function', () => {
    const testNote = new Note({action: 'add', payload: 'happy test'});
    // valid command and note data shows console log output
    expect(testNote.action).toBe('add');
    expect(testNote.payload).toBe('happy test');
  });

  it('should return an object with an id', (done) => {
    const testNote2 = new Note({action: 'add', payload: 'note that gets an id'});
    testNote2.execute()
      .then(() => {
        expect(testNote2);
        // console.log('from the test', testNote2);
        done();
      });
  });

  // it('should return that the object no longer exists at indicated id', (done) => {
  //   const testNote3 = new Note({action: 'add', payload: 'delete me'});
  //   testNote3.execute()
  //     .then(() => {
  //       testNote3.delete()
  //         .then(() => {
  //           expect(testNote3.action);
  //           done();
  //         })
  //     })
  //   });
  });


// TODO: no command entered gets nothing logged in console 
// check the jest docs 
