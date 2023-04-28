import styles from "./page.module.scss";

import SocialPreviewButton from "./SocialPreviewButton";

const page = async () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.headline}>React SEO Website</h1>
            <SocialPreviewButton />
        </main>
    );
};
export default page;
