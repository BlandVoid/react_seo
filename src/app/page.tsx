import styles from "./page.module.scss";

const page = async () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.headline}>React SEO Website</h1>
            <a
                href={`https://socialsharepreview.com/?url=${process.env["HOST"]}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["social-link"]}
            >
                Check on SocialPreview
            </a>
        </main>
    );
};
export default page;
