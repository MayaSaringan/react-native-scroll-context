# react-native-scroll-context

Provides a React Native context that makes it easier to manipulate the scroll offset of a ScrollView in the app. This is mostly intended for when you have a single root ScrollView. This lets deeply nested children know the offset of the ScrollView and lets them change the root ScrollView's offset via a function without passing down props through many levels of children.

Uses a ScrollView from [Native-Base](https://docs.nativebase.io/)

## Installation

Built with [Node.js](https://nodejs.org/) v14.15.0

```sh
yarn
```

## Deployment

Create a build and upload it to the remote repo (under `dist/`)

```sh
yarn build
```

## Usage

Currently imported into projects as a github repo link in `package.json`

```json
"react-native-scroll-context": "git://github.com/MayaSaringan/react-native-scroll-context.git#commitHash",
```

```tsx
import { ScrollView, RootScrollViewContext } from "react-native-scroll-context";

const App: FunctionComponent<unknown> = () => {
  return (
    <ScrollView>
    {
      /* ... */
    }
    </ScrollView>);
};

...

const Button: FunctionComponent<unknown> = () => {
  const { scrollOffset, setTargetScrollOffset, targetScrollOffset } =
    useContext(RootScrollViewContext);

  useEffect(() => {
    // scrollOffset is updated every time an onScroll happens for
    // the ScrollView exported from the package, or every time setScrollOffset is called

    // Here, you can tell the button to perhaps change in background color
    // when the scrollOffset >= x, etc.
  }, [scrollOffset]);
  return (
    <Pressable
      onPress={() => {
        // will tell the ScrollView exported from the package to scroll to the
        // new target scroll offset
        setTargetScrollOffset(/* some offset */);
      }}
    />
  );
};
...

```

## TroubleShooting / Notes

- Native-Base is a dependency because React-Native's ScrollView was not working in place of Native-Base ScrollView for some reason when this package was tried on an Expo package.
- The Native-Base ScrollView's current style cannot be moved into the style prop for some reason atm.
