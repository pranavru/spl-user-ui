import { GridColDef } from "@mui/x-data-grid";
import { ActiveToggle } from "../common/columns/active-toggle";
import { Address } from "../common/columns/address";
import { ContactInfo } from "../common/columns/contact-info";
import { FollowUp } from "../common/columns/follow-up";
import { Roles } from "../common/columns/roles";
import { formatDate } from "./helpers";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150},
  { field: 'email', headerName: 'Contact Info', width: 200, renderCell: ContactInfo},
  { field: 'address', headerName: 'Address', width: 200, renderCell: Address},
  { field: 'followUp', headerName: 'Follow Up', width: 150, renderCell: FollowUp},
  { field: 'role', headerName: 'Tags', width: 150, renderCell: Roles},
  { field: 'dateOfBirth', headerName: 'DOB', width: 150},
  { field: 'isActive', headerName: 'Active', width: 100, renderCell: ActiveToggle },
  { field: 'createdAt', headerName: 'Created At', width: 175, renderCell: (params) => formatDate(params.value) },
  { field: 'updatedAt', headerName: 'Updated At', width: 175, renderCell: (params) => formatDate(params.value) },
];