import React from "react";
interface IProps {
  title: string;
}
const DemoApi = ({ title }: IProps) => {
  return <div>标题：{title}</div>;
};
export default DemoApi;
