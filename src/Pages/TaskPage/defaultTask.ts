import { TASK_TYPE, TaskType } from 'Components/Task/types'
import { TAG_TYPE } from 'Components/Tag'

import commentAvatar2 from './images/commentpic3.png'
import commentAvatar3 from './images/commentpic2.png'
import filePreview from './images/file.png'
import userAvatar1 from './images/userpic1.png'
import userAvatar2 from './images/userpic2.png'
import userAvatar3 from './images/userpic3.png'
import userAvatar4 from './images/userpic4.png'
import userAvatar5 from './images/userpic5.png'

export const DEFAULT_TASK: TaskType = {
    id: 'DEFAULT_TASK',
    title: 'Find top 5 customer requests',
    addedBy: 'Kristin A',
    createdAt: '07.01.2020',
    isChecked: false,
    assignTo: 'Linzell Bowman',
    dueOn: 'Tue, Dec 25',
    type: TASK_TYPE.BACKLOG,
    tag: TAG_TYPE.MARKETING,
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
            id: '432455756',
        },
        {
            name: 'Prescott MacCaffery',
            profession: 'Developer',
            date: 'Yesterday at 12:37pm',
            text:
                '@Helena Software quality assurance activity in which one or several humans check a program mainly',
            avatar: commentAvatar2,
            id: '235345446754',
        },
    ],
    user: { avatar: userAvatar1 },
    files: [],
}
