import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useTeam = () => {
    const { makeRequest } = useMagentoApi();
  
    const fetchTeam = async () => await makeRequest("team");
    const createTeamMember = async (data) => await makeRequest("team", "POST", data);
    const updateTeamMember = async (id, data) => await makeRequest(`team/${id}`, "PUT", data);
    const deleteTeamMember = async (id) => await makeRequest(`team/${id}`, "DELETE");
  
    return { fetchTeam, createTeamMember, updateTeamMember, deleteTeamMember };
  };
  