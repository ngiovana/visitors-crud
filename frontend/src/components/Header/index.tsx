import { HeaderContainer, HeaderIcon, HeaderTitle } from "./styles"

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderIcon />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  )
}