const calculateAge = (birthday) => {
    const currentDate = new Date();
    const birthDate = new Date(birthday);
    const ageDiff = currentDate - birthDate;
    const ageDate = new Date(ageDiff);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return age;
};



export const personalDetails = [
    { label: 'name', value: 'Ghelonico Maligaya' },
    { label: 'age', value: calculateAge('1998-05-07') },
    { label: 'experience', value: calculateAge('1998-05-07') - 20 },
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