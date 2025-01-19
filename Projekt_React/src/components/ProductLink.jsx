export const ProductLink = ({ id }) => (
  <a
    href={`https://www.google.com/search?q=${encodeURIComponent(id)}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {id}
  </a>
);
