//関数定義with型指定
function sayGoodMorning(name: String): String {
  return `おはようございます、${name}さん`
}

console.log(sayGoodMorning('kugyu10'))

//オプショナル引数
function sayGoodMorning2(name: String, honorficTitle?: String): String {
  if (honorficTitle == undefined) {
    honorficTitle = ''
  }
  return `おはようございます、${name}${honorficTitle}！`
}
console.log(sayGoodMorning2('プロデューサー'))
console.log(sayGoodMorning2('トレーナー', 'ちゃん'))

//デフォルト指定
function greeting(
  greetingWord: String = 'おはようございます',
  name: String,
  honorficTitle?: String
) {
  return `${greetingWord}、${name}${honorficTitle}！`
}
console.log(greeting('トレーナー', 'さん'))
console.log(greeting('こんばんは', 'プロデューサー', ''))

//引数にも関数を指定できる
function genSongInfo(songs: string): string[] {
  return songs.split(',')
}

function getSongs(songInfo: (x: string) => string[]): string {
  return (
    songInfo('ティアドロップス,キズナミュージック♪,イニシャル')[0] + ' is 最高.'
  )
}

console.log(getSongs(genSongInfo)) //'ティアドロップスis 最高.'
