import React, {useRef} from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Button,
  View,
  StyleSheet,
} from 'react-native';
function App(): React.JSX.Element {
  let array = Array(100).fill(0);
  const scrollViewRef = useRef(null);
  const handleClick = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView ref={scrollViewRef}>
          {array.map((item, index) => (
            <Text key={index}>안녕하세요!{index}</Text>
          ))}
        </ScrollView>
        <Button onPress={handleClick} title={'스크롤 맨 위로'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
});

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
