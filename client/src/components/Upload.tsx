import { IKContext, IKUpload } from "imagekitio-react";
import React, { FC, ReactNode, useRef } from "react";
import { toast } from "react-toastify";

export interface IImageResponse {
  name: string;
  url: string;
  filePath?: string;
}

interface IProgress {
  loaded: number;
  total: number;
}

interface IUploadProps {
  children?: ReactNode;
  type?: "image" | "video";
  setProgress?: (progress: number) => void;
  setData?: (data: IImageResponse) => void;
}

const publicKey = import.meta.env.VITE_IK_PUBLIC_KEY;

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("An unknown error occurred");
    }
  }
};

const Upload: FC<IUploadProps> = ({
  children,
  type,
  setProgress,
  setData,
}: IUploadProps): React.JSX.Element => {
  const ref = useRef<HTMLInputElement | null>(null);

  const onError = () => {
    toast.error("Image upload failed!");
  };

  const onSuccess = (response: IImageResponse) => {
    console.log(response);
    setData!(response);
  };

  const onUploadProgress = (progress: IProgress) => {
    console.log(progress);
    setProgress!(Math.round((progress.loaded / progress.total) * 100));
  };

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursor-pointer" onClick={() => ref.current!.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
