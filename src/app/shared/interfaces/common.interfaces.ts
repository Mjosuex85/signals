export interface Criteria {
    id?:        string,
    page?:      string,
    episode?:   string
    name?:      string,
    status?:    string,
    species?:   string,
    type?:      string,
    gender?:    string,
    dimension?: string
}

export interface Pagination {
  count?:   number;
  pages?:   number;
  next?:    string | null;
  prev?:    string | null;
  current?: number | undefined;
}

