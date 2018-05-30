export const SET_ROUTE = "set_route";

export function setActiveRoute(route){
  return {
    type:SET_ROUTE,
    payload:route
  }
}
