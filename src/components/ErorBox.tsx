import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { CircleX, Check } from "lucide-react";
export default function ErorBox() {
  return (
    <Card>
      <CardHeader className="w-64">
        <CardTitle className="text-center text-destructive text-xl flex items-center justify-between ">
          <span>Failed to load coins</span>
          <CircleX />
        </CardTitle>
        <CardDescription className="text-center">
          Something went wrong
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center">Try again later</p>
      </CardContent>
      <CardFooter className="items-center w-full flex justify-center">
        <Button>
          <span>Try Again Now</span>
          <Check className="text-green-700" />
        </Button>
      </CardFooter>
    </Card>
  );
}
