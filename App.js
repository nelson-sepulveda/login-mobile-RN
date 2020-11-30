import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { AppLoading } from 'expo'
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import styles from "./styles/styles"
import avertaFonts from "./fonts/fonts"
import { useFonts } from "@use-expo/font"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { MaterialIcons } from "@expo/vector-icons"

export default function App() {
  const [isLoaded] = useFonts(avertaFonts);
  if (!isLoaded) {
    return <AppLoading />;
  } else {
    return (
      <KeyboardAwareScrollView scrollEnabled resetScrollToCoords={{ x: 0, y: 0 }}>
        <View style={styles.container}>
          <Image source={{uri: 'https://i.ibb.co/LPjrnWY/init.png'}} style={{width: '100%', height:170, marginBottom: 50}} />
          <Text style={styles.textLogin}>Login</Text>
          <View style={styles.containerSocialButtons}>
            <TouchableOpacity style={styles.buttonSocialMedia}>
              <Text style={styles.textSocialButton}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSocialMedia}>
              <Text style={styles.textSocialButton}>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerOr}>
            <Text style={styles.textOr}>
              Or
            </Text>
          </View>
          <View style={styles.containerInputs}>
            <View style={styles.containerTextInput}>
              <TextInput
                style={styles.textboxfieldd}
                placeholderStyle={styles.textInputPlaceholder}
                placeholder="Email address"
                placeholderTextColor="#dbdcdc"
              />
            </View>
            <View style={styles.containerTextInput}>
              <TextInput
                style={styles.textboxfieldd}
                placeholderStyle={styles.textboxfieldd}
                placeholder="Password"
                placeholderTextColor="#dbdcdc"
              />
            </View>
          </View>
          <View style={styles.containerCreateAccount}>
            <View style={styles.containerTextCreateAccount}>
              <Text style={styles.textCreateAccount}>
                Creat an account
              </Text>
            </View>
            <TouchableOpacity style={styles.containerNextAccount}>
              <MaterialIcons name="keyboard-arrow-right" size={30} color="gray" />
              <MaterialIcons name="keyboard-arrow-right" size={30} color="#fff" style={{marginLeft: -22}} />
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
