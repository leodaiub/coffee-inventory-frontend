import React from 'react';
import MaterialTable from 'material-table';
import api from '../../services/api';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Produto', field: 'name' },
      { title: 'Preço de custo', field: 'costPrice' },
      { title: 'Preço de venda', field: 'sellingPrice' },
      { title: 'Quantidade', field: 'quantity' },
    ],
    data: [
      { name: '', costPrice: '',sellingPrice: '',quantity: ''},
    ],
  });

  return (
    <div className="root">
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={query =>
        new Promise((resolve, reject) => {
          api.get('/products')
            .then(result => {
              resolve({
                data: result.data,
                // page: result.page - 1,
                totalCount: result.total,
              })
              console.log(result);
            })
        })
      }
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
    </div>
  );
}
