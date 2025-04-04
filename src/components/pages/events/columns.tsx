import { GridRenderCellParams } from "@mui/x-data-grid";
import { ColumnTypography } from "../common/columns/column-typography";
import { Event } from "./types";
import { StatusColumn } from "./views/status-column";
import { formatDate } from "../users/helpers";
import { RowAction } from "./views/actions";

export const columns = [{
  type: 'string',
  field: 'title', 
  headerName: 'Name', 
  flex: 1,
  renderCell: (params: GridRenderCellParams, _row: Event) => <ColumnTypography params={params} />
}, {
  type: 'string',
  field: 'description',
  headerName: 'Description',
  flex: 1 ,
  renderCell: (params: GridRenderCellParams, _row: Event) => <ColumnTypography params={params} />
}, {
  type: 'string',
  field: 'date',
  headerName: 'Date',
  flex: 0.75,
  renderCell: (params: GridRenderCellParams, _row: Event) => <ColumnTypography params={params} value={formatDate(params.value as string)} />
}, {
  type: 'number',
  field: 'attendees',
  headerName: 'Attendees',
  flex: 0.3,
  renderCell: (params: GridRenderCellParams, _row: Event) => <ColumnTypography params={params} value={params.row.attendees?.length || 0} sx={{ justifyContent: 'flex-end' }} />
}, {
  type: 'string',
  field: 'status', 
  headerName: 'Status', 
  flex: 0.4,
  renderCell: (params: GridRenderCellParams, _row: Event) => <StatusColumn status={params.row.status} />
}, {
  type: 'string',
  field: 'actions', 
  headerName: 'Actions',
  renderCell: (params: GridRenderCellParams, _row: Event) => <RowAction params={params}/>,
  flex: 0.3
}];
