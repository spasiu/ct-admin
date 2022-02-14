import { Maybe } from "graphql/jsutils/Maybe";

export type TSelectedHit = {
  id: string;
  user_id: string;
  break_id: string;
  product_id: string;
  image_front: string;
  image_back?: string | null;
  card_number: string;
  player: string;
  parallel?: string | null;
  insert?: string | null;
  rookie_card?: boolean | null;
  memoribillia?: string | null;
  autograph?: boolean | null;
  numbered?: number | null;
  published: boolean;
  User: {
    id: string;
    username?: string | null;
  };
  Break: {
    id: string;
    title: string;
    Event: {
      start_time?: string | null;
    };
  };
  Product: TAddHitProduct;
};

export type TAddHitUser = {
  id: string;
  username?: string | null;
};

export type TAddHitProduct = {
  id: string;
  description?: Maybe<string>;
  year: string;
  category: string;
  manufacturer: string;
  brand: string;
  series?: Maybe<string>;
};

export type TAddHitFormData = {
  username?: string;
  user_id: string;
  break_id: string;
  product_id: string;
  image_front: string;
  image_back: string | null;
  card_number: string | null;
  player: string | null;
  parallel: string | null;
  insert: string | null;
  rookie_card: boolean | null;
  memoribillia: string | null;
  autograph: boolean | null;
  numbered: number | null;
  grader: string | null;
  grade: string | null;
  published:boolean;
};

export type TAddHitPreviewData = TAddHitFormData & {Product: TAddHitProduct}

export type TAddHitFormProps = {
  hit?: TSelectedHit;
  callback: () => void;
};
