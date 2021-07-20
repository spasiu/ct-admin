import React, { useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import Imgix from 'react-imgix';

import { Flex, Icon, Button, Box, Text } from '@chakra-ui/react';

import { storage } from '@config/firebase';

type TInputErrors = {
  type?: string;
  required?: string;
};

type TUploadProps = {
  imageFolder: string;
  imagePath?: string;
  callback: (url: string) => void;
};

const ImageUploader: React.FC<TUploadProps> = ({
  imageFolder,
  imagePath,
  callback,
}) => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(
    imagePath ? `${process.env.NEXT_PUBLIC_IMG_URL}${imagePath}` : undefined,
  );
  const [imageErrors, setImageErrors] = useState<TInputErrors>({});
  const fileInput = React.createRef<HTMLInputElement>();

  const handleFileUpload = () => {
    const fileErrors: TInputErrors = {};
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
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Flex
        bg="background"
        justifyContent="center"
        alignItems="center"
        mx="auto"
        mb={5}
        sx={{
          width: '130px',
          height: '150px',
          cursor: 'pointer',
        }}
      >
        {imageUrl && (
          <Imgix
            src={imageUrl}
            width={130}
            height={150}
            imgixParams={{ fit: 'crop' }}
          />
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
  );
};

export default ImageUploader;
