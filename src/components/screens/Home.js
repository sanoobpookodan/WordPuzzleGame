import {
  BackHandler,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {category} from '../../constants/category';
import images from '../../constants/images';
import {COLORS, FONTS} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import Overlay from '../includes/Overlay';

export default function Home() {
  let buttons = [images.button1, images.button2, images.button3];
  let navigation = useNavigation();
  const [setselectedButton, setSetselectedButton] = useState({});
  console.log(setselectedButton);
  useEffect(() => {
    const handleBackPress = () => {
      BackHandler.exitApp();

      return true;
    };

    // Subscribe to the hardware back press event
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Clean up the event listener when the component is unmounted
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.buttonImage, {height: 85, width: 200, marginBottom: 50}]}
        source={images.headerButtion}>
        <Text style={styles.topButton}>{'Words Puzzle'}</Text>
      </ImageBackground>
      <View>
        {category.map((item, index) => (
          <TouchableOpacity onPress={() => setSetselectedButton(item)}>
            <ImageBackground style={styles.buttonImage} source={buttons[index]}>
              <Text style={styles.text}>{item.title}</Text>
              {item.id === setselectedButton.id && <Overlay />}
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        disabled={!setselectedButton.id}
        onPress={() =>
          navigation.push('QuestionPanel', {
            selectedItem: setselectedButton,
          })
        }>
        <ImageBackground
          style={[
            styles.buttonImage,
            {height: 75, width: 175, marginBottom: 50, marginTop: 20},
          ]}
          source={images.startButton}>
          <Text style={styles.topButton}>{'Start'}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate('LeaderBoard')}>
        <Text style={styles.bottomText}>Leaders Board</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'center',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '20%',
    width: '100%',
  },
  topButton: {
    ...FONTS.h2,
    color: '#fff',
  },
  buttonImage: {
    width: 250,
    height: 62,
    marginBottom: 35,
    alignItems: 'center',
    justifyContent: 'center',
    // resizeMode: 'contain',
  },
  text: {
    ...FONTS.h3,
  },
  bottomText: {
    ...FONTS.text2,
    textDecorationLine: 'underline',
  },
});
