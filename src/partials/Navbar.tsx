import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-pink-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <circle cx="13" cy="14" opacity="0.7" r="5" stroke="white" strokeWidth="1" fill="cyan"/>
              <circle cx="16" cy="8" r="5" opacity="0.7" stroke="white" strokeWidth="1" fill="hotpink"/>
              <circle cx="19" cy="14" r="5" opacity="0.7" stroke="white" strokeWidth="1" fill="yellow"/>
              <path d="M4 20h24 " stroke="none"></path>
            </svg>
          }
          name="In #30Days"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">Journal</NavMenuItem>
        <NavMenuItem href="/about">About</NavMenuItem>
        <NavMenuItem href="/">GitHub</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
