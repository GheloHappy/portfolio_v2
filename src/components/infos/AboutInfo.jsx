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

import css from '../../assets/img/languages/css.webp'
import html from '../../assets/img/languages/html.webp'
import js from '../../assets/img/languages/js.webp'
import java from '../../assets/img/languages/java.webp'
import csharp from '../../assets/img/languages/csharp.webp'
import php from '../../assets/img/languages/php.webp'
import kotlin from '../../assets/img/languages/kotlin.webp'
import xml from '../../assets/img/languages/xml.webp'

export const Languages = [
    { label: 'css', value: css},
    { label: 'html', value: html},
    { label: 'js', value: js},
    { label: 'java', value: java},
    { label: 'c#', value: csharp},
    { label: 'php', value: php},
    { label: 'kotlin', value: kotlin},
    { label: 'xml', value: xml},
]

import node from '../../assets/img/frameworks/node.webp'
import reactjs from '../../assets/img/frameworks/reactjs.webp'
import tailwind from '../../assets/img/frameworks/tailwindcss.webp'
import laravel from '../../assets/img/frameworks/laravel.webp'
import netcore from '../../assets/img/frameworks/netcore.webp'
import asp from '../../assets/img/frameworks/asp.webp'

export const Frameworks = [
    { label: 'node', value: node},
    { label: 'react js', value: reactjs},
    { label: 'tailwind', value: tailwind},
    { label: 'laravel', value: laravel},
    { label: '.net core', value: netcore},
    { label: 'asp .net', value: asp},
]

import sqlserver from '../../assets/img/databases/sqlserver.webp'
import postgre from '../../assets/img/databases/postgre.webp'
import sqlite from '../../assets/img/databases/sqlite.webp'
import mysql from '../../assets/img/databases/mysql.webp'
import mongodb from '../../assets/img/databases/mongodb.webp'

export const Databases = [
    { label: 'sql server', value: sqlserver},
    { label: 'postgre', value: postgre},
    { label: 'sqlite', value: sqlite},
    { label: 'mysql', value: mysql},
    { label: 'mongo db', value: mongodb},
]

import nginx from '../../assets/img/ide/nginx.webp'
import cloudflare from '../../assets/img/ide/cloudflare.webp'
import androidstudio from '../../assets/img/ide/androidstudio.webp'
import vs from '../../assets/img/ide/vs.webp'
import vscode from '../../assets/img/ide/vscode.webp'
import eclipse from '../../assets/img/ide/eclipse.webp'
import docker from '../../assets/img/ide/docker.webp'
import linux from '../../assets/img/ide/linux.webp'
import proxmox from '../../assets/img/ide/proxmox.webp'
import windows from '../../assets/img/ide/windows.webp'

export const Ide = [
    { label: 'nginx', value: nginx},
    { label: 'cloudflare', value: cloudflare},
    { label: 'android', value: androidstudio},
    { label: 'vscode', value: vscode},
    { label: 'eclipse', value: eclipse},
    { label: 'docker', value: docker},
    { label: 'linux', value: linux},
    { label: 'proxmox', value: proxmox},
    { label: 'windows', value: windows},
    { label: 'visual studio', value: vs},
]
