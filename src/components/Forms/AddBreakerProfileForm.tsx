import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Box,
} from '@chakra-ui/react';

import { useUpdateBreakerProfileMutation } from '@generated/graphql';

import { gridSpace } from '@config/chakra/constants';

import ImageUploader from '@components/ImageUploader';

import {
  TBreakerProfileFormData,
  TBreakerProfileFormProps,
} from '@customTypes/users';

const schema = yup.object().shape({
  first_name: yup.string().required('Required'),
  last_name: yup.string().required('Required'),
  image: yup.string().required('Required'),
  bio: yup.string().required('Required'),
  video: yup.string().url().required('Required'),
  instagram: yup.string().url().nullable(),
  twitter: yup.string().url().nullable(),
  facebook: yup.string().url().nullable(),
  linkedin: yup.string().url().nullable(),
  tiktok: yup.string().url().nullable(),
});

/**
 *
 * TODO: Handle errors
 *
 */
const AddBreakerProfileForm: React.FC<TBreakerProfileFormProps> = ({
  id,
  profile,
  callback,
}) => {
  const [
    updateProfile,
    {
      data: updateMutationData,
      loading: updateMutationLoading,
      error: updateMutationError,
    },
  ] = useUpdateBreakerProfileMutation({ onCompleted: callback });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TBreakerProfileFormData>({
    resolver: yupResolver(schema),
    defaultValues: { ...profile },
  });

  /**
   * Handle form submission
   * @param result object Validated form result
   */
  const onSubmit = (result: TBreakerProfileFormData) => {
    const submitData = {
      id,
      first_name: result.first_name ? result.first_name : '',
      last_name: result.last_name ? result.last_name : '',
      image: result.image ? result.image : '',
      profile: {
        user_id: id,
        bio: result.bio ? result.bio : '',
        video: result.video ? result.video : '',
        instagram: result.instagram ? result.instagram : null,
        twitter: result.twitter ? result.twitter : null,
        facebook: result.facebook ? result.facebook : null,
        linkedin: result.linkedin ? result.linkedin : null,
        tiktok: result.tiktok ? result.tiktok : null,
      },
    };

    updateProfile({ variables: submitData });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Box mb={5}>
        <ImageUploader
          imagePath={profile?.image}
          imageFolder="profile"
          callback={(url: string) => {
            setValue('image', url);
          }}
        />
      </Box>

      <Flex mx={gridSpace.parent} mb={5}>
        <FormControl
          isInvalid={!!errors.first_name}
          width="50%"
          px={gridSpace.child}
        >
          <FormLabel>First Name</FormLabel>
          <Input {...register('first_name')} />
          <FormErrorMessage>{errors.first_name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={!!errors.last_name}
          width="50%"
          px={gridSpace.child}
        >
          <FormLabel>Last Name</FormLabel>
          <Input {...register('last_name')} />
          <FormErrorMessage>{errors.last_name?.message}</FormErrorMessage>
        </FormControl>
      </Flex>

      <FormControl isInvalid={!!errors.bio} mb={5}>
        <FormLabel>Bio</FormLabel>
        <Input {...register('bio')} />
        <FormErrorMessage>{errors.bio?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.video} mb={5}>
        <FormLabel>Video URL</FormLabel>
        <Input {...register('video')} />
        <FormErrorMessage>{errors.video?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.instagram} mb={5}>
        <FormLabel>Instagram URL</FormLabel>
        <Input {...register('instagram')} />
        <FormErrorMessage>{errors.instagram?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.twitter} mb={5}>
        <FormLabel>Twitter URL</FormLabel>
        <Input {...register('twitter')} />
        <FormErrorMessage>{errors.twitter?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.facebook} mb={5}>
        <FormLabel>Facebook URL</FormLabel>
        <Input {...register('facebook')} />
        <FormErrorMessage>{errors.facebook?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.linkedin} mb={5}>
        <FormLabel>Linkedin URL</FormLabel>
        <Input {...register('linkedin')} />
        <FormErrorMessage>{errors.linkedin?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.tiktok} mb={5}>
        <FormLabel>Tiktok URL</FormLabel>
        <Input {...register('tiktok')} />
        <FormErrorMessage>{errors.tiktok?.message}</FormErrorMessage>
      </FormControl>

      <Flex justifyContent="center">
        <Button mb={4} px={10} colorScheme="blue" type="submit">
          Save
        </Button>
      </Flex>
    </form>
  );
};

export default AddBreakerProfileForm;
