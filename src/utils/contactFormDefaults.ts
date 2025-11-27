export type TContactFormData = {
  name: string;
  email: string;
  company: string;
  country: string;
};

const EMPTY_FIELD_VALUE = String();

export const createEmptyContactForm = (): TContactFormData => ({
  name: EMPTY_FIELD_VALUE,
  email: EMPTY_FIELD_VALUE,
  company: EMPTY_FIELD_VALUE,
  country: EMPTY_FIELD_VALUE
});

