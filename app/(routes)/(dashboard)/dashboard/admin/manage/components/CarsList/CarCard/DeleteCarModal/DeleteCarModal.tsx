import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DeleteCarModalTypes } from "./DeleteCarModal.types";
import { Button, LoadingButton } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function DeleteCarModal(props: DeleteCarModalTypes) {

  const { deleteCar, isLoading } = props;
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="inline-flex h-10 px-4 py-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90">
          <Trash className="w-4 h-4" strokeWidth={3} />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white text-xl font-bold">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-white">
            This action cannot be undone. This will permanently delete this car.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={deleteCar} asChild>
            <LoadingButton variant="destructive" loading={isLoading}>
              Continue
            </LoadingButton>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
