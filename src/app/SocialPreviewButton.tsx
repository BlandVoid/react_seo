"use client";

import styles from "./page.module.scss";

const SocialPreviewButton = () => {
    return (
        <a
            href={`https://socialsharepreview.com/?url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["social-link"]}
        >
            Check on SocialPreview
        </a>
    );
};

export default SocialPreviewButton;
