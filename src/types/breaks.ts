import { Break_Type_Enum, Scalars } from '@generated/graphql';

export type TBreakLineItem = {
  name: string;
  short_code: string;
  cost: number;
  city?: string;
};

export type TDatasetLineItem = {
  name: string;
  short_code: string;
  color: string;
  color_secondary: string;
  city?: string;
  cost?: number;
};

export type TAddBreakFormData = {
  id?: string;
  title: string;
  description: string;
  event_id: string;
  image: string;
  break_type: Break_Type_Enum;
  spots: number | null;
  teams_per_spot?: number | null;
  price: number;
  lineItems: TBreakLineItem[];
  datasetItems: TDatasetLineItem[];
};

export type TBreakData = {
  id?: string;
  title: string;
  description: string;
  image: string;
  break_type: string;
  spots: number;
  teams_per_spot?: number | null | undefined;
  price?: number | null;
  line_items?: TBreakLineItem[];
  dataset?: TDatasetLineItem[];
  status: string;
  BreakProductItems: {
    id: string;
    title: string;
    price: number;
  }[];
};

export type TAddBreakFormProps = {
  event_id?: string;
  event_title?: string;
  break_data?: TBreakData;
  callback: () => void;
};

export type TBreakResult = {
  breakTitle: string;
  breakId: Scalars['uuid'];
  type: Break_Type_Enum;
  results: Scalars['jsonb'];
};

export type TBreakResultRandom = {
  image: string;
  items: TDatasetLineItem[] | string[];
  user_id: string;
  username: string;
};

export type TBreakResultPick = {
  title: string;
  Order?: {
    User: {
      username: string;
    };
  };
};

export type TBreakResultDraft = {
  image: string;
  user_id: string;
  username: string;
};

export type TBreakResultList = {
  username: string;
  title?: string;
}[];

export type TStartBreakData = {
  breakId?: string;
  unsoldCount?: number;
};
