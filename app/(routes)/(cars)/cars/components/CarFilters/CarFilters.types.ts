export type CarFiltersProps = {
  setFilters: (filterName: string, filterValue: string) => void;
  clearFilters: () => void;
  filters: {
    type: string;
    transmission: string;
    people: string;
    fuel: string;
  };
};
