/* 
모나드는 컨텍스트 레벨을 값 레벨로 끌어들여 추상화한 컨테이너박스이다.
개념적으로는 카테고리 이론에서 사용되는 언어로 모나드 규칙에 맞춰 설계된 클래스를 지칭한다.
이 모나드를 이용해 로직 구성의 유연성을 높이고 안전한 함수 합성을 할 수 있다.

함수형 프로그래밍에서는 참조 투명성이 이루어져야 하며 이를 위해 모나드를 사용한다.

참조 투명성: 입력과 출력이 동일하게 일대일 매칭되는 것
*/

/* Promise를 이용한 안전한 함수 합성*/
const g = JSON.parse;
const f = (k) => k.temp;
const fg = (x) => new Promise((resolve, reject) => resolve(x)).then(g).then(f);
const log = (x) => console.log(x);

fg('{"temp":36.5}')
  .catch((_) => "JSON PARSE is not working")
  .then(log);
