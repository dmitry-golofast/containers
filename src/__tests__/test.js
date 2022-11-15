import Team from '../index';

test(('function iterator'), () => {
    const zomb = {
        name: 'zombie',
        type: 'zombie',
        health: 10,
        level: 1,
        attack: 80,
        defence: 40,
    };
    const char = {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
    };
    const end = { value: undefined, done: false };
    const persons = [zomb, char];
    const team = new Team(persons).iterator();
    expect(team.next().value).toEqual(zomb);
    expect(team.next().value).toEqual(char);
    expect(team.next()).toEqual(end);
});