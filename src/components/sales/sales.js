import React from 'react';
import MaterialTable from 'material-table';
import './sales.css';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Produto', field: 'name' },
      { title: 'Preço de custo', field: 'birthYear', type: 'numeric' },
      { title: 'Preço de venda', field: 'birthYear', type: 'numeric' },
      { title: 'Quantidade', field: 'surname', type: 'numeric' },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: '1987', birthCity: '63' },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <div className="root">
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
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
