import { DiscussionType, TaskType } from 'Components/Task/types'
import { User } from 'services/user'
import { firebase } from 'services/firebase'

const createTask = async (task: TaskType, user: User) => {
    await firebase.database().ref(`users/${user.id}/tasks/`).push(task)
}

const createComment = async (
    comment: DiscussionType,
    user: User,
    task: TaskType,
) => {
    await firebase
        .database()
        .ref(`users/${user.id}/tasks/${task.id}/discussions`)
        .push(comment)
}

const updateTask = async (task: TaskType, user: User) => {
    await firebase.database().ref(`users/${user.id}/tasks/${task.id}`).set(task)
}

const getAllTasks = async (user: User): Promise<TaskType[]> => {
    const serverTasksRef = firebase.database().ref(`users/${user.id}/tasks/`)

    const snapshot = await serverTasksRef.once('value')

    const serverTasks = snapshot.val()
    return Object.keys(serverTasks).map(taskId => ({
        ...serverTasks[taskId],
        id: taskId,
    }))
}

export { createTask, updateTask, getAllTasks, createComment }
