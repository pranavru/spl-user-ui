import { GridRenderCellParams } from "@mui/x-data-grid";
import { ColumnTypography } from "../common/columns/column-typography";
import { Event } from "./types";
import { StatusColumn } from "./views/status-column";
import { formatDate } from "../users/helpers";

export const columns = [{ 
  field: 'name', 
  headerName: 'Name', 
  flex: 1,
  renderCell: (params: GridRenderCellParams, row: Event) => <ColumnTypography params={params} />
}, { 
  field: 'description',
  headerName: 'Description',
  flex: 1 ,
  renderCell: (params: GridRenderCellParams, row: Event) => <ColumnTypography params={params} />
}, { 
  field: 'startDate', 
  headerName: 'Start Date', 
  flex: 0.75,
  renderCell: (params: GridRenderCellParams, row: Event) => <ColumnTypography params={params} value={formatDate(params.value as string)} />
}, { 
  field: 'endDate', 
  headerName: 'End Date', 
  flex: 0.75 ,
  renderCell: (params: GridRenderCellParams, row: Event) => <ColumnTypography params={params} value={formatDate(params.value as string)} />,
}, { 
  field: 'location',
  headerName: 'Location', 
  flex: 1 ,
  renderCell: (params: GridRenderCellParams, row: Event) => <ColumnTypography params={params} />
}, { 
  field: 'status', 
  headerName: 'Status', 
  flex: 0.5 ,
  renderCell: (params: GridRenderCellParams, row: Event) => <StatusColumn params={params} />
}, { 
  field: 'actions', 
  headerName: 'Actions', 
  flex: 1
}];