import githubMark from "../assets/github-mark.png";

function Footer() {
  return (
    <footer>
      <p>Created by Djotajo</p>
      <a href="https://github.com/Djotajo">
        <img id="githubLogo" src={githubMark} />
      </a>
    </footer>
  );
}

export default Footer;
