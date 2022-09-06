import React from "react";

interface IContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
  return <div>{children}</div>;
};

export default Content;
