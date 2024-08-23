import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';  
import styles from './styles';
import HomeScreen from './Components/HomeScreen'

export default function App() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' translucent={true} />
        <View style={[styles.container, { paddingTop: insets.top }]}>
          <HomeScreen />
        </View>
    </SafeAreaProvider>
  );
}