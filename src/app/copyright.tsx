export default function Copyright() {
  const year = new Date().getFullYear();
  return (
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="p-small">
              Copyright © {year}
              <br />
              <a href="#" target="_blank">
                Studio Book
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
