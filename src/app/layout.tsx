import './globals.css';

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return children;
}
