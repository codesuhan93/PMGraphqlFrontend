import { gql } from "@apollo/client";

const GET_TEAMMEMBERS = gql`
  query getTeamMembers {
    teammembers {
      id
      name
      email
      phone
      designation
    }
  }
`;

export { GET_TEAMMEMBERS };
