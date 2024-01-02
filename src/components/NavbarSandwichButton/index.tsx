import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SandwichButton } from './styles';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface Props {
  isSandwichMenuOpen: boolean,
  setIsSandwichMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavbarSandwichButton({ isSandwichMenuOpen, setIsSandwichMenuOpen }: Props) {
  return (
    <SandwichButton onClick={() => setIsSandwichMenuOpen(!isSandwichMenuOpen)}>
      <FontAwesomeIcon icon={faBars} fontSize={25} />
    </SandwichButton>
  );
};
