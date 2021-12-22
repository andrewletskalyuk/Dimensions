import {
  StyleSheet,
  // SafeAreaView,
  // Dimensions,
  // StatusBar,
  // Platform,
  View
} from 'react-native';
import {
  //useDimensions, //
  useDeviceOrientation //
} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    // <SafeAreaView style={styles.container}>
    //   <View style={{
    //     backgroundColor: 'dodgerblue',
    //     width: '100%',
    //     height: landscape ? '100%' : '30%',
    //   }}
    //   ></View>
    // </SafeAreaView>
    // <View
    //   style={{
    //     backgroundColor: '#fff',
    //     flex: 1,
    //     flexDirection: 'row', //це головний елемент форматування
    //     justifyContent: 'center', //це другий за значимостю доступ
    //     alignItems: 'center',
    //     //flexDirection: 'row-reverse'
    //     //flexDirection: 'column-reverse',
    //     alignContent: 'center', //пр
    //     flexWrap: 'wrap', //перенос контейнера якщо він не влазить в один радок
    //   }}
    // >
    //   <View style={{
    //     backgroundColor: 'dodgerblue',
    //     // flex: 2,
    //     height: 100,
    //     width: 100,
    //     //alignSelf: 'flex-start'
    //     // flexBasis: 100, // width or height
    //     // flexGrow: 1,
    //   }}
    //   />
    //   <View style={{
    //     backgroundColor: 'gold',
    //     //flex: 1
    //     width: 100,
    //     height: 100,
    //     // top: 20,
    //     // left: 20,
    //     // position: 'relative'
    //   }}
    //   />
    //   <View style={{
    //     backgroundColor: 'tomato',
    //     //flex: 1
    //     width: 100,
    //     height: 100
    //   }}
    //   />
    // </View>
    //<WelcomeScreen/>
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
