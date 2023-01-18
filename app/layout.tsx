import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13 Playground</title>
      </head>
      <body>
        <div className={styles.header}>From layout</div>
        <div>{children}</div>
      </body>
    </html>
  );
}
