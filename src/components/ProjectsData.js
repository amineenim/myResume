
import shopping from '../assets/shopping.avif';
import blogging from '../assets/blog.jpg';
import todo from '../assets/todo.avif';
import grid from '../assets/grid.avif';
import restauration from '../assets/restauration.avif';
import plante from '../assets/plant.avif';


const ProjectData = [
    {
        imgsrc : shopping,
        title : 'hey',
        description : "This is an E-Commerce User interface that allows the user to shop items from a shop that provides products from a fakestoreAPI, the app handles updating the global state using the Redux management state toolkit , the UI allows the user to click an item as many times as he likes, the item quantity, the total items in cart and the total price are updated in response, the user can also remove all items related to a product from cart and also to reset his cart, he has also the possibility to navigate between different pages and sort products by the desired category.",
        url : "https://github.com/amineenim/E-Commerce-UI"
    },
    {
        imgsrc : blogging,
        title : 'Blog',
        description : "This is laravel blog application allowing users to athenticate, register, verify their email, add posts and comments, with the full CRUD utilities included, authorization checks are also implemented.",
        url : "https://github.com/amineenim/Laravelblog"
    },
    {
        imgsrc : todo,
        title : "Todo App",
        description : "This application is a todo app that allows the user to planify their tasks, add new ones, delete them, edit them and finally mark a todo as completed, it also allows to keep todos even after page reload using localStorage to keep state between numerous reloads.",
        url : "https://github.com/amineenim/TodoApp"
    },
    {
        imgsrc : grid,
        title : "Grid Game",
        description : "This is a game made fully with JS that randomly sets content of certain columns and find their neighbors in a way where each one has and is one neighbor",
        url : "https://github.com/amineenim/GridGame"
    },
    {
        imgsrc : restauration,
        title : "Restauration App",
        description : "This is a laravel application that serves as a user interface to make reservations for a table in a restaurant, it handles authenticating users, an admin panel and all authorizations based on roles of users.",
        url : "https://github.com/amineenim/restaurationApp"
    },
    {
        imgsrc : plante,
        title : "Plants Shop",
        description : "this is a project that diplays a UI for a plant shop with multiple utilities that make it interactive, a user may select any plants he'd like to buy and the total amount will be calculated in parallel and displayed for them, they can also hide the cart or show it with a button.",
        url : "https://github.com/amineenim/plantsShopUI"
    }

]

export default ProjectData;