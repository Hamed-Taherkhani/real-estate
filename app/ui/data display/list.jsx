export default function List({ className, items, renderItem }) {
  return (
    <ul className={className}>
      {items?.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
