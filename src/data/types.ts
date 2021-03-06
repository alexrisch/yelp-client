
export interface RequestData {
  search: {
    total: number;
    business: Business[];
  } 
} 

export interface Business {
  name: string;
  rating: number;
  location: Location;
  coordinates: Coordinates;
}

export interface Location {
  address1: string;
  city: string;
  state: string;
  country: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}
