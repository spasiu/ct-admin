export type TFormModal = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  size?: string;
  closeOnEsc?: boolean;
  setModalOpen: (n: boolean) => void;
};

export type TActionBar = {
  children?: React.ReactNode;
};

export type TArchiveConfirmProps = {
  callback: () => void;
};

export type TAutocompleteProps = {
  field: string;
  defaultValue?: string | null;
  callback: (input: string) => void;
  isInvalid: boolean;
};

export type TAutocompleteSearchResult = {
  field: string;
  value: string;
};

export type TAutocompleteBreaksEventsProps = {
  defaultValue?: string | null;
  isInvalid: boolean;
  callback: (input: string) => void;
};

export type TAutocompleteBreaksEventsSearchResult = {
  id: string;
  title: string;
};

export type TChat = {
  eventId: string;
};

export type TMessage = {
  image: string;
  username: string;
  text: string;
  user_id: string;
};

export type TChatUserDetails = {
  id?: string;
  image?: string;
  username?: string;
} | null;

export type THeaderProps = {
  pageNav?: string;
};

export type TImageInputErrors = {
  type?: string;
  required?: string;
};

export type TImageUploadProps = {
  imageFolder: string;
  imagePath?: string | null;
  label?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageFit?: string;
  callback: (url: string) => void;
};

export type TSeo = {
  title?: string;
};

export type TSidebar = {
  children?: React.ReactNode;
  px?: (number | string | null)[];
};

export type TStatDisplay = {
  label: string;
  value: string | number;
};
