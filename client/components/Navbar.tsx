import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";

export default function NavigationBar() {
  return (
    <Navbar className="bg-black p-4" isBlurred>
      <NavbarBrand>
        <a className="hover:scale-105 duration-300">
          <button className="font-[700] text-3xl text-brand">WISE</button>
        </a>
      </NavbarBrand>
      <NavbarContent justify="center" className="gap-10">
        <NavbarItem className="hover:bg-brand/50 py-2 px-3 rounded-xl duration-500">
          <a href="#" className="text-sm">
            About Us
          </a>
        </NavbarItem>
        <NavbarItem className="hover:bg-brand/50 py-2 px-3 rounded-xl duration-500">
          <a href="#" className="text-sm">
            Programs
          </a>
        </NavbarItem>
        <NavbarItem className="hover:bg-brand/50 py-2 px-3 rounded-xl duration-500">
          <a href="#" className="text-sm">
            Get Involved
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="text-md text-black bg-brand">Sign Up</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
