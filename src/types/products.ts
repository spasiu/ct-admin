import { Unit_Of_Measure_Enum } from '@generated/graphql';

export type TSelectedProduct = {
  id: string;
  unit_of_measure: string;
  year: string;
  manufacturer: string;
  brand: string;
  series?: string | null;
  category: string;
  type?: string | null;
  boxes_per_case?: number | null;
  packs_per_box?: number | null;
  cards_per_pack?: number | null;
  card_number?: string | null;
  player?: string | null;
  parallel?: string | null;
  insert?: string | null;
  rookie_card?: boolean | null;
  memoribillia?: string | null;
  autograph?: boolean | null;
  numbered?: number | null;
  grader?: string | null;
  grade?: string | null;
};

export type TProductSelectedInventory = {
  id: string;
  supplier: string;
  location: string;
  purchase_date: string;
  cost_basis: number;
};

export type TAddProductFormData = {
  unit_of_measure: Unit_Of_Measure_Enum;
  year: string;
  manufacturer: string;
  brand: string;
  series: string | null;
  category: string;
  subcategory: string | null;
  type: string | null;
  boxes_per_case: number | null;
  packs_per_box: number | null;
  cards_per_pack: number | null;
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
  break_products?: [];
};

export type TAddProductFormProps = {
  product?: {
    id: string;
    unit_of_measure: string;
    year: string;
    manufacturer: string;
    brand: string;
    series?: string | null;
    category: string;
    type?: string | null;
    boxes_per_case?: number | null;
    packs_per_box?: number | null;
    cards_per_pack?: number | null;
    card_number?: string | null;
    player?: string | null;
    parallel?: string | null;
    insert?: string | null;
    rookie_card?: boolean | null;
    memoribillia?: string | null;
    autograph?: boolean | null;
    numbered?: number | null;
    grader?: string | null;
    grade?: string | null;
  };
  callback: () => void;
};

export type TFilterProductsFormData = {
  search: string;
};

export type TFilterProductsFormProps = {
  callback: (search: string) => void;
};

export type TAddDatasetProps = {
  year: string;
  category: string;
  subcategory: string;
  datasetHandler:
    (year: number, category: string, subcategory: string | null, datasetType: string | null, dataset: Object[]) => Promise<boolean>
  callback: () => void;
}
