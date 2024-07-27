import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

const HomeScreen = () => {
  //다크모드인지 확인 필요, useContext로 컨텍스트 불러옴
  const isDarkMode = useContext(ThemeContext);

  return (
    <View style={{backgroundColor: isDarkMode ? '#222222' : 'white'}}>
      <Text style={{color: isDarkMode ? 'white' : '#222222'}}>
        제 앱에 오신 걸 환영합니다
      </Text>
    </View>
  );
};

export default HomeScreen;
