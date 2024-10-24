import { Mandal } from "../mandals/types";
import { Role, ReferenceContacts } from "../users/types";

export const nullValueHelper = (value: Role | Mandal | null) => value ? value.id : null;

export const referenceContactNullValueHelper = (value: ReferenceContacts | null, key: keyof ReferenceContacts) => 
  value !== null && (key === 'primaryContact' || key === 'secondaryContact') 
    ? value[key]?.id ?? null 
    : value?.[key] ?? null;
