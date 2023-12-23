import styles from "./page.module.css";
import { Htag } from "./components";
import { HtagProps } from "./components/Htag/Htag.props";

export default function Home({
  children = "Text",
  tag = "h1",
}: HtagProps): JSX.Element {
  return (
    <div className={styles.main}>
      <Htag tag={tag} children={children} />
    </div>
  );
}
