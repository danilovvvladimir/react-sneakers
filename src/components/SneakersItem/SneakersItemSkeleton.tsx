import React from "react";
import ContentLoader from "react-content-loader";

const SneakersItemSkeleton = () => (
  <ContentLoader
    className="skeleton"
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#ffffff"
    foregroundColor="#9fdfac">
    <circle cx="100" cy="52" r="50" />
    <rect x="2" y="127" rx="10" ry="10" width="200" height="37" />
    <rect x="3" y="185" rx="10" ry="10" width="120" height="35" />
    <rect x="140" y="185" rx="10" ry="10" width="60" height="34" />
  </ContentLoader>
);

export default SneakersItemSkeleton;
