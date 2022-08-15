interface Idol {
  name: string
  age?: {
    age: number
    note: string    
  }
  birthday: string
}


const uzuki: Idol = {name: '島村卯月', age: {age:17, note: ''}, birthday:'0424'}

console.log(uzuki.name)
console.log(uzuki.age?.age)
console.log(uzuki.birthday)

const nana: Idol = {name: '安部菜々', birthday: '0515'}
console.log(nana.name)
console.log(nana.age?.age) //undefinedと表示される
console.log(nana.birthday)
