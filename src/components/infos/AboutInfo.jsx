const calculateAge = (birthday) => {
    const currentDate = new Date();
    const birthDate = new Date(birthday);
    const ageDiff = currentDate - birthDate;
    const ageDate = new Date(ageDiff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return age;
};

export const personalDetails = [
    { label: 'Name', value: 'Ghelonico Maligaya' },
    { label: 'Age', value: calculateAge('1998-05-07') },
    { label: 'Gender', value: 'Male' },
    { label: 'Total Experience', value: `${calculateAge('1998-05-07') - 20} years`},
    { label: 'Current Occupation', value: 'Programmer (Feb, 2021)' },
    { label: 'Company', value: 'Monheim Group of Companies' },
    { label: 'School', value: 'STI Ortigas Cainta' },
    { label: 'Course', value: '(BSIT) Bachelor of Science in Information Technology' },
];

export const aboutIntro = [
    {
        value: `Hi! My name is Ghelonico G. Maligaya living in Antipolo City Rizal, Philippines. ${calculateAge('1998-05-07')} years old and
    I'm currently employed at Monheim Group of Companies as a Programmer.`},
    {
        value: `With nearly ${calculateAge('1998-05-07') - 20} years of experience, I have honed my programming skills, specializing in the development of web,
        mobile, and desktop applications. My expertise extends to navigating agile software development processes and workflows.`
    }
]

import ImageLinks from '../links/ImageLinks';

export const Languages = [
    { label: 'css', value: ImageLinks.css},
    { label: 'html', value: ImageLinks.html},
    { label: 'js', value: ImageLinks.js},
    { label: 'java', value: ImageLinks.java},
    { label: 'c#', value: ImageLinks.csharp},
    { label: 'php', value: ImageLinks.php},
    { label: 'kotlin', value: ImageLinks.kotlin},
    { label: 'xml', value: ImageLinks.xml},
]

export const Frameworks = [
    { label: 'node', value: ImageLinks.node},
    { label: 'react js', value: ImageLinks.reactjs},
    { label: 'tailwind', value: ImageLinks.tailwind},
    { label: 'laravel', value: ImageLinks.laravel},
    { label: '.net core', value: ImageLinks.netcore},
    { label: 'asp .net', value: ImageLinks.asp},
]

export const Databases = [
    { label: 'sql server', value: ImageLinks.sqlserver},
    { label: 'postgre', value: ImageLinks.postgre},
    { label: 'sqlite', value: ImageLinks.sqlite},
    { label: 'mysql', value: ImageLinks.mysql},
    { label: 'mongo db', value: ImageLinks.mongodb},
]

export const Ide = [
    { label: 'nginx', value: ImageLinks.nginx},
    { label: 'cloudflare', value: ImageLinks.cloudflare},
    { label: 'android', value: ImageLinks.androidstudio},
    { label: 'vscode', value: ImageLinks.vscode},
    { label: 'eclipse', value: ImageLinks.eclipse},
    { label: 'docker', value: ImageLinks.docker},
    { label: 'linux', value: ImageLinks.linux},
    { label: 'proxmox', value: ImageLinks.proxmox},
    { label: 'windows', value: ImageLinks.windows},
    { label: 'visual studio', value: ImageLinks.vs},
    { label: 'jenkins', value: ImageLinks.jenkins},
]
