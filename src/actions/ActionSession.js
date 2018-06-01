
export const LOG_IN = "log_in";
export const LOG_OUT = "log_out";

export function logIn() {
  return {
    type:LOG_IN
  }
};

export function logOut() {
  return {
    type: LOG_OUT
  }
}
