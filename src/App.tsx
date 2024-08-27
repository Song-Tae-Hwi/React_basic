import React from 'react';
import Component, { FunctionComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import Gallery from './component_manage/example/Example1';
import ConditionalRender from './component_manage/ConditionalRender';
import Example2_1 from './component_manage/example/Example2_1';
import ListRender from './component_manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwordingComponent from './interaction/ForwordingComponent';
import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';
import CustomHook from './hook/CustomHook';

function App() {
  return (
    <>
      {/* <Component /> */}
      {/* <FunctionComponent /> */}
      {/* <CurlyBraces /> */}
      {/* <Properties /> */}
      {/* <Gallery /> */}
      {/* <ConditionalRender /> */}
      {/* <Example2_1 /> */}
      {/* <ListRender /> */}
      {/* <EventComponent /> */}
      {/* <StateComponent /> */}
      {/* <ForwordingComponent /> */}
      {/* <HookComponent1 /> */}
      {/* <HookComponent2 /> */}
      <CustomHook />
    </>
  );
}

export default App;