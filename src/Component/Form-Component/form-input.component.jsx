const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="container">
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
};
export default FormInput;
