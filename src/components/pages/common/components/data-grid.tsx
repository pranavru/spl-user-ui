import { DataGrid, GridColumnVisibilityModel, GridToolbar, GridToolbarContainer, GridEventListener, GridToolbarQuickFilter } from '@mui/x-data-grid'

type ComponentProps = {
  columns: any[];
  rows: any[];
  isLoading?: boolean;
  columnsVisibility?: GridColumnVisibilityModel;
  editable?: 'row' | 'cell' | 'none';
  disableDoubleClick?: boolean;
  getRowId?: (row: any) => string | number; // Optional function to get row id
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
        processRowUpdate={(newRow) => newRow}
        disableRowSelectionOnClick
        columns={props.columns} 
        rows={props.rows}
        rowSelection={false}
        pageSizeOptions={[25, 50, 100]}
        getRowId={props.getRowId}
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
                justifyContent: "space-between", 
                width: "100%"
              }}
            >
              <GridToolbarQuickFilter sx={{ width: '30%' }} variant="standard" color='secondary' />
              <GridToolbar />
            </GridToolbarContainer>
          ),
        }}
        getRowHeight={() => 'auto'}
        loading={props.isLoading}
      />
  )
}
