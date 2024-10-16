import { GridColDef } from "@mui/x-data-grid";
import { MandalName } from "./views/columns/mandal-name";
import { MandalLocation } from "./views/columns/mandal-location";
import { DeleteMandal } from "./views/columns/delete-zone";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150},
  { field: 'location', headerName: 'Description', width: 200}
];

export const editableColumns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 0.5, renderCell: MandalName},
  { field: 'location', headerName: 'Description', flex: 0.5, renderCell: MandalLocation},
  { field: 'actions', headerName: 'Actions', renderCell: DeleteMandal}
];