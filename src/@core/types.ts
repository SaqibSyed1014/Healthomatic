interface TeachingItem {
    id: number
    description: string
}
interface FaqItem {
    question: string
    answer: string
}

export interface BasicInfo {
    subject: string
    title: string
    category: string
    teachingList : TeachingItem[]
}
export interface AdvanceInfo {
    language: string
    duration: string
    description: string
    thumbnail: string
    overview: string
}
export interface FaqsList extends Array<FaqItem> {}

export interface CourseInfo {
    basicInformation: BasicInfo
    advanceInformation: AdvanceInfo
    faqsList: FaqsList
}




