import React from 'react'
import './Example2.css';
import { title } from 'process';

interface Props {
  classtable: string;
  EmpN: string;
  name: string;
  status: boolean;
  title: string;
}

function AComponent({ classtable, EmpN, name, title }: Props) {

  return (
    <div className={classtable}>
      <div className='td'>{EmpN}</div>
      <div className='td'>{name}</div>
      <div className='td'>{title}</div>
    </div>
  );
}

function ProfileComponent({ classtable, EmpN, name, status }: Props) {

  const color = status ? 'red' : 'blue';

  return (
    <div className={classtable}>
      <div className='td'>{EmpN}</div>
      <div className='td'>{name}</div>
      <div className='td' style={{ color }}>●</div>
    </div>
  );
}



export default function Example2() {

  const main = {
    classtable: 'th',
    EmpN: '사번',
    name: '이름',
    status: true,
    title: '출근상태',
  };

  const employee1 = {
    classtable: 'tr',
    EmpN: '202401',
    name: '홍길동',
    status: true,
    title: 'null'
  };

  const employee2 = {
    classtable: 'tr',
    EmpN: '202402',
    name: '이영희',
    status: false,
    title: 'null'
  };

  const employee3 = {
    classtable: 'tr',
    EmpN: '202403',
    name: '김철수',
    status: false,
    title: 'null'
  };

  return (
    <div className='table'>
      <AComponent  {...main} />
      <ProfileComponent {...employee1} />
      <ProfileComponent {...employee2} />
      <ProfileComponent {...employee3} />
    </div>
  )
}
