import React, { FunctionComponent, PropsWithChildren } from "react";
interface Context {
    isScrolled: boolean;
    setIsScrolled: (isScrolled: boolean) => void;
    scrollOffset: number;
    setScrollOffset: (scrollOffset: number) => void;
    targetScrollOffset: number;
    setTargetScrollOffset: (scrollOffset: number) => void;
}
export declare const RootScrollViewContext: React.Context<Context>;
declare const RootScrollViewProvider: FunctionComponent<PropsWithChildren<unknown>>;
export default RootScrollViewProvider;
