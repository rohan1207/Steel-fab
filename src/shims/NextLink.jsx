import { Link as RouterLink } from "react-router-dom";

function isExternalHref(href) {
  return typeof href === "string" && (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:"));
}

export default function Link({ href = "", children, ...props }) {
  if (isExternalHref(href)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
}
