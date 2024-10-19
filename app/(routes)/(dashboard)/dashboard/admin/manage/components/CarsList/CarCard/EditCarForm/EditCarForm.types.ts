import { Car } from "@prisma/client";
import { Dispatch, SetStateAction } from "react";

export type EditCarFormProps = {
  carData: Car;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
