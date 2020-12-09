#### การเขียนcode  
#### 1.10 แบบฝึกหัดแก้ไขการเขียนโค้ดต่อไปนี้  
```
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}
let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
}
else
{
  alert(pow(x,n))
}
```
#### จัดรูปแบบ
```
function pow(x, n ){
  let result = 1;
  for ( let i = 0; i < n; i++ ){
    result *= x;
  }
  return result;
}

let x = prompt("x?", '')
let n = prompt("n?", '')

if ( n <= 0 ){
  alert( `Power ${n} is not supported, 
          please enter an integer number 
          greater than zero`);
} else { 
  alert( pow(x, n) )
```  
---  
### 4  Object Javascript
#### 4.1.  Object คืออะไร - ( สำคัญที่สุดใน JavaScript ) ใน JavaScript จะมีข้อมูลทั้งหมด 7 ประเภท  
1. string,  
2. boolean,  
3. bigint,  
4. number, 
5. null,  
6. undefined  
7. Object ****
#### ซึ่ง 6 ประเภทแรกจะเรียกว่า primitive  
#### 4.6.  การสร้าง Object - แบบฝึกหัด ให้สร้าง Object แบบ Object Iteral โดยให้กำหนดตัวแปรชื่อ human โดยมี Properties ทั้ง 5 อย่าง  
* ชื่อของผู้เรียน เป็น String
* อายุของผู้เรียนเป็น number
* บ้านของตัวเองเป็น String
* โสดหรือไม่โสดเป็น boolean
* คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)  
```
let human = {
  name: 'Dean Carter',
  age: 32,
  address: 'San Jose, CA US',
  isSingle: true,
  clever: 2.33
}
```  
#### 4.7 Computed Properties  
#### 1. แบบฝึกหัดให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop และนำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น console.log() object นั้นออกมา  
```
let obj = {};
let key = prompt('Enter Key: ');

while (let key !== 'stop') {

  let value = prompt('Enter Value:');
  
  obj[key] = value;
  
  key = prompt('Enter Key: ');

}
```  
#### 4.7.  Computed Properties 
#### 2. แบบฝึกหัดให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number) โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย
```
let obj = {};
let key = prompt('Enter Key: ');

while ( key !== 'stop'){
  
  let value = prompt('Enter Value: ');
  
  if( key > 1) value += 's';
  
  obj[key] = value;
  
  key = prompt('Enter key: ');

}
```  
#### 4.18.1. แบบฝึกหัดให้ทำตามคำสั่งต่อไปนี้ สร้าง Object เปล่าขึ้นมา
* เพิ่ม properties name เข้าไปและให้ value เป็น Dean
* เพิ่ม properties surname เข้าไปและให้ value เป็น Carter
* เปลี่ยน properties name เป็น “Boy”
* ลบ properties name ออกจาก Object  
##### เพิ่ม properties name เข้าไปและให้ value เป็น Dean  
##### เพิ่ม properties surname เข้าไปและให้ value เป็น Carter  
```  
let obj = {};
obj.name = 'Dean';
obj['surname'] = 'Carter';
```  
##### เปลี่ยน properties name เป็น “Boy”
```
obj.name = 'boy';
```
##### ลบ properties name ออกจาก Object  
```  
delete obj.name
```  
#### 4.18.2. แบบฝึกหัดให้เขียนฟังก์ชันชื่อ isEmpty(obj) โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false  
```
function isEmpty(obj){

  for (let key in obj){
    return false
  }
  return true
}

let obj1 = { name: 'Deane' }  
let obj2 = {}

isEmpty(obj1) // false 
isEmpty(obj2) // true  
```  
#### 4.18.3.การเขียนข้างล่างต่อไปนี้ Error  ไหม  
```  
const user = {
  name: "John"
};

// does it work?
user.name = "Pete";

//Ans: Yes, It's do. 
```  
#### 4.18.4. แบบฝึกหัดจงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด  
```  
function sum(obj){
  let toTal = 0
  for( let key in obj){
    toTal += obj[key]
  }
  return toTal
}

let salary = {
  "Black widow": 34442,
  Thor: 232,
  Hunk: 23095,
  "Iron man": 9934,
}
sum(salary) // 67703
```  
#### 4.18.5. แบบฝึกหัดจงเขียนฟังก์ชัน multiplyNumeric(obj, times) โดยถ้า properties นั้นมี value เป็น number ให้คุณ value นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร  
```  
// before the call

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
```
```
multiplyNumeric(menu, 2);
```
```
// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```
```  
let menu = {
    width: 200,
    heigth: 400,
    title: "My Title"
}

function multiplyNumeric(obj, times){
    for (let key in obj){        
      if(typeof obj[key] !== "number") continue;
        obj[key] *= times
    }
}

multiplyNumeric(menu, 4);
```  
#### 6. Methods ของ Object  
#### 6.6.1 การทำงานของ code ดังกล่าวจะได้อะไรออกมา  
```
let user = {
  name: "John",
  go: function() { alert(this.name) }
}

(user.go)()
```
#### output:
```
undefined
```  
#### 6.6.2 การทำงานของ code ดังกล่าวจะได้อะไรออกมา  
```
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?
```
#### output:
```
undefined
```  
#### 6.6.3 สร้าง object calculator จาก 3 methods นี้ read() ใช้ prompts สำหรับรับค่ามา 2 ค่าและเก็บเป็น object properties. sum() คืนค่าผลบวกของ 2 ค่านั้น.
mul() คืนค่าผลคูณของ 2 ค่านั้น.
```  
let calculator = {
    read(number1, number2){
        this.number1 = number1
        this.number2 = number2
    },
    mul: function(){
        return this.number1  * this.number2;
    },
    sum(){
        return this.number1 + this.number2;
    }
};
calculator.read(3,4)
alert( calculator.mul())
alert(calculator.sum())
```  
---
#### 7. Constructor กับ New
####  7.4. แบบฝึกหัด 
#### 1. สร้าง constructor function ที่ใช้สำหรับสร้าง Calculator โดยต้องมี 3 Methods น้ี  
* a. read(): รับค่าจาก propmt สองตัว
* b. sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว  
* c. mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว
 ```  
 function Calculator(){
    this.read =  function(){
        this.number1 = Number(prompt('Enter Number 1 : '));
        this.number2 = Number(prompt('Enter Number 2 : ')); 
    }
    this.sum = function(){
        return this.number1 + this.number2 
    }
    this.mul = function(){
        return this.number1 * this.number2
    }

}
let casio = new Calculator();
 ```  
 ```  
 // output
 casio.read();// 3 , 4  
 casio.sum(); // 7
 casio.mul(); // 12  
  ```
 ```
 ```
 ```
 ```
 ```


