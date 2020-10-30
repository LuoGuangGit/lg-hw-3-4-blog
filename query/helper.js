export const query = (q) => `
  query{
    viewer {
      ${q}
    }
  }
`;

export const queryByUser = (userLogin, q) => `
  query{
    user(login: ${userLogin}) {
      ${q}
    }
  }
`;

export const queryCollection = (q) => `
  nodes {
    ${q}
  }
`;
