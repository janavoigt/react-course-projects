export default function Input({ textarea }) {
  return (
    <p>
      <label></label>
      {textarea ? <textarea /> : <input />}
    </p>
  );
}
