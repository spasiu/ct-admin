import * as yup from 'yup';
import { Break_Type_Enum } from '@generated/graphql';

export const schema = yup.object().shape({
  title: yup.string().required('Required'),
  description: yup.string().required('Required'),
  event_id: yup.string().required('Required'),
  break_type: yup.string().required('Required'),
  image: yup.string().required('Image is Required'),
  spots: yup
    .number()
    .transform((cv) => (isNaN(cv) ? undefined : cv))
    .when('break_type', {
      is: (val: string) => val && val !== Break_Type_Enum.Personal,
      then: yup
        .number()
        .typeError('Must be a number')
        .integer('Must be an whole number')
        .min(1, 'Must be greater than 0')
        .required('Required'),
    }),
  teams_per_spot: yup
    .number()
    .transform((cv) => (isNaN(cv) ? undefined : cv))
    .when('break_type', {
      is: (val: string) =>
        val &&
        (val === Break_Type_Enum.RandomTeam ||
          val === Break_Type_Enum.RandomDivision),
      then: yup
        .number()
        .typeError('Must be a number')
        .integer('Must be an whole number')
        .min(1, 'Must be greater than 0')
        .required('Required'),
    }),
  price: yup
    .number()
    .transform((cv) => (isNaN(cv) ? undefined : cv))
    .when('break_type', {
      is: (val: string) =>
        val &&
        val !== Break_Type_Enum.PickYourTeam &&
        val !== Break_Type_Enum.PickYourDivision,
      then: yup
        .number()
        .typeError('Must be a number')
        .test('is-currency', 'Must be a valid price', (value) => {
          const currRegex = /^[1-9]\d*(\.\d{1,2})?$/;

          return value ? currRegex.test(String(value)) : false;
        })
        .min(0, 'Must be greater than 0')
        .required('Required'),
    }),
  lineItems: yup.array().of(
    yup.object().shape({
      value: yup.string().required('Required'),
      cost: yup
        .number()
        .typeError('Must be a number')
        .test('is-currency', 'Must be a valid price', (value) => {
          const currRegex = /^[1-9]\d*(\.\d{1,2})?$/;

          return value ? currRegex.test(String(value)) : false;
        })
        .min(0, 'Must be greater than 0')
        .required('Required'),
    }),
  ),
  datasetItems: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Required'),
      city: yup.string().required('Required'),
      short_code: yup.string().required('Required'),
      color: yup
        .string()
        .test('is-color', 'Must be a valid color', (value) => {
          const currRegex = /^#[a-fA-F0-9]{6}$/;

          return value ? currRegex.test(String(value)) : false;
        })
        .required('Required'),
      color_secondary: yup
        .string()
        .test('is-color', 'Must be a valid color', (value) => {
          const currRegex = /^#[a-fA-F0-9]{6}$/;

          return value ? currRegex.test(String(value)) : false;
        })
        .required('Required'),
    }),
  ),
});
