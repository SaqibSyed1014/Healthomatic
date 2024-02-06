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

export const sortFilterOptions = [
    {
        text: 'Latest',
        value: 'latest'
    },
    {
        text: 'Newest',
        value: 'newest'
    },
    {
        text: 'Most Viewed',
        value: 'viewed'
    }
]

export const categoryFilterOptions = [
    {
        text: 'All Categories',
        value: 'all'
    },
    {
        text: 'Pathology',
        value: 'patho'
    },
    {
        text: 'Cytology',
        value: 'cyto'
    },
    {
        text: 'Virology',
        value: 'virus'
    }
]

export const courseList = [
    {
        title: 'Powering innovation at 200,00+ companies worldwide',
        image: '../../../images/feed/image-2.jpg',
        description: 'Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and...',
        tags: ['Medical Science'],
        receiversCount: 22,
        selectedUser: [
            {
                id: 11,
                name: 'Yarelia Schon',
                image: '../../../images/users/neil-sims.png'
            },
            {
                id: 14,
                name: 'Davis B.',
                image: '../../../images/users/robert-brown.png'
            },
        ]
    },
    {
        title: 'Powering innovation at 200,00+ companies worldwide',
        image: '../../../images/feed/image-2.jpg',
        description: 'Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and...',
        tags: ['Medical Science'],
        receiversCount: 0,
        selectedUser: []
    },
    {
        title: 'Powering innovation at 200,00+ companies worldwide',
        image: '../../../images/feed/image-2.jpg',
        description: 'Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and...',
        tags: ['Medical Science'],
        receiversCount: 15,
        selectedUser: [
            {
                id: 10,
                name: 'Kyle Benett',
                image: '../../../images/users/bonnie-green.png'
            },
            {
                id: 11,
                name: 'Yarelia Schon',
                image: '../../../images/users/neil-sims.png'
            },
            {
                id: 14,
                name: 'Davis B.',
                image: '../../../images/users/robert-brown.png'
            },
        ]
    },
    {
        title: 'Powering innovation at 200,00+ companies worldwide',
        image: '../../../images/feed/image-2.jpg',
        description: 'Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and...',
        tags: ['Medical Science'],
        receiversCount: 0,
        selectedUser: []
    },
    {
        title: 'Powering innovation at 200,00+ companies worldwide',
        image: '../../../images/feed/image-2.jpg',
        description: 'Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and...',
        tags: ['Medical Science'],
        receiversCount: 15,
        selectedUser: [
            {
                id: 10,
                name: 'Kyle Benett',
                image: '../../../images/users/bonnie-green.png'
            },
            {
                id: 12,
                name: 'Tom Oscar',
                image: '../../../images/users/helene-engels.png'
            },
            {
                id: 11,
                name: 'Yarelia Schon',
                image: '../../../images/users/neil-sims.png'
            },
            {
                id: 14,
                name: 'Davis B.',
                image: '../../../images/users/robert-brown.png'
            },
        ]
    }
]

export let suggestedUsers = [
        {
            id: 1,
            name: 'Abdul Wahab',
            image: '../../../images/users/roberta-casas.png'
        },
        {
            id: 2,
            name: 'Oscar Garcia',
            image: '../../../images/users/thomas-lean.png'
        },
        {
            id: 3,
            name: 'Yareli Bowen',
            image: '../../../images/users/michael-gough.png'
        },
        {
            id: 4,
            name: 'Kaysen',
            image: '../../../images/users/lana-byrd.png'
        },
        {
            id: 5,
            name: 'Gael Soto',
            image: '../../../images/users/joseph-mcfall.png'
        },
]

export const patientsTableCol = [
    '#',
    'Patient Name',
    'Username',
    'Email',
    'Courses Assigned'
]

export const patientsList = [
    {
        id: 1,
        name: 'Abdul Wahab',
        image: '../../../images/users/roberta-casas.png',
        username: 'abdul192',
        email: 'wahab@hotmail.com',
        coursesAssigned: ['MTL123', 'MT212', 'MTL135', 'MT250']
    },
    {
        id: 2,
        name: 'Oscar Garcia',
        image: '../../../images/users/thomas-lean.png',
        username: 'oscar900',
        email: 'oscar458@hotmail.com',
        coursesAssigned: ['MTL123', 'MT212', 'MTL135', 'MT250']
    },
    {
        id: 3,
        name: 'Arjun Bowen',
        image: '../../../images/users/michael-gough.png',
        username: 'arjun582',
        email: 'arjun_bow@hotmail.com',
        coursesAssigned: ['MTL123', 'MT212', 'MTL135', 'MT250']
    },
    {
        id: 4,
        name: 'Kaysen',
        image: '../../../images/users/lana-byrd.png',
        username: 'oscar900',
        email: 'oscar458@hotmail.com',
        coursesAssigned: ['MTL123', 'MT212', 'MTL135', 'MT250']
    },
    {
        id: 5,
        name: 'Gael Soto',
        image: '../../../images/users/joseph-mcfall.png',
        username: 'oscar900',
        email: 'oscar458@hotmail.com',
        coursesAssigned: ['MTL123', 'MT212', 'MTL135', 'MT250']
    },
    {
        id: 7,
        name: 'Gael Soto',
        image: '../../../images/users/joseph-mcfall.png',
        username: 'oscar900',
        email: 'oscar458@hotmail.com',
        coursesAssigned: ['MTL123', 'MT212', 'MTL135', 'MT250']
    },,
    {
        id: 8,
        name: 'Gael Soto',
        image: '../../../images/users/joseph-mcfall.png',
        username: 'oscar900',
        email: 'oscar458@hotmail.com',
        coursesAssigned: ['MTL123', 'MT212', 'MTL135', 'MT250']
    },
    {
        id: 9,
        name: 'Gael Soto',
        image: '../../../images/users/joseph-mcfall.png',
        username: 'oscar900',
        email: 'oscar458@hotmail.com',
        coursesAssigned: ['MTL123', 'MT212', 'MTL135', 'MT250']
    },
]
