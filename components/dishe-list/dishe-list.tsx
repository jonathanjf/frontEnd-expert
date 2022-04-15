import Styles from "./dishe-list.module.css";
import { Dishe } from "@/components";

export const DisheList = () => {
  return (
    <div className={Styles.list}>
    <Dishe />
    <Dishe />
    <Dishe />
    <Dishe />
    <Dishe />
  </div>
);
};