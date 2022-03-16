import React from 'react';
import { sortBy } from 'lodash';

import {
  Heading,
  Box,
  Text,
  OrderedList,
  ListItem,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import { Break_Type_Enum } from '@generated/graphql';

import {
  TBreakResult,
  TBreakResultRandom,
  TBreakResultPick,
  TBreakResultDraft,
  TBreakResultList,
  TDatasetLineItem,
} from '@customTypes/breaks';

const BreakResult: React.FC<TBreakResult> = ({
  breakId,
  breakTitle,
  type,
  results,
}) => {
  const list: TBreakResultList = [];

  if (
    type === Break_Type_Enum.RandomDivision ||
    type === Break_Type_Enum.RandomTeam
  ) {
    results.map((res: TBreakResultRandom) => {
      res.items.map((item: TDatasetLineItem | string) => {
        list.push({
          username: res.username !== null ? res.username.trim(): '',
          title: typeof item === 'object' ? item.name.trim() : item.trim(),
        });
      });
    });
  } else if (type === Break_Type_Enum.HitDraft) {
    results.map((res: TBreakResultDraft) => {
      list.push({
        username: res.username !== null ? res.username.trim(): '',
      });
    });
  } else if (
    type === Break_Type_Enum.PickYourTeam ||
    type === Break_Type_Enum.PickYourDivision ||
    type === Break_Type_Enum.Personal
  ) {
    results.map((res: TBreakResultPick) => {
      if (res.Order?.User) {
        list.push({
          username: res.Order.User.username,
          title: res.title,
        });
      }
    });
  }

  return (
    <Box mb={4}>
      <Accordion defaultIndex={0} allowToggle>
        <AccordionItem borderWidth={0}>
          <Heading as="h3" bg="gray.100">
            <AccordionButton p={5} borderWidth={0}>
              <Text
                flex="1"
                textAlign="left"
                fontSize="lg"
                fontWeight="bold"
                mb={0}
              >
                Results:{' '}
                <Text as="span" fontWeight="normal" m={0}>
                  {breakTitle}
                </Text>
              </Text>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel bg="gray.50">
            {(type === Break_Type_Enum.RandomDivision ||
              type === Break_Type_Enum.RandomTeam ||
              type === Break_Type_Enum.PickYourDivision ||
              type === Break_Type_Enum.PickYourTeam ||
              type === Break_Type_Enum.Personal) && (
              <SimpleGrid
                autoFlow="column"
                templateColumns="1fr 1fr"
                templateRows={`repeat(${Math.ceil(list.length / 2)}, 1fr)`}
                my={4}
              >
                {sortBy(list, ['title', 'username']).map((result, idx) => (
                  <Text key={`${breakId}-result-${idx}`} my={1} pr={4}>
                    <strong>{result.title}</strong> - {result.username}
                  </Text>
                ))}
              </SimpleGrid>
            )}

            {type === Break_Type_Enum.HitDraft && (
              <OrderedList my={4}>
                {list.map((result, idx) => (
                  <ListItem key={`${breakId}-result-${idx}`} my={2}>
                    <strong>{result.username}</strong>
                  </ListItem>
                ))}
              </OrderedList>
            )}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Text display="none">{JSON.stringify(results)}</Text>
    </Box>
  );
};

export default BreakResult;
