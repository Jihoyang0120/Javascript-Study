/* 배열 중에서 특정 조건에 해당하는 요소를 찾을 때 사용된다. */

const condition = (e) => e.height >= 180;
const friends = [
  { name: "안철수", height: 173 },
  { name: "김철수", height: 175 },
  { name: "박철수", height: 180 },
  { name: "양철수", height: 190 },
];

const tallFriends = friends.find(condition);
console.log(tallFriends);
const tallFriendsIndex = friends.findIndex(condition);
console.log(tallFriendsIndex);

// 아무것도 뽑히지 않으면 find: return undefined findIndex: return -1

/* 배열 안에 어떠한 요소가 있는지 확인할 때 사용된다. */
const a = [1, 2, 3, 4, 5];
console.log(a.includes(3));

// 아무것도 뽑히지 않으면 return false
