import { GridColDef } from "@mui/x-data-grid";
import { ActiveToggle } from "../common/columns/active-toggle";
import { Address } from "../common/columns/address";
import { ContactInfo } from "../common/columns/contact-info";
import { ColumnTypography } from "../common/columns/column-typography";
import { formatDate } from "./helpers";
import { UserName } from "./views/columns/user-name";
import { User } from "./types";
import { ReferenceContactsColumn } from "./views/columns/reference-contacts";
import { Roles } from "../common/columns/roles";

export const columns: GridColDef[] = [
  {
    flex: 1,
    field: 'name',
    headerName: 'Name', 
    renderCell: (params) => <UserName params={params} />,
    valueGetter: (_, row : User) => `${row.name || ''}`
  }, {
    flex: 1,
    field: 'email',
    headerName: 'Contact Info', 
    renderCell: ContactInfo,
    valueGetter: (_, row: User) => `${row.email || ''} ${row.phone || ''}` 
  }, {
    flex: 1,
    field: 'address',
    headerName: 'Address', 
    renderCell: Address,
    valueGetter: (_, row : User) => row.address ?  `${row.address.street} ${row.address.city} ${row.address.state} ${row.address.zipCode}` : ''
  }, {
    flex: 1,
    field: 'dateOfBirth',
    headerName: 'DOB', 
    renderCell: (params) => <ColumnTypography params={params} />,
    valueGetter: (_, row : User) => formatDate(row.dateOfBirth)
  }, {
    flex: 0.6,
    field: 'role',
    headerName: 'Role', 
    renderCell: Roles,
    valueGetter: (_, row : User) => row.role
  }, { 
    flex: 1,
    field: 'referenceContacts', 
    headerName: 'Reference Contacts', 
    renderCell: (params) => <ReferenceContactsColumn params={params} />,
    valueGetter: (_, row : User) => `${row.referenceContacts?.primary?.name} ${row.referenceContacts?.secondary?.name}`
  }, {
    flex: 0.5,
    field: 'active',
    headerName: 'Active', 
    renderCell: ActiveToggle,
    valueGetter: (_, row : User) => row.active ? 'active' : 'inactive'
  }, {
    flex: 1,
    field: 'createdAt',
    headerName: 'Created At', 
    renderCell: (params) => <ColumnTypography params={params} value={formatDate(params.value)} />,
    valueGetter: (_, row : User) => formatDate(row.createdAt)
  }, {
    flex: 1,
    field: 'updatedAt',
    headerName: 'Updated At', 
    renderCell: (params) => <ColumnTypography params={params} value={formatDate(params.value)} />,
    valueGetter: (_, row : User) => formatDate(row.updatedAt)
  }
];