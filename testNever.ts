function testError(
  message: string
): never /*ここのnever省略すると、コンパイルエラー*/ {
  console.log('エラーをキャッチしました')
  throw new Error(message)
}

function foo(a: string | number | boolean): boolean {
  if (typeof a === 'number') {
    console.log('aはnumberです:' + a)
    return true
  } else if (typeof a === 'string') {
    console.log('aはstringです:' + a)
    return true
  } else {
    testError('ここへは到達しないはず')
  }
}

foo('bar')
foo(true) //neverって書いてあるけど普通に到達するし、投げられる。
