import React from "react";
import ContentLoader from "react-content-loader";

const TextMdLoader = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="dark:!tw-bg-notecolor-dark"
        {...props}
    >
        <rect x="6" y="96" rx="0" ry="0" width="379" height="222" />
    </ContentLoader>
);

export default TextMdLoader;
