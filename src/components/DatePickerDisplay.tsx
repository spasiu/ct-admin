import React from 'react';
import { MdWatchLater } from 'react-icons/md';

import { Button, Flex, Icon, forwardRef } from '@chakra-ui/react';

const DatePickerDisplay = forwardRef(({ value, onClick }, ref) => (
  <Flex alignItems="center" onClick={onClick} ref={ref} fontSize="sm">
    <Button p={0} borderRadius="50%" mr={2}>
      <Icon as={MdWatchLater} w={4} h={4} />
    </Button>
    {value}
  </Flex>
));

export default DatePickerDisplay;
