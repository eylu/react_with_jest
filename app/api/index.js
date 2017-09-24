const host = "https://api.github.com/";

/** * Update User * @return {String} /api/v1/user
 */
export function authAPI(id="") {
  return `${host}authorizations${id?'/':''}${id}`;
}
