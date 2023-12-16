import CardComponent from "@/components/CardComponent";
import NavigationBar from "@/components/Navbar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@nextui-org/react";

export default function Hero() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="flex flex-col items-center min-h-screen bg-bgbrand gap-[50px]">
        <section className="flex flex-col items-center justify-center w-full py-[120px]">
          <div className="flex items-center gap-[200px]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                <p className="text-6xl font-bold max-w-[500px]">WISE.</p>
                <p className="text-4xl max-w-[400px]">
                  Welcoming Initiatives for Senior Empowerment.
                </p>
                <p className="text-lg max-w-[500px] text-brand">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <a>
                <Button size="lg" className="bg-brand font-bold">
                  Learn More
                </Button>
              </a>
            </div>
            <Image src="images/seniors.jpg" width={500} isZoomed></Image>
          </div>
        </section>
      </div>
    </>
  );
}
