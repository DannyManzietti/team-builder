import React from "react";

const TeamList = props => {
  return (
    <div className="card-list">
      {props.teamList.map(member => {
        return (
          <div className="member-card" key={member.id}>
            <h2>{member.name}</h2>
            <hr />
            <p>{member.email}</p>
            <p>{member.role}</p>
            <button on onClick={() => props.handleMemberEdit(member)}>
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TeamList;
