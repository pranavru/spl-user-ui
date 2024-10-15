import { GridColDef } from "@mui/x-data-grid";
import { ActiveToggle } from "../common/columns/active-toggle";
import { Address } from "../common/columns/address";
import { ContactInfo } from "../common/columns/contact-info";
import { Roles } from "../common/columns/roles";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150},
  { field: 'email', headerName: 'Contact Info', width: 200, renderCell: ContactInfo},
  { field: 'address', headerName: 'Address', width: 200, renderCell: Address},
  { field: 'role', headerName: 'Role', width: 150, renderCell: Roles},
  { field: 'dateOfBirth', headerName: 'DOB', width: 150},
  { field: 'isActive', headerName: 'Active', width: 100, renderCell: ActiveToggle },
];