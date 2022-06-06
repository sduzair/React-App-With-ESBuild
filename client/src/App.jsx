import React from 'react';

const App = () => {
  return (
    <>
      <div className="container-sm">
        <table class="table table-striped table-inverse table-responsive">
          <thead class="thead-thead-inverse">
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Uzair</td>
              <td>123</td>
              <td>23</td>
            </tr>
            <tr>
              <td scope="row">RAhul</td>
              <td>234</td>
              <td>42</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  );
};

export default App;