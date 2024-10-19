import { Car } from "@prisma/client";

export type PublicCarListProps = {
  cars: Car[] | undefined;
};
