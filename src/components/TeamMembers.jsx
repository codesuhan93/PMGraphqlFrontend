import { useQuery } from "@apollo/client";
import TeamMemberRow from "./TeamMemberRow";
import Spinner from "./Spinner";
import { GET_TEAMMEMBERS } from "../queries/teammemberQueries";

export default function TeamMembers() {
  const { loading, error, data } = useQuery(GET_TEAMMEMBERS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      <h2>
        <strong>Team Members</strong>
      </h2>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Designation</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.teammembers.map((teammember) => (
              <TeamMemberRow key={teammember.id} teammember={teammember} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
