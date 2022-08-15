const user1: {firstName: string, lastName?: string, age:number} = {
  firstName: '伊織' ,
  lastName: '水瀬' ,
  age: 15 ,
}

const user2: {firstName: string, lastName?: string, age:number} = {
  firstName: 'ジュリア' ,
  age: 16 ,
}

console.log(user1.lastName + user1.firstName)
console.log(user1.age)
console.log(user2.firstName)
console.log(user2.age)
