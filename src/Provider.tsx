import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useState,
} from "react";
interface Context {
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
  scrollOffset: number;
  setScrollOffset: (scrollOffset: number) => void;
  targetScrollOffset: number;
  setTargetScrollOffset: (scrollOffset: number) => void;
}
export const RootScrollViewContext = createContext<Context>({
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

const RootScrollViewProvider: FunctionComponent<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [isScrolled, setIsScrolled] = useState<Context["isScrolled"]>(false);
  const [scrollOffset, setScrollOffset] = useState<Context["scrollOffset"]>(0);
  const [targetScrollOffset, setTargetScrollOffset] =
    useState<Context["targetScrollOffset"]>(0);
  return (
    <RootScrollViewContext.Provider
      value={{
        isScrolled,
        setIsScrolled,
        scrollOffset,
        setScrollOffset,
        targetScrollOffset,
        setTargetScrollOffset,
      }}
    >
      {children}
    </RootScrollViewContext.Provider>
  );
};
export default RootScrollViewProvider;
