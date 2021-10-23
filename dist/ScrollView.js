import React, { useCallback, useContext, useEffect, useRef, } from "react";
import { ScrollView } from "react-native";
import { RootScrollViewContext } from "@providers";
const Background = ({ children, style }) => {
    const scrollRef = useRef();
    const { setIsScrolled, setScrollOffset, targetScrollOffset } = useContext(RootScrollViewContext);
    const _onScroll = useCallback((evt) => {
        setScrollOffset(evt.nativeEvent.contentOffset.y);
        setIsScrolled(evt.nativeEvent.contentOffset.y > 0);
    }, []);
    const scrollTo = useCallback((offset) => {
        scrollRef.current?.scrollTo({ y: offset, animated: true });
    }, []);
    useEffect(() => {
        scrollTo(targetScrollOffset);
    }, [targetScrollOffset, scrollTo]);
    return (React.createElement(ScrollView, { ref: scrollRef, style: [{ flex: 1, height: '100%', width: '100%' }, style], onScroll: _onScroll, scrollEventThrottle: 0, contentContainerStyle: { flexGrow: 1, width: "100%" } }, children));
};
export default Background;
//# sourceMappingURL=ScrollView.js.map