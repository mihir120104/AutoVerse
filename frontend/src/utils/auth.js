export function getUserRole() {
  return localStorage.getItem("role") || "admin";
}

export function isAdmin() {
  return getUserRole() === "admin";
}