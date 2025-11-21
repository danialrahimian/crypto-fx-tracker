import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

import { useDispatch } from "react-redux";
import { CircleX, Check } from "lucide-react";
export default function ErorBox({
  error_message,
  title,
  fetchAction,
}: {
  error_message: string;
  title: string;
  fetchAction: () => void;
}) {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardHeader className="w-64">
        <CardTitle className="text-center text-destructive text-xl flex items-center justify-between ">
          <span>Failed to load {title}</span>
          <CircleX />
        </CardTitle>
        <CardDescription className="text-center">
          {error_message}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center">Try again later</p>
      </CardContent>
      <CardFooter className="items-center w-full flex justify-center">
        <Button onClick={() => dispatch(fetchAction())}>
          <span>Try Again Now</span>
          <Check className="text-green-700" />
        </Button>
      </CardFooter>
    </Card>
  );
}
