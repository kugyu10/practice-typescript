class Queue<T> {
  private array: T[] = []

  public push(item: T) {
    this.array.push(item)
  }

  public pop(): T | undefined {
    return this.array.shift()
  }
}

const queue = new Queue<number>()
queue.push(765)
queue.push(346)
queue.push(315)
queue.push(283)
console.log(queue.pop())
//queue.pop('876') //コンパイルエラーとなる
