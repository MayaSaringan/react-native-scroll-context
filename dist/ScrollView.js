import React, { useCallback, useContext, useEffect, useRef, } from "react";
import { ScrollView as _ScrollView } from "native-base";
import { RootScrollViewContext } from "./Provider";
const ScrollView = ({ children, ...restProps }) => {
    const scrollRef = useRef(null);
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
    return (React.createElement(_ScrollView, { ref: scrollRef, flex: 1, height: "100%", width: "100%", onScroll: _onScroll, scrollEventThrottle: 0, contentContainerStyle: { flexGrow: 1, width: "100%" }, ...restProps }, children));
};
export default ScrollView;
//# sourceMappingURL=ScrollView.js.map