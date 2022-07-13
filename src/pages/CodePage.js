const CodePage = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const code = params.get("code");

  localStorage.setItem("code", code);
  window.open("", "_self").close();
  return null;
};

export default CodePage;
