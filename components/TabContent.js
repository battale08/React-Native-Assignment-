// TabContent.js

import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const TabContent = ({data}) => {
  return (
    <ScrollView style={styles.container}>
      {data?.map((item, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.heading}>{item.heading}</Text>
          {renderContent(item)}
        </View>
      ))}
    </ScrollView>
  );
}

const renderContent = item => {
  switch (item.type) {
    case 'KEY_VALUE':
      return renderKeyValue(item.data);
    case 'PARAGRAPH':
      return renderParagraph(item.data);
    case 'KEY_PARAGRAPH':
      return renderKeyParagraph(item.data);
    case 'TABLE':
      return renderTable(item.data);
    default:
      return null;
  }
}

const renderKeyValue = data => {
  return (
    <View style={styles.content}>
      {Object.entries(data)?.map(([key, value]) => (
        <View key={key} style={styles.row}>
          <Text style={styles.key}>{key} :</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const renderParagraph = data => {
  return (
    <View style={styles.content}>
      {data.map((paragraph, index) => (
        <Text key={index} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
}

const renderKeyParagraph = data => {
  return (
    <View style={styles.content}>
      {Object.entries(data).map(([key, value]) => (
        <View key={key}>
          <Text style={styles.subheading}>{key}:</Text>
          <Text style={styles.paragraph}>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightskyblue',
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    marginBottom: 10,
  },
  key: {
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  paragraph: {
    marginBottom: 5,
  },
  subheading: {
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default TabContent;
