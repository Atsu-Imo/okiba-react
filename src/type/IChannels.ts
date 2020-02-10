export interface IChannel {
  ID: number,
  CreatedAt: string,
  UpdatedAt: string,
  DeletedAt: string | null,
  ChannelID: string,
  Name: string | null,
  Title: string | null,
  URL: string,
  Thumbnail: string,
  Category: number,
  Rotation: number
}