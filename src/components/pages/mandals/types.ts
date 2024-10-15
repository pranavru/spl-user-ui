export type Mandal = {
  id: number;
  name: string;
  location: string;
}

export type Mandals = Mandal[];

export type MandalsPage = {
  isLoading: boolean;
  hasError: boolean;
  data: Mandals;
};