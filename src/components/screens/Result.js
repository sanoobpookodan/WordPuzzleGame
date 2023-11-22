import {BackHandler, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS} from '../../constants/theme';
import {useNavigation, useRoute} from '@react-navigation/native';
import {calculateScore} from '../../constants/function';

export default function Result() {
  let route = useRoute();
  let navigation = useNavigation();
  let {answerOg, setselectedWord} = route.params;
  const [score, setScore] = useState(0);
  const [isCurrect, setIsCurrect] = useState(false);

  useEffect(() => {
    let answer = setselectedWord.reduce((word, item) => {
      return word + item.letter;
    }, '');
    console.log(answer);
    if (answer == answerOg) {
      setIsCurrect(true);
      setScore(calculateScore(answer));
    }

    const handleBackPress = () => {
      navigation.push('Home');
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
      {isCurrect ? (
        <>
          <Text style={styles.text}>Currect {'\n'}Congratulations</Text>

          <Text style={styles.text}>You earned {score} points</Text>
        </>
      ) : (
        <>
          <Text style={styles.text}>Your answer is Incurrect</Text>
          <Text style={styles.text}>You earned {score} points</Text>
        </>
      )}
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
  text: {
    ...FONTS.text1,
    marginVertical: 20,
    textAlign: 'center',
    lineHeight: 40,
  },
});
