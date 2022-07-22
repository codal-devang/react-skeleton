const endPoints = {
  login: {
    url: 'User/login',
    isProtected: false,
    method: 'post',
  },
  logOutCall: {
    url: 'User/logout',
    isProtected: true,
    method: 'get',
  },
  getAllUsers: {
    url: 'User',
    isProtected: true,
    method: 'get',
  },
  getUserById: {
    url: 'User/',
  },
  getUser: {
    url: 'User/me',
    isProtected: true,
    method: 'get',
  },
  createUser: {
    url: 'User',
    isProtected: false,
    method: 'post',
  },
  checkAvailName: {
    url: 'User/warnings',
    isProtected: false,
    method: 'post',
  },

  patchUser: {
    url: 'User/',
    isProtected: true,
    method: 'patch',
  },

  deleteUser: {
    url: 'User/',
    isProtected: true,
    method: 'delete',
  },

  deactivateUser: {
    url: 'User/',
    isProtected: true,
    method: 'patch',
  },
  
  getUserRole: {
    url: 'Role',
    isProtected: true,
    method: 'get',
  },

  getByCommonLocation: {
    url: 'commonapi',
    isProtected: true,
    method: 'get',
  },
  getAllClients: {
    url: 'client',
    isProtected: true,
    method: 'get',
  }
};
export default endPoints;
