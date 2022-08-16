let thisWeekTrend: 'Visual' | 'Dance' | 'Vocal'
thisWeekTrend = 'Visual' //OK
//thisWeekTrend = 'Passion' //NG

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1 //三項演算子が二重
}

console.log(compare('hoge', 'fuga'))
