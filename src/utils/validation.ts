
export function validateTaskName(taskName: string) {
    if (taskName.trim().length === 0) {
        return 'Пожалуйста, введите название задачи'
    }

    if (taskName.trim().length < 3) {
        return `Минимальное количество символов для названия 5, у вас ${taskName.trim().length}`
    }

    if (taskName.trim().length > 40) {
        return `Максимальное количество символов для названия 40, у вас ${taskName.trim().length}`
    }

    return null
}

export function validateTaskDescription(taskDescription: string) {
    if (taskDescription.trim().length === 0) {
        return 'Пожалуйста, введите описания задачи'
    }

    if (taskDescription.trim().length < 3) {
        return `Минимальное количество символов для описания 3, у вас ${taskDescription.trim().length}`
    }

    if (taskDescription.trim().length > 130) {
        return `Максимальное количество символов для описания 130, у вас ${taskDescription.trim().length}`
    }

    return null
}