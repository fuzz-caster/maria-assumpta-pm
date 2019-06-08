export interface FindOptions {
  keyword: string
  skip: number
  take: number
}

export const defaultFindOptions: FindOptions = {
  keyword: '',
  skip: 0,
  take: 100
}
