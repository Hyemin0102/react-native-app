import React from 'react';
import {Text} from 'react-native';
import style from './style';
const MyText = () => {
  const handleTextClick = () => {
    alert('텍스트 클릭함');
  };
  return (
    <Text style={style.text} onPress={() => handleTextClick()}>
      Hello, React Native World!
    </Text>
  );
};

export default MyText;

/*
onPress - 클릭이벤트
*/
