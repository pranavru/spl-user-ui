import { ReferenceContacts } from "../users/types";

export const nullValueHelper = (value: ReferenceContacts | null, key: keyof ReferenceContacts) => 
  value !== null && (key === 'primary' || key === 'secondary') 
    ? value[key]?.id ?? null 
    : value?.[key] ?? null;
