import {
  StyleSheet,
  // SafeAreaView,
  // Dimensions,
  // StatusBar,
  // Platform,
  View,
  Text,
} from 'react-native';
import {
  //useDimensions, //
  useDeviceOrientation //
} from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import AppText from './app/components/AppText';

export default function App() {
  const { landscape } = useDeviceOrientation(); //
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
    //<ViewImageScreen />
    //Borders 2
    <View style={styles.container}>
      {/* <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
        // borderWidth: 10,
        // borderColor: 'royalblue',
        // borderRadius: 50,
        // borderTopWidth: 20,
        // borderTopLeftRadius: 50
        //android!!! border
        //elevation: 20, //немає властивостей таких гнучних як в iOS
        padding: 20,
        paddingHorizontal: 10,
        paddingLeft: 30,
      }}>
        <View style={{
          backgroundColor: "gold",
          width: 50,
          height: 50,
        }}></View>
      </View>
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
        margin: 20,
      }}>

      </View> */}
      <Text style={{
        //fontFamily: "Roboto",
        fontSize: 30,
        fontWeight: "600",
        color: "tomato",
        textTransform: "capitalize",
        textAlign: "center",
        lineHeight: 30,
      }}>
        I love React native! This is my React native program
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
