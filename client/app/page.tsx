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
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
                <p className="text-lg max-w-[500px] text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <a>
                <Button size="lg" className="bg-brand font-bold">
                  Our Programs
                </Button>
              </a>
            </div>
            <Image src="images/seniors.jpg" width={500} isZoomed></Image>
          </div>
        </section>
        <section className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4">
              <p className="text-4xl font-bold text-white">About Us</p>
              <p className="text-lg font-medium text-white max-w-2xl text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <Button
              className="bg-bgbrand text-black px-6 border-brand text-white"
              size="md"
              variant="bordered"
            >
              Learn More
            </Button>
          </div>
        </section>
        <section className="flex justify-center items-center gap-[130px] w-full bg-brand py-12">
          <div className="flex flex-col gap-7">
            <p className="text-4xl text-bgbrand font-bold">Our Mission</p>
            <div className="flex flex-col gap-4">
              <p className="text-lg text-bgbrand font-medium max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                maxime non, velit odio totam incidunt tempora impedit, iste quam
                veniam dolor doloremque quas hic aliquam dolorum sint minus
                corporis molestias, repudiandae nihil?
              </p>
              <Button size="md" className="bg-bgbrand text-white w-max">
                About Us
              </Button>
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            isZoomed
            width={400}
          ></Image>
        </section>
      </div>
    </>
  );
}
