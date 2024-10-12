import { Users } from "./types";

export const localUserDB: Users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "124-456-7890",
    isActive: true,
    role: [
      {
        id: 1,
        name: "Admin",
        description: "Admin Role"
      }, {
        id: 2,
        name: "User",
        description: "User Role"
      }, {
        id: 3,
        name: "Potential",
        description: "User Role"
      }, {
        id: 4,
        name: "Guest",
        description: "User Role"
      }
    ],
    createdAt: "2024-10-11T19:40:59.513Z",
    updatedAt: "2024-10-11T19:40:59.513Z",
    address: {
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      city: "New York",
      state: "NY",
      zipcode: "10001",
      country: "USA",
      geo: {
        lat: "40.7128",
        lng: "-74.0060"
      }
    },
    followUp: {
      primary: "John Smith",
      secondary: "J Ray"
    },
    dateOfBirth: "10-Oct-1980"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "201-554-8745",
    isActive: true,
    role: [{
      id: 2,
      name: "User",
      description: "User Role"
    }],
    createdAt: "2024-10-11T19:40:59.513Z",
    updatedAt: "2024-10-11T19:40:59.513Z",
    address: {
      addressLine1: "456 Elm St",
      addressLine2: "",
      city: "Los Angeles",
      state: "CA",
      zipcode: "90001",
      country: "USA",
      geo: {
        lat: "34.0522",
        lng: "-118.2437"
      }
    },
    followUp: {
      primary: "Hari Seldon",
      secondary: "Pray F. Rain"
    },
    dateOfBirth: "10-Jan-1990"
  }, {
    id: 3,
    name: "John Smith",
    email: "xyz@example.com",
    phone: "201-554-8745",
    isActive: true,
    role: [{
      id: 2,
      name: "User",
      description: "User Role"
    }],
    createdAt: "2024-10-11T19:40:59.513Z",
    updatedAt: "2024-10-11T19:40:59.513Z",
    address: {
      addressLine1: "456 Elm St",
      addressLine2: "",
      city: "Los Angeles",
      state: "CA",
      zipcode: "90001",
      country: "USA",
      geo: {
        lat: "34.0522",
        lng: "-118.2437"
      }
    },
    followUp: {
      primary: "Hari Seldon",
      secondary: "Pray F. Rain"
    },
    dateOfBirth: "10-Jan-1990"
  }
];
