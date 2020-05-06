export const developerInfo = {
  email: "",
  name: ""
};

const basicUrl = "";

export const routes = {
  getList: `${basicUrl}`,
  addTodo: `${basicUrl}/create/?developer=${developerInfo.email}`,
  editTodo: `${basicUrl}/edit/`
};
