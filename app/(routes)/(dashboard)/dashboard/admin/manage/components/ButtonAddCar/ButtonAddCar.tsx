"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import FormAddCar from "../FormAddCar/FormAddCar";

export default function ButtonAddCar() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="transparent" onClick={() => setOpenDialog(true)}>
          Add new car
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="text-white">
        <DialogTitle>Create Car</DialogTitle>
        <DialogHeader>
          <DialogDescription>
            <FormAddCar setOpenDialog={setOpenDialog}></FormAddCar>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
