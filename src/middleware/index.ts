import authentication from "./authentication";
import addDbToContext from "./add-db-to-context";
import users from "./users";
import core from "../core/middleware";

interface MiddlewareObject {
  authentication: any;
  addDbToContext: any;
  defaults: any;
  projects: any;
  users: any;
  models: any;
  core: any;
}

const middleware = {
  authentication,
  addDbToContext,
  users,
  core
} as MiddlewareObject;

export default middleware;
