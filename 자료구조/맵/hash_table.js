class HashTable {
  constructor() {
    this.storageLimit = 10
    this.table = new Array(this.storageLimit)
  }

  // data -> index
  getHash(data) {
    let hash = 0
    for (let i = 0; i < data.length; i++) {
      // charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수
      hash += data.charCodeAt(i)
    }
    console.log(hash)
    return hash % this.storageLimit
  }

  // data 와 value를 넣으면, 해당 data에 대한 key를 찾아서, 해당 key에 대응하는 해쉬주소에 value를 저장
  add(data, value) {
    const index = this.getHash(data)// 유니코드로 해쉬화 시킨 데이터를 index로 활용 (hashNum % 10 = 0~9)
    if (this.table[index]) { // 만약 인덱스에 데이터가 존재하고 있다면?
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === data) { //키값이 같은게 이미 존재한다면?
          this.table[index][i][1] = value //value값만 변경하고 종료.
          return
        }
      }
      this.table[index].push([data, value])// 그게 아니라 존재는 하지만 키값이 다르다면 같은 index의 새로운 데이터를 저장.
    } else {
      this.table[index] = [[data, value]] // 인덱스에 존재하지않는다면 그 인덱스에 바로 할당. 이때 배열이 2중으로 중첩시켜야 push를 해줄수 있음.
    }
  }

  get(data) {
    const index = this.getHash(data) // 유니코드로 해쉬화 시킨 데이터를 index로 활용 (hashNum % 10 = 0~9)
    if (this.table[index]) { //만약 키값에 해당하는 index에 데이터가 존재한다면?
      for (let i = 0; i < this.table[index].length; i++) { // 키와 밸류를 비교하기위한 for문
        if (this.table[index][i][0] === data) {//내가 찾고자하는 키와 같다면
          return this.table[index][i][1] //value값을 바로 리턴하고 종료.
        }
      }
      return null // 그게 아니라면 null 리턴하고 종료
    } else {
      return null // 찾고자하는 키의 index값에 데이터가 존재하지 않는다면 null 리턴하고 종료
    }
  }

  remove(data) { 
    const index = this.getHash(data)// 유니코드로 해쉬화 시킨 데이터를 index로 활용 (hashNum % 10 = 0~9)
    //만약 index의 길이가 1이고 키가 같다면 바로 삭제.
    if (this.table[index].length === 1 && this.table[index][0][0] === data) {
      delete this.table[index];
    } else {//그게 아니라면?
      //반복문을 통해 같은 키값을 찾아낸다.
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === data) {//찾았다면
          this.table[index].splice(i, 1) //splice함수를 통해 원본을 수정.
        }
      }
    }
  }
}

let hash = new HashTable();

hash.add("evad", "111222333")
hash.add("dave", "222333444")
hash.add("stella", "333444555")
hash.add("mike", "444555666")
console.log(hash.table)
console.log(hash.get("evad"))