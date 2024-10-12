import { DataGrid, GridToolbar, GridToolbarContainer } from '@mui/x-data-grid'

type ComponentProps = {
  columns: any[],
  rows: any[]
};

export const CustomDataGrid = (props: ComponentProps) => {
  return (
    <DataGrid
        disableRowSelectionOnClick
        columns={props.columns} 
        rows={props.rows}
        localeText={{
          toolbarColumns: "Display Columns",
          toolbarExport: "Export"
        }}
        slots={{
          toolbar: () => (
            <GridToolbarContainer sx={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end", width: "100%"}}>
              <GridToolbar />
            </GridToolbarContainer>
          )
        }}
        getRowHeight={() => 'auto'}
      />
  )
}
