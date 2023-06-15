
export const shuffleArray = (array: unknown[]) => {
    return [...array].sort(() => Math.random() - .5);
}