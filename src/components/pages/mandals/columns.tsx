import { GridColDef } from "@mui/x-data-grid";
import { MandalName } from "./views/columns/mandal-name";
import { MandalLocation } from "./views/columns/mandal-location";
import { DeleteMandal } from "./views/columns/delete-zone";
import { ColumnTypography } from "../common/columns/column-typography";
import ZoneAutocomplete from "./views/columns/mandal-zone";

export const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 0.3, renderCell: (params) => <ColumnTypography params={params} />},
  { field: 'location', headerName: 'Description', flex: 0.5, renderCell: (params) => <ColumnTypography params={params} />},
  { field: 'zone', headerName: 'Zone', flex: 0.5, renderCell: (params) => <ColumnTypography value={params.row.zone === null ? '' :  `${params.row.zone.name} - ${params.row.zone.location}`} params={params} />},
];

export const editableColumns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 0.5, renderCell: MandalName},
  { field: 'location', headerName: 'Description', flex: 0.5, renderCell: MandalLocation},
  { field: 'zone', headerName: 'Zone', flex: 0.5, renderCell: ZoneAutocomplete},
  { field: 'actions', headerName: 'Actions', renderCell: DeleteMandal}
];