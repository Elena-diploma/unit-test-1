import { Person, healthStatus } from '../person';

const person1 = new Person('Маг', 90);
const person2 = new Person('Стрелок', 45);
const person3 = new Person('Воин', 10);

test('Создание нового объекта персонажа', () => {
    expect(person1).toEqual({name: 'Маг', health: 90});
});

test.each([
 [healthStatus(person1), 'healthy'],
 [healthStatus(person2), 'wounded'],
 [healthStatus(person3), 'critical'],
 [healthStatus('не объект'), 'error'],
])('Проверка уровня жизни', (healthStatus, status) => {
    expect(healthStatus).toEqual(status);
})
