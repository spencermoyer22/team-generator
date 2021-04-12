const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('created Intern object', () => {
    const intern = new Intern('Spencer', 1, 'email@email.com', 'Arizona');
    expect(intern.name).toBe('Spencer');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('email@email.com');
    expect(intern.school).toBe('Arizona');
});

test('gets intern name', () => {
    const intern = new Intern('Spencer', 1, 'email@email.com', 'Arizona');
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test('gest intern id', () => {
    const intern = new Intern('Spencer', 1, 'email@email.com', 'Arizona');
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test('gets intern email', () => {
    const intern = new Intern('Spencer', 1, 'email@email.com', 'Arizona');
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('gets intern role', () => {
    const intern = new Intern('Spencer', 1, 'email@email.com', 'Arizona');
    expect(intern.getRole()).toBe('Intern');
});

test('gets intern school', () => {
    const intern = new Intern('Spencer', 1, 'email@email.com', 'Arizona');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});