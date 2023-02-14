import { useState } from "react";
import styles from './Counter.module.scss'

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={styles.increment} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
