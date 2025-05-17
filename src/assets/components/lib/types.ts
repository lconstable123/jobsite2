export type PaginationDirection = "prev" | "next";
export type PaginationButtonProps = PaginationDirection & {
  onClick?: () => void;
};

export type TJobItem = {
  title: string;
  badgeLetters: string;
  company: string;
  daysAgo: string;
  id: number;
  relevanceScore: number;
};

export type JobItems = {
  jobItems: TJobItem[];
};

export type JobItemDetails = {
  title: string;
  badgeLetters: string;
  company: string;
  daysAgo: string;
  id: number;
  description: string;
  duration: string;
  location: string;
  qualifications: string[];
  relevanceScore: number;
  reviews: string[];
  salary: string;
  companyURL: string;
  coverImgURL: string;
};

export type JobItemDetailApiResponse = {
  public: boolean;
  jobItem: JobItemDetails;
};

export type JobItemApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: TJobItem[];
};

export type SortBy = "relevant" | "recent";
