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
import { useAppDispatch } from "../hooks/hooks";
import type { AsyncThunk, AsyncThunkConfig } from "@reduxjs/toolkit";
export default function ErorBox({
  error_message,
  title,
  fetchAction,
}: {
  readonly error_message: string;
  readonly title: string;
  readonly fetchAction?: AsyncThunk<void, void, AsyncThunkConfig>;
}) {
  const dispatch = useAppDispatch();
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
        <Button onClick={() => (fetchAction ? dispatch(fetchAction()) : null)}>
          <span>Try Again Now</span>
          <Check className="text-green-700" />
        </Button>
      </CardFooter>
    </Card>
  );
}
