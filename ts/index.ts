import { Car } from './Car'

class ValueHolder<Type> {
    value: Type | undefined;
}

const myCar = new Car('Red', 2010);
myCar.drive();

console.log(myCar.year + ' ' + myCar.color);

const numberHolder = new ValueHolder<number>
numberHolder.value = 10;
console.log('Number holder: ' + numberHolder.value);

const stringHolder = new ValueHolder<string>
stringHolder.value = 'Hello';
console.log('String holder: ' + stringHolder.value);