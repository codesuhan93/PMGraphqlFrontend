import { gql } from "@apollo/client";

const ADD_TEAMMEMBER = gql`
  mutation addTeamMember(
    $name: String!
    $email: String!
    $phone: String!
    $designation: String!
  ) {
    addTeamMember(
      name: $name
      email: $email
      phone: $phone
      designation: $designation
    ) {
      id
      name
      email
      phone
      designation
    }
  }
`;

const DELETE_TEAMMEMBER = gql`
  mutation deleteTeamMember($id: ID!) {
    deleteTeamMember(id: $id) {
      id
      name
      email
      phone
      designation
    }
  }
`;

export { ADD_TEAMMEMBER, DELETE_TEAMMEMBER };
