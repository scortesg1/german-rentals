"use client";

import React, { useState } from "react";
import { EditCarButtonProps } from "./EditCarButton.types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import EditCarForm from "../EditCarForm/EditCarForm";

export default function EditCarButton(props: EditCarButtonProps) {
  const { carData } = props;

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button
          variant="transparent"
          
          onClick={() => setOpenDialog(true)}
        >
          <Pencil className="w-4 h-4" strokeWidth={2} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Car</DialogTitle>
        <DialogHeader>
          <DialogDescription>
            <EditCarForm setOpenDialog={setOpenDialog} carData={carData}/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
