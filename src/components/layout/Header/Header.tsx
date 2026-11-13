import type { NavigationItem } from "@/types/portfolio";

type HeaderProps = { identity: string; navigation: NavigationItem[] };

export function Header({ identity, navigation }: HeaderProps) {
  return (
    <header className="site-header">
      <a
        className="identity"
        href="#inicio"
        aria-label={`${identity}, voltar ao início`}
      >
        {identity}
      </a>
      <nav aria-label="Navegação principal">
        <ul className="nav-list">
          {navigation.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
