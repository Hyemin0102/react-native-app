import React from 'react';

import {SafeAreaView} from 'react-native';
import Item from './components/Item/Item.js';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Item name={'책상'} price={20} />
      <Item name={'의자'} price={100} />
      <Item name={'침대'} price={200} />
    </SafeAreaView>
  );
}

export default App;

/*
Text 컴포넌트? - 텍스트쓸 때 꼭 필요
View 컴포넌트란?
- 리액트 네이티브 앱의 레이아웃을 만들기 위한 기본적이 빌딩 블록
- 그리드, 스택같은 레이아웃 만듦
- 반응형 디자인 만들때 사용
Props & PropsType
- props 의 타입 설정하고 타입 맞지 않는 경우 에러 발생시킴

 */
