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
    text: 'Coming from the high mountains of Austria, I washed ashore on an island in the Dutch North Sea. Not only did I switch my Apfelstrudel for Appeltaart - I also switched my profession from being a metrologist in the automotive industry to following my passion for creating awesome things on the Web.',
    image: about,
    linkto: '/aboutme',
  },
  {
    id: 2,
    class: 'dark',
    name: 'My Skills',
    text: 'One thing hasn’t changed since I was a kid with a GameBoy and Pokémon Red. I always wanted to be the very best, and I trained hard for those gym badges.<br/>I’m proud to show you my badge collection regarding the Web Development League.',

    image: skills,
    linkto: '/skills',
  },
  {
    id: 3,
    class: 'light',
    name: 'Projects',
    text: 'Here are some of my latest coding projects. From Websites to Full-Stack Web Apps. With screenshots and detailed information.<br/>Please have a look. And if you wish, you can take a deep dive and check their code on my Github page.',
    image: projects,
    linkto: '/projects',
  },
  {
    id: 4,
    class: 'dark',
    name: 'Photos',
    text: 'Whenever I’m out and about, I love to capture the moment with my camera. Creating beautiful memories is one of my greatest desires.<br/>My shelves are filled with photobooks, just as my hard drive is filled with images. Come along; I’ll show you some of my best. ',
    image: photos,
    linkto: '/photos',
  },
  {
    id: 5,
    class: 'light',
    name: 'Art',
    text: 'I would not describe myself as an artist, but as creative person.<br/>I like to draw, scribble, and paint whenever I can.<br/>Click here to see some of my latest work.',
    image: art,
    linkto: '/art',
  },
];
