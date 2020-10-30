import { gistInfo } from "./basicType";
import { queryCollection } from "./helper";

export const gists = (first = 100) => `
  gists(first: ${first}) {
    ${queryCollection(gistInfo)}
    totalCount
  }
`;
