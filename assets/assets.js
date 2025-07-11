
import userImage from './logo.png';
import logo from '@/assets/logo.png';
import rightArrow from '@/assets/right.png';
import moon from '@/assets/moon.png';
import sun from '@/assets/sun.png';
import menu_icon from '@/assets/menu_icon.png';
import close_icon from '@/assets/close_icon.png';
import default_image from '@/assets/default_image.jpeg';
import project_icon from '@/assets/project_icon.png';
import language_icon from '@/assets/language_icon.png';
import html from '@/assets/html.png';
import css from '@/assets/css.png';
import js from '@/assets/js.png';
import react from '@/assets/react.png';
import git from '@/assets/git.png';
import github from '@/assets/github.png';
import tailwindcss from '@/assets/tailwindcss.png';
import nextjs from '@/assets/nextjs.png';
import frontend from '@/assets/frontend.png';
import backenddev from '@/assets/backenddev.png';
import blogapp from '@/assets/blogapp.png';
import ecom from '@/assets/ecom.png';
import taskapp from '@/assets/taskapp.png';
import socialapp from '@/assets/socialapp.png';
import sendicon from '@/assets/sendicon.png';
import mail_icon from '@/assets/mail_icon.png';
import linkedin from '@/assets/linkedin.png';
import x_logo from '@/assets/x_logo.png';
import menu_dark from '@/assets/menu_dark.png';
import focus from '@/assets/focus.png';
import skills from '@/assets/skills.png';



export const assets = {
    userImage,
    logo,
    rightArrow,
    moon,
    sun,
    menu_icon,
    close_icon,
    default_image,
    project_icon,
    language_icon,
    html,
    css,
    js,
    react,
    git,
    github,
    tailwindcss,
    nextjs,
    frontend,
    backenddev,
    sendicon,
    blogapp,
    ecom,
    taskapp,
    socialapp,
    mail_icon,
    linkedin,
    x_logo,
    menu_dark,

}


export const Projects = [

    {
        title: 'E-commerce Website',
        description: `An e-commerce website built with React and Node.js.`,
        bgImage: ecom
    },

    {
        title: 'Task Management App',
        description: `A task management app built with React and Next js.`,
        bgImage: taskapp

    },

    {
        title: 'Blog Website',
        description: `A blog website built with Next.js and MongoDB.`,
        bgImage: blogapp

    },

    {
        title: 'Social Media App',
        description: `A social media app built with React Native and Firebase.`,
        bgImage: socialapp

    },
]

export const serviceData = [

    {
        icon: assets.frontend,
        title: 'Frontend Development',
        description: `I am a frontend developer with experience in building responsive and user-friendly websites.`,
        link: '#',
    },

    {
        icon: assets.backenddev,
        title: 'Backend Development',
        description: `I am a backend developer with experience in building scalable and secure web applications.`,
        link: '#',
    },

    {
        icon: assets.frontend,
        title: 'UI/UX Design',
        description: `I am a UI/UX designer with experience in creating user-centered designs for web and mobile applications.`,
        link: '#',
    }

]

export const toolsIcon = [

    assets.html,
    assets.css,
    assets.js,
    assets.nextjs,
    assets.react,
    assets.git,
    assets.github,
    assets.tailwindcss,

]

export const infoData = [
    {
        icon: skills,
        iconDark: skills,
        title: 'Skills',
        description: '💻 Skilled in React, Node.js, Express.js, MongoDB – building full-stack apps with modern technologies.',
    },
    {
        icon: focus,
        iconDark: focus,
        title: 'Focus Areas',
        description: '🚀 Building responsive web apps and Creative UI/UX with modern frameworks',
    }
]

export const workData = [
    {
        title: 'Web Development',
        description: `I am a web developer with experience in building responsive and user-friendly websites. 
        I have a strong understanding of HTML, CSS, and JavaScript, and I am proficient in using frameworks like React and Angular.`,
        bgImage: userImage,
    },
    {
        title: 'Mobile Development',
        description: `I am a mobile developer with experience in building cross-platform applications using React Native and Flutter. 
        I have a strong understanding of mobile design principles and best practices, and I am proficient in using tools like Xcode and Android Studio.`,
        bgImage: userImage,
    },
    {
        title: 'UI/UX Design',
        description: `I am a UI/UX designer with experience in creating user-centered designs for web and mobile applications. 
        I have a strong understanding of design principles and best practices, and I am proficient in using design tools like Figma and Adobe XD.`,
        bgImage: userImage,
    }
]

export const projectData = [
    {
        title: 'Project 1',
        description: `This is a project that I worked on. It is a web application that allows users to create and manage tasks. 
        I used React for the front-end and Node.js for the back-end.`,
        bgImage: userImage,
        link: '#',
    },
    {
        title: 'Project 2',
        description: `This is another project that I worked on. It is a mobile application that allows users to track their fitness goals. 
        I used React Native for the front-end and Firebase for the back-end.`,
        bgImage: userImage,
        link: '#',
    },
]