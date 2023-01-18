"use client";

import styles from "./breaking.module.css";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>BREAKING</div>
      <div>
        <button
          onClick={() => {
            throw Error();
          }}
        >
          break this
        </button>
      </div>
    </div>
  );
}
