//import React from 'react';
//import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <Text style={Styles.header}>WleCome To My App</Text>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Hello World</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 90,
  },
  box: {
    padding: 20,
    margin: 5,
  },
  txt: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    marginLeft: 90,
  },
});
export default App;
