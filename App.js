import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Course from './src/screen/Course';
import Home from './src/screen/Home';
import CourseDetails from './src/screen/CourseDetails';
import UserData from './src/screen/UserData';
import { useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App() {

  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }


  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        {/*<Stack.Screen name="Home" component={Home} />*/}
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}>
          {(props) => <Home {...props} channelName={"Webscos"} />}
        </Stack.Screen>
          
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />

      

        {/* About Screen  */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

<Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

        {/* Contact Screen  */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

        {/* CourseDetails Screen  */}
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
