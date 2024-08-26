import React, { ChangeEvent, useState } from 'react'

// 상태 (state):
// - 각각의 컴포넌트가 독립적으로 가지고 있는 데이터 저장 공간
// - 상태가 컴포넌트의 렌더링에 영향을 미침
// - 상태가 변경되면 컴포넌트가 리렌더링 됨

export default function StateComponent() {

  // state 선언 방법
  // - useState 훅 함수로 상태를 선언
  // - const [상태변수, 상태변경함수] = useState<상태변수타입>(초기값);
  // let count: number = 0;
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  // let counts: number[] = [];
  const [counts, setCounts] = useState<number[]>([]);

  const [comment, setComment] = useState<string>('');

  let comm = '';
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    comm = event.target.value;
    console.log(comm);
    setComment(comm);
  };

  const onIncrease = () => {

    // 상태 변수는 반드시 상태변경함수를 통해서 변경해야 리렌더링 됨
    // 상태 변경함수를 사용하여 상태를 변경한다고 바로 변경되지 않음
    // 함수가 끝나고 렌더링 되는 시점에 적용됨
    // 0
    // setCount(count + 1);
    // 0
    // setCount(count + 2);
    // 0
    // setCount(count + 3);

    // 상태 변경함수에 콜백함수를 전달하면 해당 콜백 함수는 누적되어 실행됨

    // 상태 count : 0
    // setCount(count => count + 1); // 콜백함수를 이용하면 6씩 증가

    // setCount(count => count + 2);
    // setCount(count => count + 3);

    // count ++;
    // console.log(count);

    // 상태 변경하는 작업이 한번에 여러번 실행된다면 임시변수 활용하여 사용할 수 있음

    // let tmp = 0;
    // tmp = count;
    // tmp += 1;
    // tmp += 2;
    // tmp += 3;
    // setCount(tmp);

    // 아래 코드는 setTotal에서 기존의 count 값을 사용하기 때문에
    // 동작이 한단계 전단계로 동작함
    // setCount(count + 1);
    // setTotal(total + count);

    // 임시변수를 사용하여 변경 결과 값을 미리 지정하고 사용하면
    // 위 코드의 문제를 해결할 수 있음
    const newCount = count + 1;
    setCount(newCount);
    setTotal(total + newCount);

    // 아래 코드는 배열에 요소를 추가했지만 
    // 실제 배열 주소가 바뀌지 않았기 때문에 변경을 인식 못함


    // counts.push(newCount);
    // setCounts(counts);
    // console.log(counts);

    // 타입이 배열 혹은 객체 형태인 상태는
    // 반드시 새로운 배열 혹은 객체를 생성하고 변경해야 인식함
    const newCounts = [...counts, newCount];
    setCounts(newCounts);

  };

  const onDecrese = () => {
    setCount(count - 1);
  }

  const onReset = () => {
    setCount(count - count);
    setTotal(total - total);
  }

  return (
    <div>
      <h1>{comm}</h1>
      <h1>{comment}</h1>
      {/* 만약에 input 으로 상태를 변경한다면 value로 그 상태를 지정해야 불일치가 발생하지 않음 */}
      <input value={comment} onChange={onChangeHandler} />
      <h1>{count}</h1>
      <h1>Total : {total}</h1>
      <h1>counts length: {counts.length} {counts}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onDecrese}>-</button>
    </div>
  )
}
