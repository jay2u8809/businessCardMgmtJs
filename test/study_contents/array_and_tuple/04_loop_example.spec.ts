import {isArrayObject} from "../../../src/study_contents/array_and_tuple/arrayExamples";
import {splitStr} from "../../../src/study_contents/array_and_tuple/arrayExamples";
import {joinStr} from "../../../src/study_contents/array_and_tuple/arrayExamples";
import {arrayLen, arrIsEmpty} from "../../../src/study_contents/array_and_tuple/arrayExamples";
import {foldEx} from "../../../src/study_contents/array_and_tuple/arrayExamples";
import {range} from "rxjs";

test("Test isArray", () => {
    let array: number[] = new Array();
    array.push(1);
    array.push(2);
    array.push(3);
    console.log(array);
    expect(isArrayObject(array)).toBeTruthy();

    let obj = {name: "test1", age: 32};
    expect(isArrayObject(obj)).toBeFalsy();
});


test("Test str split", () => {
    const str = "Hello World";
    console.log(`Number 1 : ${splitStr(str)}, Number2 : ${splitStr("H_e_l_l_o_W_o_r_l_d", "_")}`);
});


test("Test str Join", () => {
    const str = ['h', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
    console.log(`Number 1 : ${joinStr(str)}, Number2 : ${joinStr(str, "_")}`);
});


test("Test Array Index", () => {
    const numbers: number[] = [1, 2, 3, 4, 5];

    for(let i = 0; i < numbers.length; i++) {
        const item: number = numbers[i];
        console.log(`${item}`);
    }
});


test("Test Array Destructuring", () => {
    let arr: number[] = [1, 2, 3, 4, 5];
    let [first, second, ...rest] = arr;
    console.log(first, second, rest);
});


test("Test Array For in", () => {
    const names: string[] = ['Jack', 'Jane', 'Steve'];
    for (const index in names) {
        const name: string = names[index];
        console.log(`${name}`);
    }
});
test("Test Object For in", () => {
    const jack: object = {name: 'Jack', age: 21};
    for (const property in jack) {
        console.log(`${property} : ${jack[property]}`);
    }
});


test("Test Array For of", () => {
    const names: string[] = ['Jack', 'Jane', 'Steve'];
    for (const item of names) {
        const name: string = item;
        console.log(`${name}`);
    }
});


test("Test Generic Programming", () => {
    let numArr: number[] = [1, 2, 3];
    let strArr: string[] = ["Hello", "World"];

    type IPerson = {name: string, age?: number};
    let personArr: IPerson[] = [{name: "Jack"}, {name: "Jane", age: 32}];

    console.log(`${arrayLen<number>(numArr)}, ${arrayLen<string>(strArr)}, ${arrayLen(personArr)}`);
    console.log(`${arrIsEmpty([])}, ${arrIsEmpty<number>([1])}`);
});


test("Test Fold", () => {
    let numbers: number[] = [1, 2, 3, 4, 5, 6];
    let result = foldEx(numbers, (result, val) => (result + val), 0);
    console.log(`${result}`);
});


test("Test ...Array", () => {
    let numbers: number[] = [1, 2, 3, 4, 5, 6];
    let result: number[] = [...numbers, 100];
    console.log(`${result}`);
});


test("Test map method", () => {

    const multiply = (result, val) => result * val;

    let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let tempResult = numbers
        .filter((f, i) => f % 2 != 0)
        .map((f,i) => f * f)
        .reduce(multiply, 1);
    let result = Math.round(Math.sqrt(tempResult));

    console.log(`${result}`);
});

