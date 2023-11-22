import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {COLORS, FONTS} from '../../constants/theme';
import {category} from '../../constants/category';
import images from '../../constants/images';
import Overlay from '../includes/Overlay';

export default function QuestionPanel() {
  let route = useRoute();
  let {selectedItem} = route.params;
  let answer = selectedItem?.answer.split('').sort(function () {
    return 0.5 - Math.random();
  });
  //   let selectedItem = category[0];
  let navigation = useNavigation();
  const [setselectedWord, setSetselectedWord] = useState([]);
  const [hint, setHint] = useState(answer || []);
  console.log(setselectedWord);

  const addWord = (word, index) => {
    if (word) {
      let array = [...hint];
      array[index] = null;
      setHint(array);
      let nullIndex = setselectedWord.findIndex(element => {
        return !element.letter;
      });
      if (nullIndex != -1) {
        let array = [...setselectedWord];
        array[nullIndex] = {letter: word, id: index};
        setSetselectedWord(array);
      } else {
        setSetselectedWord([...setselectedWord, {letter: word, id: index}]);
      }
    }
  };

  const removeWord = (index, obj) => {
    let array = [...setselectedWord];
    array[index] = {};
    setSetselectedWord(array);
    let hintArray = [...hint];
    hintArray[obj.id] = obj.letter;
    setHint(hintArray);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.buttonImage, {height: 85, width: 200, marginBottom: 50}]}
        source={images.headerButtion}>
        <Text style={styles.topButton}>{selectedItem?.title}</Text>
      </ImageBackground>

      <View style={styles.ansBoxContainer}>
        {Array(selectedItem?.answer.length)
          .fill(0)
          .map((_, index) => {
            let obj = setselectedWord.find((item, i) => {
              return index == i;
            });
            return (
              <TouchableOpacity
                key={index}
                disabled={!obj?.letter}
                onPress={() => removeWord(index, obj)}>
                <Text style={styles.answerBox}>{obj?.letter}</Text>
              </TouchableOpacity>
            );
          })}
      </View>

      <Text style={styles.question}>{selectedItem?.question}</Text>

      <View style={styles.ansBoxContainer}>
        {hint.map((item, index) => (
          <TouchableOpacity
            key={index}
            disabled={!item}
            onPress={() => addWord(item, index)}>
            <Text style={styles.QustBox}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        disabled={
          setselectedWord.filter(item => item.letter).length !=
          selectedItem?.answer.length
        }
        onPress={() =>
          navigation.push('Result', {
            answerOg: selectedItem?.answer,
            setselectedWord,
          })
        }>
        <ImageBackground
          style={[
            styles.buttonImage,
            {height: 75, width: 175, marginBottom: 50, marginTop: 20},
          ]}
          source={images.startButton}>
          <Text style={styles.topButton}>{'Next'}</Text>
          {setselectedWord.filter(item => item.letter).length !=
            selectedItem?.answer.length && <Overlay />}
        </ImageBackground>
      </TouchableOpacity>
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
    // width: '100%',
    paddingHorizontal: 25,
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
  },
  ansBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  answerBox: {
    borderWidth: 1,
    borderColor: COLORS.white,
    width: 50,
    height: 50,
    marginHorizontal: 15,
    marginBottom: 30,
    ...FONTS.text1,
    lineHeight: 45,
    textAlign: 'center',
  },
  question: {
    ...FONTS.text3,
    marginVertical: 20,
    marginBottom: 40,
  },
  QustBox: {
    borderWidth: 1,
    borderColor: COLORS.white,
    width: 50,
    height: 50,
    marginHorizontal: 15,
    marginBottom: 30,
    ...FONTS.text1,
    lineHeight: 45,
    textAlign: 'center',
  },
});
