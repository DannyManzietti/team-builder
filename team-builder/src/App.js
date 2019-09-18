import React, { useState } from "react";
import "./App.css";

import teamData from "./teamnData";
import TeamHeader from "./Components/TeamHeader";
import TeamForm from "./Components/TeamForm";
import TeamList from "./Components/TeamList";

function App() {
  const [teamList, setTeamList] = useState(teamData);
  const [memberEdit, setMemberEdit] = useState(undefined);

  const addTeamMember = member => {
    setTeamList([...teamList, member]);
  };
  const handleMemberEdit = member => {
    setMemberEdit(member);
  };

  const editMember = member => {
    teamList.map(i => {
      if (i.id === member.id) {
        let updatedObject = { ...i, ...member };
        i.name = updatedObject.name;
        i.email = updatedObject.email;
        i.role = updatedObject.role;
      }
    });
    setMemberEdit(undefined);
  };
  return (
    <div className="App">
      <TeamHeader />
      <TeamForm
        addTeamMember={addTeamMember}
        memberEdit={memberEdit}
        editMember={editMember}
      />
      <TeamList teamList={teamList} handleMemberEdit={handleMemberEdit} />
    </div>
  );
}

export default App;
