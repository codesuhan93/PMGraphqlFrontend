import Clients from "../components/Clients";
import TeamMembers from "../components/TeamMembers";
import Projects from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddTeamMemberModal from "../components/AddTeamMemberModal";
import AddProjectModal from "../components/AddProjectModal";

export default function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddTeamMemberModal />
        <AddProjectModal />
      </div>
      <Projects />
      <hr />
      <Clients />
      <hr />
      <TeamMembers />
    </>
  );
}
