export function logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("role");

  window.location.href = "/";
}