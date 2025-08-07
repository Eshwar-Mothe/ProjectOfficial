const HomeView = ({ user }) => (
  <div className="inner-content">
    <h1>User Dashboard</h1>
    <p><strong>ID:</strong> {user.id}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>State:</strong> {user.state}</p>
  </div>
);

export default HomeView;
