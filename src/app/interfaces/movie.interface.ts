export interface IResults{
  page:string,
  results:[IMovie],
  total_pages:number
}


export interface IMovie {
  id:string;
  original_title: string;
  overview:string;
  popularity: string;
  poster_path: string;
  starstatus: string;
  // casts:[];
  // images:[];
}
