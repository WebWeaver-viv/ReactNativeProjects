import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';

function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <Text style={Styles.header}>WleCome To My App</Text>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 1</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 2</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 3</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 4</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 5</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 6</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 7</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 8</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 9</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 10</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 11</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 12</Text>
        </View>

        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 6</Text>
        </View>
        <View style={Styles.box}>
          <Text style={Styles.txt}>Item 6</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor:'gray',
 
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom:20,
    marginTop:50,
    marginLeft:80,
    
       
    
  },
  box: {
    padding: 20,
    margin: 5,
    backgroundColor: '#620606',
    borderRadius:6,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  txt:{
paddingLeft:20,
color:'#ffffff',
fontSize: 16,
    fontWeight: 'bold',
  }
});
export default App;
