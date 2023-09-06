import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header/Header";
import CardTodo from "./components/Card/CardTodo";

const TODO_LIST = [
  { id: 1, title: "Walk the dog", isCompleted: true },
  { id: 2, title: "Go to the dentist", isCompleted: false },
  { id: 3, title: "Learn React Native", isCompleted: false },
];

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={styles.app}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.body}>
            <CardTodo todo={TODO_LIST[0]} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#A7CBD9",
    padding: 15,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 5,
  },
  footer: {
    height: 70,
  },
});

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
*/
