import React from 'react';

import { Box, Text } from '@chakra-ui/react';

import { TStatDisplay } from '@customTypes/components';

const StatDisplay: React.FC<TStatDisplay> = ({
  label,
  value,
}: TStatDisplay) => (
  <Box>
    <Text fontSize="md" mb={0}>
      {label}
    </Text>
    <Text fontSize="3xl" fontWeight="bold" mb={0}>
      {value}
    </Text>
  </Box>
);

export default StatDisplay;
