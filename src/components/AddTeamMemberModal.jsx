import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_TEAMMEMBER } from "../mutations/teammemberMutations";
import { GET_TEAMMEMBERS } from "../queries/teammemberQueries";

export default function AddTeamMemberModal() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");

  const [addTeamMember] = useMutation(ADD_TEAMMEMBER, {
    variables: { name, email, phone, designation },
    update(cache, { data: { addTeamMember } }) {
      const { teammembers } = cache.readQuery({ query: GET_TEAMMEMBERS });

      cache.writeQuery({
        query: GET_TEAMMEMBERS,
        data: { teammembers: [...teammembers, addTeamMember] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "" || designation === "") {
      return alert("Please fill in all fields");
    }

    addTeamMember(name, email, phone, designation);

    setName("");
    setEmail("");
    setPhone("");
    setDesignation("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addTeamMemberModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Team Member</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addTeamMemberModal"
        aria-labelledby="addTeamMemberModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTeamMemberModalLabel">
                Add Team Member
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
