import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <Text style={Styles.header}>WleCome To My App</Text>
        <View style={Styles.box}>
          <Text>Item 1</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 2</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 3</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 4</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 5</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 6</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 6</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 6</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 6</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 6</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 6</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 6</Text>
        </View>

        <View style={Styles.box}>
          <Text>Item 6</Text>
        </View>
        <View style={Styles.box}>
          <Text>Item 6</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 40,
  },
  box: {
    padding: 20,
    margin: 10,
    backgroundColor: '#e0e0e0',
  },
});
export default App;
