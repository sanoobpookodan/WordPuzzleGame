import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import leaderboard from '../../constants/leader_board';

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboard}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.id}. {item.name}
            </Text>
            <Text style={styles.itemText}>{item.score} points</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingVertical: '10%',
    paddingHorizontal: '5%',
  },
  title: {
    ...FONTS.h1,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    marginBottom: 10,
  },
  itemText: {...FONTS.text3},
});
