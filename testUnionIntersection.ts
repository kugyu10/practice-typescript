//Union
function printId(id: number | string) {
  console.log(id)
}

printId(1)
printId('2')

type EmailAddress = {
  name: string
  domain: string
}

type User = {
  name: string
  userId: number
}

//Union
type UserOrEmailAddress = User | EmailAddress
//Intersection
type UserAndEmailAddress = User & EmailAddress

const user1: UserOrEmailAddress = {
  name: 'haruka',
  domain: 'example.com',
}

const user2: UserOrEmailAddress = {
  name: 'chihaya',
  userId: 72,
}

const user3: UserAndEmailAddress = {
  name: 'miki',
  userId: 86,
  domain: 'example.com',
}

console.log(user1)
console.log(user2)
console.log(user3)
