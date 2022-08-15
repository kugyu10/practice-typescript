//sayHello.ts
function sayHello (firstName: string) {
  console.log("Hello, " + firstName)
}
let fname :string = "kugyu10"
let isDone :boolean = !!fname
if (isDone){
  sayHello ( fname )
}