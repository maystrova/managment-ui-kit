import userAvatar1 from '../Layout/pics/userpic1.png'
import userAvatar7 from '../Layout/pics/userpic7.png'
import userAvatar8 from '../Layout/pics/userpic8.png'
import userAvatar9 from '../Layout/pics/userpic9.png'
import userAvatar5 from '../Layout/pics/userpic5.png'
import userAvatar6 from '../Layout/pics/userpic6.png'

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

export const todoTasks: Task[] = [{
    title: `An option to search in current projects or in all projects`,
    user: userAvatar9,
    type: 'design'
}, {
        title: `Account for teams and personal in bottom style`,
        user: userAvatar5,
        type: 'marketing'
}, {
    title: `Listing on Product Hunt so that we can reach as many potential users`,
    user: userAvatar6,
    type: 'design'
},
]
