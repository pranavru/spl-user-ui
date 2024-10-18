import { GridColDef } from "@mui/x-data-grid";
import { ActiveToggle } from "../common/columns/active-toggle";
import { Address } from "../common/columns/address";
import { ContactInfo } from "../common/columns/contact-info";
import { Roles } from "../common/columns/roles";
import { MandalColumn } from "../common/columns/mandal";
import { ColumnTypography } from "../common/columns/column-typography";
import { ReferenceContactsColumn } from "./views/columns/reference-contacts";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150, renderCell: (params) => <ColumnTypography params={params} />},
  { field: 'email', headerName: 'Contact Info', width: 200, renderCell: ContactInfo},
  { field: 'address', headerName: 'Address', width: 200, renderCell: Address},
  { field: 'dateOfBirth', headerName: 'DOB', width: 150, renderCell: (params) => <ColumnTypography params={params} />},
  { field: 'mandal', headerName: 'Mandal', width: 250, renderCell: MandalColumn },
  { field: 'role', headerName: 'Role', width: 150, renderCell: Roles},
  { field: 'referenceContacts', headerName: 'Reference Contacts', width: 250,  renderCell: (params) => <ReferenceContactsColumn params={params} />},
  { field: 'isActive', headerName: 'Active', width: 100, renderCell: ActiveToggle },
];