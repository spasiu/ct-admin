export type TSelectedHit = {
  id: string;
  user_id: string;
  break_id: string;
  image_front: string;
  image_back?: string | null;
  year: string;
  category: string;
  manufacturer: string;
  brand: string;
  series?: string | null;
  card_number: string;
  player: string;
  parallel?: string | null;
  insert?: string | null;
  rookie_card?: boolean | null;
  memoribillia?: string | null;
  autograph?: boolean | null;
  numbered?: number | null;
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
};

export type TAddHitUser = {
  id: string;
  username?: string | null;
};

export type TAddHitFormData = {
  user_id: string;
  break_id: string;
  image_front: string;
  image_back: string | null;
  year: string;
  manufacturer: string;
  brand: string;
  series: string | null;
  category: string;
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
};

export type TAddHitFormProps = {
  hit?: {
    id: string;
    user_id: string;
    break_id: string;
    image_front: string;
    image_back?: string | null;
    year: string;
    category: string;
    manufacturer: string;
    brand: string;
    series?: string | null;
    card_number: string;
    player: string;
    parallel?: string | null;
    insert?: string | null;
    rookie_card?: boolean | null;
    memoribillia?: string | null;
    autograph?: boolean | null;
    numbered?: number | null;
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
  };
  callback: () => void;
};
