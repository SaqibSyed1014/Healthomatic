export const languages: string[] = [
    'English',
    'Chinese',
    'Spanish'
]

export const duration: string[] = [
    '15 days',
    'One Month',
    'Three Months'
]

export const contentOptions: { id: string, element: any }[] = [
    {
        id: 'heading',
        element: <span><span className="icon-heading mr-2"/> Heading</span>,
    },
    {
        id: 'text',
        element: <span><span className="icon-text-marker mr-2" /> Text (content)</span>,
    },
    {
        id: 'link',
        element: <span><span className="icon-link mr-2" /> Link</span>,
    },
    {
        id: 'image',
        element: <span><span className="icon-image-mockup mr-2" /> Image</span>,
    },
    {
        id: 'video',
        element: <span><span className="icon-play-video mr-2" /> Video</span>,
    }
]
