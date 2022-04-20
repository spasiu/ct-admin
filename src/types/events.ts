import { TBreakLineItem, TDatasetLineItem } from '@customTypes/breaks';

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
  line_items?: TBreakLineItem[];
  dataset?: TDatasetLineItem[];
  BreakProductItems: {
    id: string;
    title: string;
    price: number;
    bc_product_id: number;
  }[];
};

export type TSelectedEvent = {
  id: string;
  title: string;
  description: string;
  publishing_token?: string | null;
  stream_name?: string | null;
  start_time?: string | null;
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
  start_time?: Date | null;
  image: string;
  video_url: string;
};

export type TAddEventFormProps = {
  event?: {
    id: string;
    title: string;
    description: string;
    start_time?: string | null;
    status: string;
    image: string;
  };
  callback: () => void;
};
