import React, { useEffect, useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import Lightbox from 'react-image-lightbox';
import Imgix from 'react-imgix';

import { Flex, Icon, Button, Box, Text } from '@chakra-ui/react';

import { storage } from '@config/firebase';

import { TImageInputErrors, TImageUploadProps } from '@customTypes/components';

const ImageUploader: React.FC<TImageUploadProps> = ({
  imageFolder,
  imagePath,
  label,
  imageWidth,
  imageHeight,
  imageFit,
  callback,
}) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(
    imagePath ? `${process.env.NEXT_PUBLIC_IMG_URL}${imagePath}` : undefined,
  );
  const [imageErrors, setImageErrors] = useState<TImageInputErrors>({});
  const [isZoomed, setZoomed] = useState(false);

  const fileInput = React.createRef<HTMLInputElement>();

  const width = imageWidth ? imageWidth : 130;
  const height = imageHeight ? imageHeight : 150;
  const fit = imageFit ? imageFit : 'crop';

  useEffect(() => {
    setImageUrl(imagePath ? `${process.env.NEXT_PUBLIC_IMG_URL}${imagePath}` : undefined);
  }, [imagePath]);

  const handleFileUpload = () => {
    const fileErrors: TImageInputErrors = {};
    let isValid = true;
    let file;

    if (fileInput?.current?.files && fileInput?.current?.files[0]) {
      file = fileInput.current.files[0];

      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        isValid = false;
        fileErrors.type = 'Only .jpg and .png images are accepted.';
      }
    }

    if (isValid && file) {
      // Reset errors
      setImageErrors({});

      // Submit image to firebase
      const storageRef = storage.ref();

      const filename = `images/${imageFolder}/${uuidv4()}${
        file.type == 'image/jpeg' ? '.jpg' : '.png'
      }`;

      const uploadImageRef = storageRef.child(filename);

      uploadImageRef
        .put(file, { contentType: file.type })
        .then(() => {
          setImageUrl(`${process.env.NEXT_PUBLIC_IMG_URL}/${filename}`);
          callback(`/${filename}`);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setImageErrors(fileErrors);
    }
  };

  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {label && (
          <Text textAlign="center" fontSize="xs" fontWeight="bold">
            {label}
          </Text>
        )}
        <Flex
          bg="background"
          justifyContent="center"
          alignItems="center"
          mx="auto"
          mb={5}
          width={`${width}px`}
          height={`${height}px`}
          cursor="pointer"
          css={{}}
          onClick={() => {
            if (!imageUrl) {
              fileInput.current?.click();
            }
          }}
        >
          {imageUrl && (
            <Box
              cursor="zoom-in"
              onClick={() => {
                setZoomed(true);
              }}
            >
              <Imgix
                src={imageUrl}
                width={width}
                height={height}
                imgixParams={{ fit }}
                className="zoom"
              />
            </Box>
          )}
          {!imageUrl && <Icon as={RiImageAddFill} w={8} h={8} />}
        </Flex>
        <input
          type="file"
          id="profileImageInput"
          style={{ display: 'none' }}
          ref={fileInput}
          onChange={handleFileUpload}
        />
        <Button
          colorScheme="red"
          size="xs"
          onClick={() => {
            fileInput.current?.click();
          }}
        >
          Upload Image
        </Button>
        {(imageErrors.type || imageErrors.required) && (
          <Box mt={2}>
            {imageErrors.type && (
              <Text fontSize="xs" color="red" textAlign="center">
                {imageErrors.type}
              </Text>
            )}
            {imageErrors.required && (
              <Text fontSize="xs" color="red" textAlign="center">
                {imageErrors.required}
              </Text>
            )}
          </Box>
        )}
      </Flex>

      {isZoomed && imageUrl && (
        <Lightbox
          reactModalStyle={{
            overlay: {
              zIndex: 1401,
            },
          }}
          mainSrc={imageUrl}
          onCloseRequest={() => {
            setZoomed(false);
          }}
        />
      )}
    </>
  );
};

export default ImageUploader;
