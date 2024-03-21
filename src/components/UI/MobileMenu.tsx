import { slide as Menu } from "react-burger-menu";
import Filters from "../filters/Filters";

interface MobileMenuProps {
  isOpen: boolean;
  onCloseMenu: () => void;
}

const MobileMenu = ({ isOpen, onCloseMenu }: MobileMenuProps) => {
  const handleStateChange = (state: any) => {
    if (!state.isOpen) {
      onCloseMenu();
    }
  };

  return (
    <Menu isOpen={isOpen} onStateChange={handleStateChange} customBurgerIcon={false}>
      <Filters isMobile={true} onOpenModal={onCloseMenu} />
    </Menu>
  );
};

export default MobileMenu;
