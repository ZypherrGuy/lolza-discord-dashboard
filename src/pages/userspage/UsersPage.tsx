import { useFetchUsers } from '../../hooks/useFetchUsers';
import Table from '../../components/table/Table';
import Loader from '../../components/loader/Loader'; // Import the new Loader component

const UsersPage = () => {
  const { columns, data, loading, error } = useFetchUsers();

  return (
    <>
      <div className="content-container">
        <div className="user-header">
          <h3>Users</h3>
          <p>List of users and related information goes here.</p>
        </div>
      </div>

      {loading ? (
        <Loader message="Loading Users" />
      ) : (
        <div className="content-container">
          <Table columns={columns} data={data} />
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </>
  );
};

export default UsersPage;
