import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

interface CardComponent {
  head: React.ReactNode | string;
  body: React.ReactNode | string;
  theme?: "brand" | "bgbrand" | "black" | "white";
  textcolor?: "brand" | "bgbrand" | "black" | "white";
  size?: "sm" | "md" | "lg";
}

export default function CardComponent({
  head,
  body,
  theme,
  size,
  textcolor,
}: CardComponent) {
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };
  const themes = {
    brand: "bg-brand",
    bgbrand: "bg-bgbrand",
    black: "bg-black",
    white: "bg-white",
  };
  const textColors = {
    brand: "text-brand",
    bgbrand: "text-bgbrand",
    black: "text-black",
    white: "text-white",
  };

  return (
    <Card
      className={`${theme ? themes[theme] : "bg-white"} ${
        textcolor ? textColors[textcolor] : "text-black"
      } flex-col items-center}`}
    >
      <CardHeader className="text-2xl font-bold flex justify-center">
        {head}
      </CardHeader>
      <Divider className=""></Divider>
      <CardBody
        className={`text-center px-8 py-5 ${size ? sizes[size] : "max-w-sm"}`}
      >
        {body}
      </CardBody>
    </Card>
  );
}
