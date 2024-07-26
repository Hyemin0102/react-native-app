import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import MyText from './components/MyText/MyText.js';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={{borderWidth: 1, borderRadius: 8, padding: 10, margin: 10}}>
        <Text
          style={{
            color: 'green',
            fontFamily: 'Arial',
            fontSize: 18,
            textAlign: 'center',
          }}>
          테스트
        </Text>
      </View>
      <View style={{backgroundColor: 'pink', margin: 10}}>
        <Text>테스트2</Text>
      </View>
      <MyText />
    </SafeAreaView>
  );
}

export default App;
