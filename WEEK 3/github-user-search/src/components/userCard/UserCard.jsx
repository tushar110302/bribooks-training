import "./index.css";

const UserCard = ({ user, repos }) => {
  return (
    <div className="card rounded-4 my-5 m-auto user-card ">
      <div className="card-body text-center">
        <img
          src={user.avatar_url}
          alt="avatar"
          className="rounded-circle mb-3 avatar"
        />

        <h3 className="fw-bold">{user.name}</h3>
        <p>{user.bio || "No bio available"}</p>

        <div className="row mt-3">
          <div className="col">
            <strong>{user.followers}</strong>
            <p>Followers</p>
          </div>

          <div className="col">
            <strong>{user.following}</strong>
            <p>Following</p>
          </div>

          <div className="col">
            <strong>{user.public_repos}</strong>
            <p>Repos</p>
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          className="btn btn-dark btn-outline-success mt-3"
        >
          View Profile
        </a>

        <div className="repo-section mt-4 text-start">
          <h5 className="repo-title">Few Repositories</h5>

          <ul className="list-group repo-list">
            {repos.map((repo) => (
              <li key={repo.id} className="list-group-item repo-item">
                <a href={repo.html_url} target="_blank" className="repo-link">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-center mt-3">
            <a
              href={`${user.html_url}?tab=repositories`}
              target="_blank"
              className="btn btn-dark btn-outline-success"
            >
              View All Repositories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
