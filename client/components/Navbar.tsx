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
    <Navbar className="bg-bgbrand p-4">
      <NavbarContent justify="start">
        <a className="hover:scale-105 duration-300">
          <button className="font-[700] text-3xl text-brand">WISE</button>
        </a>
      </NavbarContent>
      <NavbarContent justify="center" className="gap-10 px-[200px]">
        <NavbarItem className="hover:text-brand/75 py-2 px-3 rounded-xl duration-300">
          <a href="#" className="text-sm">
            About Us
          </a>
        </NavbarItem>
        <NavbarItem className="hover:text-brand/75 py-2 px-3 rounded-xl duration-300">
          <a href="#" className="text-sm">
            Programs
          </a>
        </NavbarItem>
        <NavbarItem className="hover:text-brand/75 py-2 px-3 rounded-xl duration-300">
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
