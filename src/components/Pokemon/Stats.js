import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import { map, capitalize } from 'lodash';

export default function Stats({stats}) {
  const barStyles = (num) => {
    let color;

    if (num <= 25) {
      color = "#ff3e3e";
    } else if (num > 25 && num < 50) {
      color = "#F08700";
    } else if (num >= 50 && num < 75) {
      color = "#EFCA08";
    } else if (num >= 75) {
      color = "#6EEB83";
    }

    return {
      backgroundColor: color,
      width: `${num}%`
    };
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title} >Base Stats</Text>
      {stats.map(item => (
        <View key={item.stat.name} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>

          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%'
  },
  statName: {
    fontSize: 12,
    color: '#6B6B6B'
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    width: '12%',
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: '#DEDEDE',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    /* backgroundColor: 'red',
    width: '100%', */
    height: 5,
    borderRadius: 20,
  }
})