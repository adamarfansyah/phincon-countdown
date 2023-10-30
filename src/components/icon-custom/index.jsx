/* eslint-disable react/prop-types */
export default function CustomIcon({ data }) {
  return (
    <a href={data.href}>
      <img src={data.icon} />
    </a>
  );
}
