import userAvatar1 from '../Layout/pics/userpic1.png'
import userAvatar7 from '../Layout/pics/userpic7.png'
import userAvatar8 from '../Layout/pics/userpic8.png'

export type Task = {
    title: string,
    user: string,
    type: string
}


export const backlogTasks: Task[] = [{
    title: 'E-mail after registration so that I can confirm my address',
    user: userAvatar1,
    type: 'development'
}, {
    title: 'Find top 5 customers and get reviews from them',
    user: userAvatar7,
    type: 'marketing'
}, {
    title: 'Two-factor authentication to make my private data more secure',
    user: userAvatar8,
    type: 'design'
}]