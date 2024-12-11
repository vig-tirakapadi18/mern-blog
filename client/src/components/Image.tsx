import React, { FC } from "react";
import { IKImage } from "imagekitio-react";

interface ImageProps {
  src: string;
  className: string;
  w?: number;
  h?: number;
  alt: string;
}

const Image: FC<ImageProps> = ({
  src,
  className,
  w,
  h,
  alt,
}: ImageProps): React.JSX.Element => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
    />
  );
};

export default Image;
