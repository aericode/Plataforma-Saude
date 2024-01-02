import { useState } from "react";
import { NavbarDropdown } from "../NavbarDropdown";
import { NavbarLinks } from "../NavbarLinks";
import { NavbarLogo } from "../NavbarLogo";
import { NavbarSandwichButton } from "../NavbarSandwichButton";
import { NavbarSearch } from "../NavbarSearch";
import { NavbarUserMenu } from "../NavbarUserMenu";
import { Container } from "./styles";

export function Navbar() {
  const [isSandwichMenuOpen, setIsSandwichMenuOpen] = useState(true)
  const [isSmallScreen, setIsSmalScreen] = useState(false)
  return (
    <>
      <Container>
        <NavbarLogo />
        {isSmallScreen ?
          <>
            <NavbarLinks />
            <NavbarSearch />
            <NavbarUserMenu />
          </>
          :
          <>
            <NavbarSearch />
            <NavbarSandwichButton
              isSandwichMenuOpen={isSandwichMenuOpen}
              setIsSandwichMenuOpen={setIsSandwichMenuOpen}
            />
          </>
        }

      </Container>
      {(isSandwichMenuOpen) && <NavbarDropdown />}

    </>
  );
};

