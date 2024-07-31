import React, {useState} from 'react';
import {Image, ScrollView, SafeAreaView, TextInput, View} from 'react-native';

function App(): React.JSX.Element {
  // const [imageSource, setImageSource] = useState({uri: 'https://example.com'});
  const [textValue, setTextValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  return (
    <SafeAreaView>
      {/*<Image*/}
      {/*  source={imageSource}*/}
      {/*  style={{width: 200, height: 200, backgroundColor: 'gray'}}*/}
      {/*  resizeMode={'cover'}*/}
      {/*  onError={() => {*/}
      {/*    console.log('에러 이미지');*/}
      {/*    setImageSource(require('./assets/images/appDown_sect02_img.webp'));*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<Image*/}
      {/*  source={{*/}
      {/*    uri: 'https://i.pinimg.com/474x/d9/b5/df/d9b5dfebade0f8b407f0559d257cfc7c.jpg',*/}
      {/*  }}*/}
      {/*  style={{width: 200, height: 200}}*/}
      {/*  resizeMode={'cover'}*/}
      {/*/>*/}
      <TextInput
        style={{borderWidth: 1, margin: 20, padding: 10, borderRadius: 8}}
        value={textValue}
        onChangeText={value => setTextValue(value)}
        placeholder={'이름을 입력해주세요!'}
        returnKeyType={'search'}
      />
      <TextInput
        style={{borderWidth: 1, margin: 20, padding: 10, borderRadius: 8}}
        value={pwValue}
        onChangeText={value => setPwValue(value)}
        secureTextEntry={true}
        placeholder={'비밀번호를 입력해주세요'}
      />
      <View style={{borderWidth: 3}}>
        <ScrollView
          onScroll={() => {
            console.log('사용자가 스크롤할 때 발생하는 상황 제어할수있음');
          }}
          contentContainerStyle={{backgroundColor: 'gray'}}
          showsVerticalScrollIndicator={true}
          horizontal={true}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/d9/b5/df/d9b5dfebade0f8b407f0559d257cfc7c.jpg',
            }}
            style={{width: 500, height: 500}}
            resizeMode={'contain'}
          />
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/d9/b5/df/d9b5dfebade0f8b407f0559d257cfc7c.jpg',
            }}
            style={{width: 500, height: 500}}
            resizeMode={'contain'}
          />
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/d9/b5/df/d9b5dfebade0f8b407f0559d257cfc7c.jpg',
            }}
            style={{width: 500, height: 500}}
            resizeMode={'contain'}
          />
        </ScrollView>
      </View>
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

returnKeyType
done-완료
go-검색이나 다른 작업에 사용될 때 이동키
next-입력 필드 여러개
search-입력 검색

✅
스크롤뷰의 contentContainerStyle -> 내부 콘텐츠 감싸는 뷰의 스타일 지정.
테두리는 부모컨텐츠에서 감싸서 사용해야함
 */
