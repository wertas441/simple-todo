
export function validateTaskName(taskName: string) {
    if (taskName.trim().length === 0) {
        return 'Пожалуйста, введите название задачи'
    }

    if (taskName.trim().length < 5) {
        return `Минимальное количество символов для названия 5, у вас ${taskName.trim().length}`
    }

    if (taskName.trim().length > 20) {
        return `Максимальное количество символов для названия 20, у вас ${taskName.trim().length}`
    }

    return null
}

export function validateTaskDescription(taskDescription: string) {
    if (taskDescription.trim().length === 0) {
        return 'Пожалуйста, введите описания задачи'
    }

    if (taskDescription.trim().length < 5) {
        return `Минимальное количество символов для описания 5, у вас ${taskDescription.trim().length}`
    }

    if (taskDescription.trim().length > 20) {
        return `Максимальное количество символов для описания 20, у вас ${taskDescription.trim().length}`
    }

    return null
}