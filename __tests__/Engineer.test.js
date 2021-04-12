const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer ('Spencer', 1, 'email@email.com', 'username');
    expect(engineer.name).toBe('Spencer');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('email@email.com');
    expect(engineer.github).toBe('username');
});

test('gets engineers name value', () => {
    const engineer = new Engineer ('Spencer', 1, 'email@email.com', 'username');
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test('gets engineers id', () => {
    const engineer = new Engineer ('Spencer', 1, 'email@email.com', 'username');
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test('gets engineers email', () => {
    const engineer = new Engineer ('Spencer', 1, 'email@email.com', 'username');
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('gets engineers role', () => {
    const engineer = new Engineer ('Spencer', 1, 'email@email.com', 'username');
    expect(engineer.getRole()).toBe('Engineer');
});

test('gets engineers Github', () => {
    const engineer = new Engineer ('Spencer', 1, 'email@email.com', 'username');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});