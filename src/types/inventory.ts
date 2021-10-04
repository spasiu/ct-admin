export type TInventoryAutcomplete = {
  label: string;
  value: string;
  year: string;
  sport: string;
};

export type TAddInventoryFormData = {
  supplier: string;
  location: string;
  purchase_date: Date;
  cost_basis: number;
  units: number;
};

export type TAddInventoryFormProps = {
  product_id: string;
  inventoryItem?: {
    id: string;
    supplier: string;
    location: string;
    purchase_date: string;
    cost_basis: number;
  };
  callback: () => void;
};
