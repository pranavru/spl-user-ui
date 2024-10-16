import { DataGrid, GridColumnVisibilityModel, GridToolbar, GridToolbarContainer, GridEventListener } from '@mui/x-data-grid'

type ComponentProps = {
  columns: any[];
  rows: any[];
  isLoading?: boolean;
  columnsVisibility?: GridColumnVisibilityModel;
};

export const CustomDataGrid = (props: ComponentProps) => {
  const handleCellKeyDown: GridEventListener<'cellKeyDown'> = (_params, event) => {
    if (event.key === ' ') {
      event.defaultMuiPrevented = true;
    }
  };

  return (
    <DataGrid
        onCellKeyDown={handleCellKeyDown}
        disableMultipleRowSelection
        disableRowSelectionOnClick
        columns={props.columns} 
        rows={props.rows}
        rowSelection={false}
        pageSizeOptions={[25, 50, 100]}
        localeText={{
          toolbarColumns: "Display Columns",
          toolbarExport: "Export",
          noResultsOverlayLabel: "No results found",
          noRowsLabel: "No rows",
        }}
        initialState={{
          pagination: { 
            paginationModel: { 
              pageSize: 25 
            }
          },
          columns: {
            columnVisibilityModel: props.columnsVisibility
          }
        }}
        slots={{
          toolbar: () => (
            <GridToolbarContainer 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: "flex-end", 
                width: "100%"
              }}
            >
              <GridToolbar />
            </GridToolbarContainer>
          ),
        }}
        getRowHeight={() => 'auto'}
        loading={props.isLoading}
      />
  )
}
