const Employee = require('../lib/employee');

describe ('Employee', () => {
  it('should creaate new employee', () => {
const employ = new Employee ("john", "11", "john@john", "engineer")

expect(employ.name).toEqual("john");

})
})
// expect(getName()).toEqual("")





// test('employee should include (name, id, email, role)', () => {
  
//   const employed = new Employee {'mike'; '111', 'mike@mike.com', 'Engineer'};
//    expect(getName()).toEqual('mike');

// });

// describe('fizzBuzz', () => {
//   it('should return the number if not a multiple of three or five', () => {
//     expect(fizzBuzz([1])).toBe('1');
//     expect(fizzBuzz([1, 2])).toBe('1, 2');
//   });