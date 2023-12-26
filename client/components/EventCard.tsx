import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";

export default function EventCard() {
  return (
    <Card radius="md">
      <div className="p-3">
        <CardHeader>
          <p className="text-2xl font-bold">A Cool Event!</p>
        </CardHeader>
        <CardBody>
          <p className="text-md max-w-md">
            This is what the description will be when an event is made! This
            event is so cool and you should for sure attend!
          </p>
        </CardBody>
        <CardBody>
          <div className="flex flex-col justify-center">
            <p className="text-md font-bold">Date: 11/20/23</p>
            <p className="text-md font-bold">Time: 5:30 - 6:30</p>
          </div>
        </CardBody>
        <CardBody>
          <Button className="bg-brand">Register</Button>
        </CardBody>
      </div>
    </Card>
  );
}
