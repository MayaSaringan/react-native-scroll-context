import React, { createContext, useState, } from "react";
export const RootScrollViewContext = createContext({
    isScrolled: false,
    setIsScrolled: () => {
        // do nothing.
    },
    scrollOffset: 0,
    setScrollOffset: () => {
        // do nothing.
    },
    targetScrollOffset: 0,
    setTargetScrollOffset: () => {
        // do nothing.
    },
});
const RootScrollViewProvider = ({ children, }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [targetScrollOffset, setTargetScrollOffset] = useState(0);
    return (React.createElement(RootScrollViewContext.Provider, { value: {
            isScrolled,
            setIsScrolled,
            scrollOffset,
            setScrollOffset,
            targetScrollOffset,
            setTargetScrollOffset,
        } }, children));
};
export default RootScrollViewProvider;
//# sourceMappingURL=Provider.js.map