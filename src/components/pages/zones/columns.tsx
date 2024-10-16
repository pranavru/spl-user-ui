import { GridColDef } from "@mui/x-data-grid";
import { ColumnTypography } from "../common/columns/column-typography";
import { ZoneName } from "./views/columns/zone-name";
import { ZoneLocation } from "./views/columns/zone-location";
import { DeleteZone } from "./views/columns/delete-zone";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150, renderCell: ColumnTypography},
  { field: 'location', headerName: 'Description', width: 200, renderCell: ColumnTypography}
];

export const editableColumns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 0.5, renderCell: ZoneName},
  { field: 'location', headerName: 'Description', flex: 0.5, renderCell: ZoneLocation},
  { field: 'actions', headerName: 'Actions', renderCell: DeleteZone}
];