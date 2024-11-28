import useGithubUser from '../customHooks/useGithubUser/useGithubUser'

export default function GithubUser() {
  const { users, error, isLoading, onRefresh } = useGithubUser()

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>There as been an error</h3>}
      {users && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>{user.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
