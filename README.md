# react-native-scroll-context

Provides a React Native context that makes it easier to inform us about the state of ScrollViews in the app, or to direct them to scroll to a different offset.

Uses a ScrollView from [Native-Base](https://docs.nativebase.io/)

## TroubleShooting / Notes

- Native-Base is a dependency because React-Native's ScrollView was not working in place of Native-Base ScrollView for some reason when this package was tried on an Expo package.
- The Native-Base ScrollView's current style cannot be moved into the style prop for some reason atm.
