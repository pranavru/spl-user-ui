export type Zone = {
  id: number;
  name: string;
  location: string;
}

export type Zones = Zone[];

export type ZonesPage = {
  isLoading: boolean;
  hasError: boolean;
  data: Zones;
};