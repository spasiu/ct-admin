import React from 'react';

import { Box, Text } from '@chakra-ui/react';

type TStatDisplayProps = {
  label: string;
  value: string | number;
};

const StatDisplay: React.FC<TStatDisplayProps> = ({
  label,
  value,
}: TStatDisplayProps) => (
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
