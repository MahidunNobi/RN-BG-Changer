import React, {useState} from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const changeBg = () => {
    const HexRange = '0123456789ABCDEF';
    let color = '#';

    for (let x = 0; x < 6; x++) {
      color += HexRange[Math.floor(Math.random() * 16)];
    }
    setBgColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <TouchableOpacity onPress={changeBg}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Hit me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    backgroundColor: '#D63031',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  actionBtnTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default App;
