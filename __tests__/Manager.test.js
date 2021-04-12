const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Spencer', 1, 'email@email.com', 105);
    expect(manager.name).toBe('Spencer');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('email@email.com');
    expect(manager.officeNumber).toBe(105);
});

test('gets manager name', () => {
    const manager = new Manager('Spencer', 1, 'email@email.com', 105);
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test('gets maanger id', () => {
    const manager = new Manager('Spencer', 1, 'email@email.com', 105);
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test('gets manager email', () => {
    const manager = new Manager('Spencer', 1, 'email@email.com', 105);
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('gets manager role', () => {
    const manager = new Manager('Spencer', 1, 'email@email.com', 105);
    expect(manager.getRole()).toEqual('Manager');
});