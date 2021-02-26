import userAvatar1 from '../Layout/pics/userpic1.png'
import userAvatar7 from '../Layout/pics/userpic7.png'
import userAvatar8 from '../Layout/pics/userpic8.png'
import userAvatar9 from '../Layout/pics/userpic9.png'
import userAvatar5 from '../Layout/pics/userpic5.png'
import userAvatar6 from '../Layout/pics/userpic6.png'
import { TASK_TYPE, TaskType } from '../Task/types'
import userAvatar2 from './pics/userpic2.png'
import userAvatar3 from './pics/userpic3.png'
import userAvatar4 from './pics/userpic4.png'
import commentAvatar3 from './pics/commentpic2.png'
import commentAvatar2 from './pics/commentpic3.png'
import filePreview from './pics/file.png'
import { TAG_TYPE } from '../Tag'

export type Task = {
    title: string
    user: string
    type: string
}

export enum SIDEBAR_LIST {
    TEAMS = 'teams',
    PROJECTS = 'projects',
    MENU = 'menu',
}

export const tasks: TaskType[] = [
    {
        title: 'E-mail after registration so that I can confirm my address',
        user: { avatar: userAvatar1 },
        tag: TAG_TYPE.DEVELOPMENT,
        type: TASK_TYPE.BACKLOG,
        addedBy: 'Kristin A',
        createdAt: '07.01.2020',
        isChecked: false,
        assignTo: 'Linzell Bowman',
        dueOn: 'Tue, Dec 25',
        followers: [userAvatar2, userAvatar3, userAvatar4, userAvatar5],
        description:
            'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
        discussions: [
            {
                name: 'Helena Brauer',
                profession: 'Designer',
                date: 'Yesterday at 12:37pm',
                text:
                    'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
                avatar: commentAvatar3,
            },
            {
                name: 'Prescott MacCaffery,',
                profession: 'Developer',
                date: 'Yesterday at 12:37pm',
                text:
                    '@Helena Software quality assurance activity in which one or several humans check a program mainly',
                avatar: commentAvatar2,
            },
        ],
        files: [
            {
                title: 'Redesign Brief',
                format: '.pdf',
                preview: filePreview,
                size: '159 kb',
                id: 3,
            },
            {
                title: 'Header',
                format: '.png',
                preview: filePreview,
                size: '129 kb',
                id: 4,
            },
        ],
    },
    {
        title: 'Find top 5 customers and get reviews from them',
        user: { avatar: userAvatar7 },
        tag: TAG_TYPE.MARKETING,
        type: TASK_TYPE.BACKLOG,
        addedBy: 'Sophie J.',
        createdAt: '05.04.2020',
        isChecked: false,
        assignTo: 'Kurz Russell',
        dueOn: 'Wed, Dec 26',
        followers: [userAvatar3, userAvatar5],
        description:
            'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
        discussions: [
            {
                name: 'Din Thomas',
                profession: 'Wizard',
                date: 'Yesterday at 12:40pm',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                avatar: userAvatar9,
            },
            {
                name: 'Emma Watson,',
                profession: 'Developer',
                date: 'Yesterday at 12:37pm',
                text:
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                avatar: userAvatar2,
            },
        ],
        files: [
            {
                title: 'Redesign Brief',
                format: '.pdf',
                preview: filePreview,
                size: '159 kb',
                id: 1,
            },
            {
                title: 'Header',
                format: '.png',
                preview: filePreview,
                size: '129 kb',
                id: 2,
            },
        ],
    },
    {
        title: 'Two-factor authentication to make my private data more secure',
        user: { avatar: userAvatar8 },
        tag: TAG_TYPE.DESIGN,
        type: TASK_TYPE.BACKLOG,
        addedBy: 'Chris P.',
        createdAt: '01.01.2020',
        isChecked: false,
        assignTo: 'Johny Bravo',
        dueOn: 'Sun, Jan 10',
        followers: [userAvatar6, userAvatar1, userAvatar2],
        description:
            'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
        discussions: [
            {
                name: 'Sophie Loren',
                profession: 'Actress',
                date: 'Yesterday at 13:15pm',
                text:
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                avatar: userAvatar5,
            },
            {
                name: 'Harold Lowder',
                profession: 'Teenager',
                date: 'Yesterday at 12:45pm',
                text:
                    ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                avatar: userAvatar8,
            },
        ],
        files: [
            {
                title: 'Redesign Brief',
                format: '.pdf',
                preview: filePreview,
                size: '159 kb',
                id: 1,
            },
            {
                title: 'Header',
                format: '.png',
                preview: filePreview,
                size: '129 kb',
                id: 1000,
            },
        ],
    },
    {
        title: `An option to search in current projects or in all projects`,
        user: { avatar: userAvatar9 },
        tag: TAG_TYPE.DESIGN,
        type: TASK_TYPE.TODO,
        addedBy: 'John A.',
        createdAt: '07.01.2020',
        isChecked: false,
        assignTo: 'Leo Still',
        dueOn: 'Mon, Jun 25',
        followers: [userAvatar5],
        description:
            'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
        discussions: [
            {
                name: 'Kelsy Bowman',
                profession: 'Manager',
                date: 'Yesterday at 14:03pm',
                text:
                    ' Cras semper auctor neque vitae tempus. Vitae suscipit tellus mauris a diam maecenas sed.',
                avatar: userAvatar3,
            },
            {
                name: 'Ken Morby,',
                profession: 'Designer',
                date: 'Yesterday at 15:04pm',
                text:
                    'Orci ac auctor augue mauris. Amet facilisis magna etiam tempor orci eu lobortis elementum.',
                avatar: userAvatar6,
            },
        ],
        files: [
            {
                title: 'Redesign Brief',
                format: '.pdf',
                preview: filePreview,
                size: '159 kb',
                id: 99999,
            },
            {
                title: 'Header',
                format: '.png',
                preview: filePreview,
                size: '129 kb',
                id: 234234,
            },
        ],
    },
    {
        title: `Account for teams and personal in bottom style`,
        user: { avatar: userAvatar5 },
        tag: TAG_TYPE.MARKETING,
        type: TASK_TYPE.TODO,

        addedBy: 'Sally G',
        createdAt: '15.03.2020',
        isChecked: false,
        assignTo: 'Kelsy Jenner',
        dueOn: 'Tue, Dec 27',
        followers: [userAvatar9, userAvatar4, userAvatar3, userAvatar5],
        description:
            'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
        discussions: [
            {
                name: 'Loren Koen',
                profession: 'Developer',
                date: 'Today at 17:00pm',
                text:
                    'Ultricies integer quis auctor elit sed vulputate. Ipsum suspendisse ultrices gravida dictum fusce.',
                avatar: userAvatar5,
            },
            {
                name: 'Alice Morgan,',
                profession: 'Developer',
                date: 'Today at 17.03pm',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                avatar: userAvatar5,
            },
        ],
        files: [
            {
                title: 'Redesign Brief',
                format: '.pdf',
                preview: filePreview,
                size: '159 kb',
                id: 3245,
            },
            {
                title: 'Header',
                format: '.png',
                preview: filePreview,
                size: '129 kb',
                id: 2345235465,
            },
        ],
    },
    {
        title: `Listing on Product Hunt so that we can reach as many potential users`,
        user: { avatar: userAvatar6 },
        tag: TAG_TYPE.DESIGN,
        type: TASK_TYPE.TODO,
        addedBy: 'Holly Page',
        createdAt: '08.06.2020',
        isChecked: false,
        assignTo: 'Dadly Hooper',
        dueOn: 'Tue, Jul 25',
        followers: [userAvatar3, userAvatar4],
        description:
            'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
        discussions: [
            {
                name: 'Holly Molly',
                profession: 'Designer',
                date: 'Yesterday at 19:04pm',
                text:
                    'Tortor dignissim convallis aenean et tortor. Nunc aliquet bibendum enim facilisis.',
                avatar: userAvatar3,
            },
            {
                name: 'Dan Hole,',
                profession: 'Manager',
                date: 'Yesterday at 19:20pm',
                text:
                    'Sapien eget mi proin sed libero. Porta nibh venenatis cras sed felis eget.',
                avatar: commentAvatar2,
            },
        ],
        files: [
            {
                title: 'Redesign Brief',
                format: '.pdf',
                preview: filePreview,
                size: '159 kb',
                id: 345,
            },
            {
                title: 'Header',
                format: '.png',
                preview: filePreview,
                size: '129 kb',
                id: 2345742345,
            },
        ],
    },
]
