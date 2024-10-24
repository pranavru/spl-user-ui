import { GridColDef } from "@mui/x-data-grid";
import { ActiveToggle } from "../common/columns/active-toggle";
import { Address } from "../common/columns/address";
import { ContactInfo } from "../common/columns/contact-info";
import { Roles } from "../common/columns/roles";
import { MandalColumn } from "../common/columns/mandal";
import { ColumnTypography } from "../common/columns/column-typography";
import { ReferenceContactsColumn } from "./views/columns/reference-contacts";
import {
  formatDate } from "./helpers";
import { UserName } from "./views/columns/user-name";
import { ActionColumn } from "./views/columns/actions";
import { User } from "./types";

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name', 
    width: 175,
    renderCell: (params) => <UserName params={params} />,
    valueGetter: (_, row : User) => `${row.name || ''}`
  }, {
    field: 'email',
    headerName: 'Contact Info', 
    width: 200,
    renderCell: ContactInfo,
    valueGetter: (_, row: User) => `${row.email || ''} ${row.phoneNumber || ''}` 
  }, {
    field: 'address',
    headerName: 'Address', 
    width: 225,
    renderCell: Address,
    valueGetter: (_, row : User) => `${row.address.addressLine1} ${row.address.addressLine1} ${row.address.city} ${row.address.state} ${row.address.country} ${row.address.postalCode}`
  }, {
    field: 'dateOfBirth',
    headerName: 'DOB', 
    width: 150,
    renderCell: (params) => <ColumnTypography params={params} />,
    valueGetter: (_, row : User) => row.dateOfBirth
  }, {
    field: 'mandal',
    headerName: 'Mandal', 
    width: 205,
    renderCell: MandalColumn,
    valueGetter: (_, row : User) => `${row.mandal?.name} ${row.mandal?.zone?.name}`
  }, {
    field: 'role',
    headerName: 'Role', 
    width: 135,
    renderCell: Roles,
    valueGetter: (_, row : User) => `${row.role?.role}`
  }, { 
    field: 'referenceContacts', 
    headerName: 'Reference Contacts', 
    width: 160,  
    renderCell: (params) => <ReferenceContactsColumn params={params} />,
    valueGetter: (_, row : User) => `${row.referenceContacts?.primaryContact.name} ${row.referenceContacts?.secondaryContact?.name}`
  }, {
    field: 'isActive',
    headerName: 'Active', 
    width: 100,
    renderCell: ActiveToggle,
    valueGetter: (_, row : User) => row.isActive ? 'active' : 'inactive'
  }, {
    field: 'createdAt',
    headerName: 'Created At', 
    width: 200,
    renderCell: (params) => <ColumnTypography params={params} value={formatDate(params.value)} />,
    valueGetter: (_, row : User) => formatDate(row.createdAt)
  }, {
    field: 'updatedAt',
    headerName: 'Updated At', 
    width: 200,
    renderCell: (params) => <ColumnTypography params={params} value={formatDate(params.value)} />,
    valueGetter: (_, row : User) => formatDate(row.updatedAt)
  }, {
    field: 'actions',
    headerName: 'Actions', 
    width: 100,
    renderCell: (params) => <ActionColumn params={params} />}
];