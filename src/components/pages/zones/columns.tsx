import { GridColDef } from "@mui/x-data-grid";
import { ColumnTypography } from "../common/columns/column-typography";
import { ZoneName } from "./views/columns/zone-name";
import { ZoneLocation } from "./views/columns/zone-location";
import { DeleteZone } from "./views/columns/delete-zone";
import { ZoneDescription } from "./views/columns/zone-description";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 0.5, renderCell: (params) => <ColumnTypography params={params} />},
  { field: 'description', headerName: 'Description', flex: 0.5, renderCell: (params) => <ColumnTypography params={params} />},
  { field: 'region', headerName: 'Region', flex: 0.5, renderCell: (params) => <ColumnTypography params={params} />},
  { field: 'coordinator', headerName: 'Coordinator', flex: 0.5, renderCell: (params) => <ColumnTypography value={params.row.coordinator?.name} params={params} />}
];

export const editableColumns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 0.5, renderCell: ZoneName},
  { field: 'description', headerName: 'Description', flex: 0.5, renderCell: ZoneDescription},
  { field: 'region', headerName: 'Region', flex: 0.5, renderCell: ZoneLocation},
  { field: 'coordinator', headerName: 'Coordinator', flex: 0.5, renderCell: (params) => <ColumnTypography value={params.row.coordinator?.name} params={params} />},
  { field: 'actions', headerName: 'Actions', renderCell: DeleteZone}
];