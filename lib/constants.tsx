import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <LayoutDashboard />,
    label: "Painel principal",
  },
  {
    url: "/collections",
    icon: <Shapes />,
    label: "Coleções",
  },
  {
    url: "/products",
    icon: <Tag />,
    label: "Produtos",
  },
  {
    url: "/orders",
    icon: <ShoppingBag />,
    label: "Pedidos",
  },
  {
    url: "/customers",
    icon: <UsersRound />,
    label: "Clientes",
  },
];
