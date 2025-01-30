// Utility to get tokens outside of React components
let tokenState = {
  accessToken: null as string | null,
  refreshToken: null as string | null,
};

export const updateTokenState = (newState: { accessToken: string | null; refreshToken: string | null }) => {
  tokenState = { ...tokenState, ...newState };
};

export const getTokenState = () => tokenState;

