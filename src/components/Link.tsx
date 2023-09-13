export enum Pages {
  HOME = "/",
  ABOUT = "/about",
}

type Props = {
  children: React.ReactNode;
  to: Pages;
};

export default function Link({ children, to }: Props) {
  return <a href={to}>{children}</a>;
}
