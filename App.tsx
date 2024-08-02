import React from 'react';
import {View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 1, backgroundColor: 'orange'}} />
      </View>
      <View style={{flex: 1}}>
        <View style={{flex: 3, backgroundColor: 'yellow'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
      </View>
    </View>
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

<TextInput>
returnKeyType - 키패드에서 완료 버튼 텍스트와 기능 설정
done-완료
go-검색이나 다른 작업에 사용될 때 이동키
next-입력 필드 여러개
search-입력 검색

<Button> - 스타일 지정 자유롭게 안됨
<pressable> - 단일 컴포넌트, 터치 이벤트 처리, 시각적 피드백 제공(터치 상태에 따라 스타일 동적 변경)

✅
스크롤뷰의 contentContainerStyle -> 내부 콘텐츠 감싸는 뷰의 스타일 지정.
테두리는 부모컨텐츠에서 감싸서 사용해야함(ios, android 다름)
 */
