import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const IQTESTFREE = 'https://quillchain.github.io/testiq/';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ with: '100%', hight: '100%'}}>
        <WebView
          source={{
            uri: IQTESTFREE
          }}
          onload={console.log('loaded')}
        />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
