import Link from "next/link";
import clsx from "clsx";
import { useParams } from "next/navigation";
export const LinkView = (props: {
  href: string;
  className?: string;
  isBlank?: boolean;
  children: React.ReactNode;
}) => {
  const { href, isBlank = false, children } = props;
  const { lng } = useParams();

  return (
    <Link
      href={isBlank ? href : `/${lng}${href}`}
      passHref
      className={props.className}
      target={isBlank ? "_blank" : "_self"}
      scroll={true}
    >
      {children}
    </Link>
  );
};
