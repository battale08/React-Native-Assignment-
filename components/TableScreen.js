// TableScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TableScreen = ({ route }) => {
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>House Cusps And Sandhi</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          {Object.keys(data[0]).map((heading, index) => (
            <Text key={index} style={styles.tableHeader}>
              {heading}
            </Text>
          ))}
        </View>
        {data.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.tableRow}>
            {Object.values(row).map((cell, cellIndex) => (
              <Text key={cellIndex} style={styles.tableCell}>
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightskyblue',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: 'black',
  },
  tableHeader: {
    fontWeight: 'bold',
    marginRight: 10,
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    marginRight: 10,
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: 'green',
  },
});

export default TableScreen;
