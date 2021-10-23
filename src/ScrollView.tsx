import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { ScrollView as _ScrollView, IScrollViewProps } from "native-base";
import { RootScrollViewContext } from "./Provider";

const ScrollView: FunctionComponent<IScrollViewProps> = ({
  children,
  ...restProps
}) => {
  const scrollRef = useRef<typeof _ScrollView>(null);
  const { setIsScrolled, setScrollOffset, targetScrollOffset } = useContext(
    RootScrollViewContext,
  );

  const _onScroll = useCallback((evt) => {
    setScrollOffset(evt.nativeEvent.contentOffset.y);
    setIsScrolled(evt.nativeEvent.contentOffset.y > 0);
  }, []);

  const scrollTo = useCallback((offset) => {
    (
      scrollRef.current as typeof _ScrollView & {
        scrollTo: (args: { y: number; animated: boolean }) => void;
      }
    )?.scrollTo({ y: offset, animated: true });
  }, []);

  useEffect(() => {
    scrollTo(targetScrollOffset);
  }, [targetScrollOffset, scrollTo]);

  return (
    <_ScrollView
      ref={scrollRef}
      flex={1}
      height={"100%"}
      width={"100%"}
      onScroll={_onScroll}
      scrollEventThrottle={0}
      contentContainerStyle={{ flexGrow: 1, width: "100%" }}
      {...restProps}
    >
      {children}
    </_ScrollView>
  );
};

export default ScrollView;
