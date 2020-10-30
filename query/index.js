import { followings, followers, info } from "./user";
import { gists } from "./gist";
import { repositories } from "./repo";
import { query } from "./helper";

export const queries = query(
  [info, followings, followers, gists, repositories].map((q) => q()).join("\n")
);

export default queries;
