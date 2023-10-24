export type User =  {id: number, name: string, email: string}
export type Post =  {id: number, title: string, content: string, likes: number, like_user_id: number[], showComments?: boolean}
export type Comment =  {id: number, postId: number, content: string}