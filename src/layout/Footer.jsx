function Footer() {
    return <footer className="page-footer deep-purple lighten-4">
      <div className="footer-copyright">
        <div className="container">
        © {new Date().getFullYear()} Copyright
        <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
        </div>
      </div>
    </footer>
}

export {Footer}