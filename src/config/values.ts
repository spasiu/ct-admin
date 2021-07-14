import { Break_Type_Enum, Unit_Of_Measure_Enum } from '@generated/graphql';

export const BreakTypeValues = [
  {
    label: 'Random Team',
    value: Break_Type_Enum.RandomTeam,
  },
  {
    label: 'Random Division',
    value: Break_Type_Enum.RandomDivision,
  },
  {
    label: 'Pick Your Team',
    value: Break_Type_Enum.PickYourTeam,
  },
  {
    label: 'Pick Your Division',
    value: Break_Type_Enum.PickYourDivision,
  },
  {
    label: 'Hit Draft',
    value: Break_Type_Enum.HitDraft,
  },
  {
    label: 'Personal',
    value: Break_Type_Enum.Personal,
  },
];

export const UnitOfMeasureValues = [
  { label: 'Case', value: Unit_Of_Measure_Enum.Case },
  { label: 'Box', value: Unit_Of_Measure_Enum.Box },
  { label: 'Pack', value: Unit_Of_Measure_Enum.Pack },
  { label: 'Card', value: Unit_Of_Measure_Enum.Card },
];
