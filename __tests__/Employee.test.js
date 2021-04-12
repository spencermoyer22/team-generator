const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Creates Employee Object', () => {
    const employee = new Employee('Spencer', 1, 'email@email.com');
    expect(employee.name).toBe('Spencer');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('email@email.com');
});

test("gets employee's name value", () => {
    const employee = new Employee('Spencer', 1, 'email@email.com');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets employee's id", () => {
    const employee = new Employee('Spencer', 1, 'email@email.com');
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets employee's email", () => {
    const employee = new Employee('Spencer', 1, 'email@email.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email)); 
});

test("get employee's role", () => {
    const employee = new Employee('Spencer', 1, 'email@email.com');
    expect(employee.getRole()).toEqual('Employee');
});