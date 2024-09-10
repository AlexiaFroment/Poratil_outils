export interface AuthContextProps {
  isAuthenticated: boolean;
  token: string | null;
  logout: () => void;
}

export interface NavbarProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

export interface CardData {
  id: number;
  img: string;
  tool: {
    name: string;
    url: string;
    category: string;
    description: string;
    doc: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface ToolCardProps {}
