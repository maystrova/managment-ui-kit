import userAvatar1 from '../Layout/pics/userpic1.png'
import userAvatar7 from '../Layout/pics/userpic7.png'
import userAvatar8 from '../Layout/pics/userpic8.png'
import userAvatar9 from '../Layout/pics/userpic9.png'
import userAvatar5 from '../Layout/pics/userpic5.png'
import userAvatar6 from '../Layout/pics/userpic6.png'
import {TaskType} from "../Task/types";
import userAvatar2 from "./pics/userpic2.png";
import userAvatar3 from "./pics/userpic3.png";
import userAvatar4 from "./pics/userpic4.png";
import commentAvatar3 from "./pics/commentpic2.png";
import commentAvatar2 from "./pics/commentpic3.png";
import ownerAvatar from "./pics/userpic.svg";
import filePreview from "./pics/file.png";

export type Task = {
    title: string,
    user: string,
    type: string
}

export const backlogTasks: TaskType[] = [{
    title: 'E-mail after registration so that I can confirm my address',
    user: {avatar: userAvatar1},
    tag: 'development',
    addedBy: 'Kristin A',
    createdAt: '07.01.2020',
    isChecked: false,
    assignTo: 'Linzell Bowman',
    dueOn: 'Tue, Dec 25',
    followers: [userAvatar2, userAvatar3, userAvatar4, userAvatar5],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    discussions: [
        {
            name: 'Helena Brauer',
            profession: 'Designer',
            date: 'Yesterday at 12:37pm',
            text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
            avatar: commentAvatar3
        },
        {
            name: 'Prescott MacCaffery,',
            profession: 'Developer',
            date: 'Yesterday at 12:37pm',
            text: '@Helena Software quality assurance activity in which one or several humans check a program mainly',
            avatar: commentAvatar2
        }
    ],
    files: [{
        title: 'Redesign Brief',
        format: '.pdf',
        preview: filePreview,
        size: '159 kb'
    },
        {
            title: 'Header',
            format: '.png',
            preview: filePreview,
            size: '129 kb'
        }]
}, {
    title: 'Find top 5 customers and get reviews from them',
    user: {avatar: userAvatar7},
    tag: 'marketing',
    addedBy: 'Kristin A',
    createdAt: '07.01.2020',
    isChecked: false,
    assignTo: 'Linzell Bowman',
    dueOn: 'Tue, Dec 25',
    followers: [userAvatar2, userAvatar3, userAvatar4, userAvatar5],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    discussions: [
        {
            name: 'Helena Brauer',
            profession: 'Designer',
            date: 'Yesterday at 12:37pm',
            text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
            avatar: commentAvatar3
        },
        {
            name: 'Prescott MacCaffery,',
            profession: 'Developer',
            date: 'Yesterday at 12:37pm',
            text: '@Helena Software quality assurance activity in which one or several humans check a program mainly',
            avatar: commentAvatar2
        }
    ],
    files: [{
        title: 'Redesign Brief',
        format: '.pdf',
        preview: filePreview,
        size: '159 kb'
    },
        {
            title: 'Header',
            format: '.png',
            preview: filePreview,
            size: '129 kb'
        }]
}, {
    title: 'Two-factor authentication to make my private data more secure',
    user: {avatar: userAvatar8},
    tag: 'design',
    addedBy: 'Kristin A',
    createdAt: '07.01.2020',
    isChecked: false,
    assignTo: 'Linzell Bowman',
    dueOn: 'Tue, Dec 25',
    followers: [userAvatar2, userAvatar3, userAvatar4, userAvatar5],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    discussions: [
        {
            name: 'Helena Brauer',
            profession: 'Designer',
            date: 'Yesterday at 12:37pm',
            text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
            avatar: commentAvatar3
        },
        {
            name: 'Prescott MacCaffery,',
            profession: 'Developer',
            date: 'Yesterday at 12:37pm',
            text: '@Helena Software quality assurance activity in which one or several humans check a program mainly',
            avatar: commentAvatar2
        }
    ],
    files: [{
        title: 'Redesign Brief',
        format: '.pdf',
        preview: filePreview,
        size: '159 kb'
    },
        {
            title: 'Header',
            format: '.png',
            preview: filePreview,
            size: '129 kb'
        }]
}]

export const todoTasks: TaskType[] = [{
    title: `An option to search in current projects or in all projects`,
    user: {avatar: userAvatar9},
    tag: 'design',
    addedBy: 'Kristin A',
    createdAt: '07.01.2020',
    isChecked: false,
    assignTo: 'Linzell Bowman',
    dueOn: 'Tue, Dec 25',
    followers: [userAvatar2, userAvatar3, userAvatar4, userAvatar5],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    discussions: [
        {
            name: 'Helena Brauer',
            profession: 'Designer',
            date: 'Yesterday at 12:37pm',
            text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
            avatar: commentAvatar3
        },
        {
            name: 'Prescott MacCaffery,',
            profession: 'Developer',
            date: 'Yesterday at 12:37pm',
            text: '@Helena Software quality assurance activity in which one or several humans check a program mainly',
            avatar: commentAvatar2
        }
    ],
    files: [{
        title: 'Redesign Brief',
        format: '.pdf',
        preview: filePreview,
        size: '159 kb'
    },
        {
            title: 'Header',
            format: '.png',
            preview: filePreview,
            size: '129 kb'
        }]
}, {
    title: `Account for teams and personal in bottom style`,
    user: {avatar: userAvatar5},
    tag: 'marketing',
    addedBy: 'Kristin A',
    createdAt: '07.01.2020',
    isChecked: false,
    assignTo: 'Linzell Bowman',
    dueOn: 'Tue, Dec 25',
    followers: [userAvatar2, userAvatar3, userAvatar4, userAvatar5],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    discussions: [
        {
            name: 'Helena Brauer',
            profession: 'Designer',
            date: 'Yesterday at 12:37pm',
            text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
            avatar: commentAvatar3
        },
        {
            name: 'Prescott MacCaffery,',
            profession: 'Developer',
            date: 'Yesterday at 12:37pm',
            text: '@Helena Software quality assurance activity in which one or several humans check a program mainly',
            avatar: commentAvatar2
        }
    ],
    files: [{
        title: 'Redesign Brief',
        format: '.pdf',
        preview: filePreview,
        size: '159 kb'
    },
        {
            title: 'Header',
            format: '.png',
            preview: filePreview,
            size: '129 kb'
        }]
}, {
    title: `Listing on Product Hunt so that we can reach as many potential users`,
    user: {avatar: userAvatar6},
    tag: 'design',
    addedBy: 'Kristin A',
    createdAt: '07.01.2020',
    isChecked: false,
    assignTo: 'Linzell Bowman',
    dueOn: 'Tue, Dec 25',
    followers: [userAvatar2, userAvatar3, userAvatar4, userAvatar5],
    description: 'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
    discussions: [
        {
            name: 'Helena Brauer',
            profession: 'Designer',
            date: 'Yesterday at 12:37pm',
            text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
            avatar: commentAvatar3
        },
        {
            name: 'Prescott MacCaffery,',
            profession: 'Developer',
            date: 'Yesterday at 12:37pm',
            text: '@Helena Software quality assurance activity in which one or several humans check a program mainly',
            avatar: commentAvatar2
        }
    ],
    files: [{
        title: 'Redesign Brief',
        format: '.pdf',
        preview: filePreview,
        size: '159 kb'
    },
        {
            title: 'Header',
            format: '.png',
            preview: filePreview,
            size: '129 kb'
        }]
},
]
