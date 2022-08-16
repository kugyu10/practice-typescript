// 非同期関数
function fetchFromServer(id: string): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true })
    }, 100)
  })
}

//async function
async function asyncFunc(): Promise<string> {
  const result = await fetchFromServer('111')
  return `resultは： ${result.success}`
}

//await構文を使うには
;(async () => {
  const result = await asyncFunc()
  console.log(result)
})()

//Promiseとして扱う際は以下のように記述します
asyncFunc().then((result) => console.log(result))
