import { FaEnvelope, FaPhone, FaIdBadge, FaRedhat } from "react-icons/fa";

export default function TeamMemberInfo({ teammember }) {
  return (
    <>
      <h5 className="mt-5">Assignee Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {teammember?.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" /> {teammember?.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" /> {teammember?.phone}
        </li>
        <li className="list-group-item">
          <FaRedhat className="icon" /> {teammember?.designation}
        </li>
      </ul>
    </>
  );
}
