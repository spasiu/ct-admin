export type TEventSelectedBreak = {
  id?: string;
  title: string;
  description: string;
  image: string;
  break_type: string;
  spots: number;
  teams_per_spot?: number | null | undefined;
  price?: number;
  status: string;
  line_items?: {
    value: string;
    cost: number;
  }[];
  dataset?: {
    value: string;
  }[];
  BreakProductItems: {
    id: string;
    title: string;
    price: number;
  }[];
};

export type TSelectedEvent = {
  id: string;
  title: string;
  description: string;
  start_time: string;
  status: string;
  image: string;
};

export type TGoLiveConfirm = {
  isOpen: boolean;
  cancelRef: React.MutableRefObject<null>;
  onClose: () => void;
  callback: () => void;
};

export type TAddEventFormData = {
  id?: string;
  title: string;
  description: string;
  start_time: Date;
  image: string;
};

export type TAddEventFormProps = {
  event?: {
    id: string;
    title: string;
    description: string;
    start_time: string;
    status: string;
    image: string;
  };
  callback: () => void;
};
