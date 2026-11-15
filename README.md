# Portfólio de Pedro

**Em breve — em desenvolvimento.** Portfólio pessoal de página única, em português do Brasil, com apresentação, tecnologias, projetos e contato. A interface tem identidade escura, título com entrada em cascata e revelações ao rolar, respeitando a preferência por movimento reduzido.

O projeto ainda contém projetos demonstrativos e pendências de imagens e links reais desses projetos; não está pronto para publicação.

## Tecnologias

- Next.js App Router e React.
- TypeScript com verificação estrita.
- Tailwind CSS e estilos próprios em `src/app/globals.css`.
- Biome para lint e formatação.
- pnpm 10.19.0, conforme `packageManager` no `package.json`.

A fonte da interface é a pilha do sistema `Arial, Helvetica, sans-serif`. As prévias demonstrativas também usam `Georgia, serif`. Não há fonte carregada com `next/font`.

## Instalação e desenvolvimento

Com Node.js compatível com as dependências e pnpm 10.19.0 disponíveis, execute na raiz:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra `http://localhost:3000`. Preserve o `pnpm-lock.yaml` e evite alternar gerenciadores de pacotes.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `pnpm dev` | Inicia o servidor de desenvolvimento. |
| `pnpm build` | Gera a compilação de produção. |
| `pnpm start` | Serve a compilação criada por `pnpm build`. |
| `pnpm lint` | Executa `biome check`, incluindo verificações de lint e formatação. |
| `pnpm format` | Formata os arquivos e grava as alterações. |

Para verificar os tipos em uma instalação limpa, primeiro gere os tipos do Next.js:

```sh
pnpm exec next typegen
pnpm exec tsc --noEmit
```

Esses comandos não são scripts adicionais do `package.json`. Execute também `pnpm lint` e `pnpm build` para validar alterações.

## Estrutura

```text
src/
  app/
    page.tsx                    # Composição da página
    layout.tsx                  # HTML, idioma e metadados
    globals.css                 # Estilos, responsividade e animações
  components/
    layout/Header/Header.tsx
    layout/Footer/Footer.tsx
    sections/Hero/Hero.tsx
    sections/About/About.tsx
    sections/Projects/Projects.tsx
    sections/Projects/ProjectCard.tsx
    reveal.tsx                  # Revelação com IntersectionObserver
  data/portfolio.ts             # Conteúdo editável
  types/portfolio.ts            # Contratos do conteúdo
public/
  layout-mobile.png             # Referência visual mobile
  layout-desktop.png            # Referência visual desktop
```

## Edição do conteúdo

Edite `src/data/portfolio.ts` para alterar identificação, navegação interna, apresentação, tecnologias, projetos e rodapé. Os tipos ficam em `src/types/portfolio.ts`. A composição da página está em `src/app/page.tsx`; os metadados estão em `src/app/layout.tsx`.

`hero.title` é uma tupla de três partes, atualmente `["Pedro", "dev", "web"]`. Os mesmos valores alimentam as palavras animadas e o título contínuo anunciado por leitores de tela, unidas por um espaço.

Os contatos do rodapé ficam em `footer.socialLinks`: LinkedIn e GitHub aceitam destinos HTTPS e abrem em nova aba com `noopener noreferrer`; E-mail aceita `mailto:` e abre sem nova aba. Os ícones são SVGs decorativos. Os destinos reais de Pedro já estão configurados. `contactLabel` mantém a chamada “Entre em contato”. `contactHref` continua opcional para uma chamada com destino próprio; `contactNote` e `signature` só aparecem quando têm conteúdo.

Os projetos atuais são conceitos demonstrativos, com prévias produzidas em HTML e CSS. Não representam trabalhos reais e não possuem destinos externos. O contrato atual de projeto contém textos e uma variante visual; imagens reais e links exigem adaptação do contrato e do cartão quando os materiais forem fornecidos.

## Pendências

- Fornecer projetos, descrições, imagens e links reais de demonstração ou repositório.
- Fornecer a logo definitiva, caso substitua a identificação textual.
- Validar a interface nas larguras e interações descritas em `AGENTS.md` antes da publicação.

Não invente contatos, URLs, experiência, clientes ou métricas. Enquanto faltarem materiais, preserve a identificação dos projetos como demonstrativos.

## Orientações do repositório

Consulte `AGENTS.md` antes de modificar o projeto. Preserve a direção visual, a stack, o gerenciador de pacotes e as alterações locais existentes.

`PROMPT-CODEX.md` não está disponível nesta cópia do repositório. Seu conteúdo não foi reconstruído; siga as instruções disponíveis e as orientações mais recentes de Pedro.
