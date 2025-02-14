import { Helmet } from "react-helmet";

const Users = () => {
  return (
    <div>
      <Helmet>
        <title>Users - My AdminLTE</title>
      </Helmet>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Data Users</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <p>Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
