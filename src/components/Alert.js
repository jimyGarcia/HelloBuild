const Alert = ({ type, message }) =>
  type !== null ? (
    <div className={`alert alert-${type} center`}>{message}</div>
  ) : null;

export default Alert;
