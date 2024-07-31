import React, {useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {ThemeContext} from './context/ThemeContext.js';
import HomeScreen from './components/HomeScreen/HomeScreen.js';
import useToggle from './customHooks/useToggle.js';
function App(): React.JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //토글로 값 전환해주는 커스텀훅
  const [isOn, toggleIsOn] = useToggle(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    //컨텍스트 감싸기, 전달할 값은 다크모드 상태
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <View style={{backgroundColor: isDarkMode ? '#222222' : 'white'}}>
          <Text style={{color: isDarkMode ? 'white' : '#222222'}}>
            안녕하세요
          </Text>
          <Button title={'모드 변경'} onPress={toggleTheme} />
        </View>
        <HomeScreen />
        <Button title={'Toggle'} onPress={toggleIsOn} />
        <Text>{isOn ? 'ON' : 'OFF'}</Text>
      </SafeAreaView>
    </ThemeContext.Provider>
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
