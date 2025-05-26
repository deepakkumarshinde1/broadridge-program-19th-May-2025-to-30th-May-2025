function InputError(props) {
  let { error: myError } = props;
  return (
    <section>
      <small className="text-danger fw-bold">{myError}</small>
    </section>
  );
}

export default InputError;
