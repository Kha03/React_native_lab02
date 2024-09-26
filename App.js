import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Cart from './components/Cart';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Cart/>
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
  },
  })

