export type CalendarSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
  setSelectedDate: React.Dispatch<
    React.SetStateAction<{ from: Date | undefined; to: Date | undefined }>
  >;
  pricePerDay: string;
};
