export type TBreakerProfileFormData = {
  first_name: string | null;
  last_name: string | null;
  image: string | null;
  bio: string | null;
  video: string | null;
  instagram: string | null;
  twitter: string | null;
  facebook: string | null;
  linkedin: string | null;
  tiktok: string | null;
};

export type TBreakerProfileFormProps = {
  id: string;
  profile?: {
    first_name?: string | null;
    last_name?: string | null;
    image?: string | null;
    bio?: string | null;
    video?: string | null;
    instagram?: string | null;
    twitter?: string | null;
    facebook?: string | null;
    linkedin?: string | null;
    tiktok?: string | null;
  };
  callback: () => void;
};

export type TAddUserFormData = {
  email: string;
  isAdmin: boolean;
  isBreaker: boolean;
};

export type TAddUserFormProps = {
  callback?: () => void;
};
