import about from '../../img/home_item_images/about.jpg';
import skills from '../../img/home_item_images/skills.jpg';
import projects from '../../img/home_item_images/projects.jpg';
import photos from '../../img/home_item_images/photos.jpg';
import art from '../../img/home_item_images/art.jpg';

export const homedata = [
  {
    id: 1,
    class: 'light',
    name: 'About Me',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    image: about,
    linkto: '/aboutme',
  },
  {
    id: 2,
    class: 'dark',
    name: 'My Skills',
    text: 'One thing hasn’t changed, since I was a kid with a GameBoy and Pokémon Red. I always wanted to be the very Best and trained hard for those GYM-Badges.   I’m proud to show you my Badge Collection regarding the Web-Dev-League.',
    image: skills,
    linkto: '/skills',
  },
  {
    id: 3,
    class: 'light',
    name: 'Projects',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    image: projects,
    linkto: '/projects',
  },
  {
    id: 4,
    class: 'dark',
    name: 'Photos',
    text: 'When I’m out and about, I love to capturethe moment with my camera.Creating beautiful memories is one of my greatest desires. My shelfes are filled with photobooks as my hard-drive is with images. Come along, I’ll show you some of my best. ',
    image: photos,
    linkto: '/photos',
  },
  {
    id: 5,
    class: 'light',
    name: 'Art',
    text: 'Art, is a huge word. I would not describe myself as an Artist, but creative. I like do draw, scribble and paint whenever I can.',
    image: art,
    linkto: '/art',
  },
];
