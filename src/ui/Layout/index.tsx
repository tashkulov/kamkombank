import React, { ReactNode } from "react";
import {
  bookingContainerStyles,
  containerStyles,
  mainBlockLayoutStyles,
  mainLayoutStyles,
  miniContainerStyles,
  wrapperStyles,
} from "@/ui/Layout/style";
import clx from "classnames";

type TProps = {
  children?: ReactNode;
  className?: string;
};

const Main: React.FC<TProps> = ({ children, className }) => {
  return <div className={clx(mainLayoutStyles, className)}>{children}</div>;
};
const MainBlock: React.FC<TProps> = ({ children, className }) => {
  return (
    <div className={clx(mainBlockLayoutStyles, className)}>{children}</div>
  );
};
const Container: React.FC<TProps> = ({ children, className }) => {
  return <div className={clx(containerStyles, className)}>{children}</div>;
};
const BookingContainer: React.FC<TProps> = ({ children, className }) => {
  return (
    <div className={clx(bookingContainerStyles, className)}>{children}</div>
  );
};
const MiniContainer: React.FC<TProps> = ({ children, className }) => {
  return <div className={clx(miniContainerStyles, className)}>{children}</div>;
};

const Wrapper: React.FC<TProps> = ({ children, className }) => {
  return <div className={clx(wrapperStyles, className)}>{children}</div>;
};

const Layout = {
  Container: Container,
  MiniContainer: MiniContainer,
  Main: Main,
  BookingContainer: BookingContainer,
  MainBlock: MainBlock,
  Wrapper: Wrapper,
};
export default Layout;
