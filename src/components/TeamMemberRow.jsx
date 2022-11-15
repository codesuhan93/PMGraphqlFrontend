import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_TEAMMEMBER } from "../mutations/teammemberMutations";
import { GET_TEAMMEMBERS } from "../queries/teammemberQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function TeamMemberRow({ teammember }) {
  const [deleteTeamMember] = useMutation(DELETE_TEAMMEMBER, {
    variables: { id: teammember.id },
    refetchQueries: [{ query: GET_TEAMMEMBERS }, { query: GET_PROJECTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  // console.log("team member", teammember);

  return (
    <tr>
      <td>{teammember.name}</td>
      <td>{teammember.email}</td>
      <td>{teammember.phone}</td>
      <td>{teammember.designation}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteTeamMember}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
