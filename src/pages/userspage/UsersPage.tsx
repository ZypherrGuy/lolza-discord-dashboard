import { useFetchUsers } from '../../hooks/useFetchUsers';
import Table from '../../components/table/Table';

const UsersPage = () => {
  const { columns, data, loading, error } = useFetchUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="content-container">
      <h3>Users</h3>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default UsersPage;
