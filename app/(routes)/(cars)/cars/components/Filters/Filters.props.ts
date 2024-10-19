import { Car } from "@prisma/client";

export type FilterProps = {
  cars: Car[] | undefined;
};
