
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import AuthModal from '../../auth/AuthModal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData ,Logout} from '../../../state/Auth/Action'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { store } from '../../../state/Store'
import { getCart } from '../../../state/cart/Action'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function NavBar() {
  const [open, setOpen] = useState(false)
  const [openProfile,setopenProfile]=useState(false)
  const [handelAuthModal,sethandelAuthModal]=useState(false)
  const navigate=useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch=useDispatch()
  const {card}=useSelector(store=>store)
 
  const handelMobilNav=()=>{
    const mobileNav=document.querySelector(".mobile-navigation-menu")
    mobileNav.classList.toggle("active")
  }
  const handelSubmenu=(e)=>{
   
    const mobileNav=e.target.nextElementSibling
    mobileNav.classList.toggle("active")
  }

  useEffect(()=>{
    dispatch(getCart())
  },[dispatch])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

 


  const handelCategoryclick=(category,section,item,close)=>{
    navigate(`/${category.id}/${section.id}/${item.name}`)
    
  }
  const handleClose=()=>{
    sethandelAuthModal(false);
    setAnchorEl(null)
  }
  const handleOpen=()=>{
    sethandelAuthModal(true);
  }

  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  
  useEffect(()=>{
        if(jwt){
            dispatch(fetchUserData(jwt))
        }

    },[jwt,auth.jwt])

    useEffect(()=>{
      if(auth.user){
          handleClose()
      }
      if(navigate.pathname==="/login" || navigate.pathname==="/register"){
        navigate(-1)
      }

  },[auth.user])

  const handelLogOut=()=>{
    dispatch(Logout);
   handleClose()
    
  }
  const dropdownContent = [
    {
      title: "Electronics",
      image:{ label: "Image", link: "/image/electronics-banner-1.jpg", alt: "headphone collection", width: 250, height: 119 },
      items: [
        { label: "Desktop", link: "#" },
        { label: "Laptop", link: "#" },
        { label: "Camera", link: "#" },
        { label: "Tablet", link: "#" },
        { label: "Headphone", link: "#" },
      ],

    },
    {
      title: "Men",
      image: { label: "Image", link: "/image/mens-banner.jpg", alt: "men's fashion", width: 250, height: 119 },
      items: [
        { label: "Formal", link: "#" },
        { label: "Casual", link: "#" },
        { label: "Sports", link: "#" },
        { label: "Jacket", link: "#" },
        { label: "Sunglasses", link: "#" },
       
      ],
    },
    {
      title: "Women's",
      image:{ label: "Image", link: "/image/womens-banner.jpg", alt: "women's fashion", width: 250, height: 119 },
      items: [
        { label: "Formal", link: "#" },
        { label: "Casual", link: "#" },
        { label: "Perfume", link: "#" },
        { label: "Cosmetics", link: "#" },
        { label: "Bags", link: "#" },
        
      ],
    },
    {
      title: "Electronics",
      image:{ label: "Image", link: "/image/electronics-banner-2.jpg", alt: "mouse collection", width: 250, height: 119 },
      items: [
        { label: "Smart Watch", link: "#" },
        { label: "Smart TV", link: "#" },
        { label: "Keyboard", link: "#" },
        { label: "Mouse", link: "#" },
        { label: "Microphone", link: "#" },
        
      ],
    },
  ];
  

  

  return (
 
  <header>

 

    <div class="header-main">

        <div class="container">

          <Link to="/" class="header-logo">
          <h1 className=' text-xl font-bold'>ENNAEM</h1>
          </Link>

          <div class="header-search-container">

            <input type="search" name="search" class="search-field" placeholder="Enter your product name..."/>

            <button class="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>

          </div>

          <div class="header-user-actions">

              
            {
                    auth.user?. firstName?<div className="hidden lg:ml-8 lg:flex  relative">
                      <Avatar  className=" cursor-pointer uppercase" onClick={handleClick}
                      aria-controls={open ?"true":undefined}
                      aria-haspopup="true"
                      >
                        {auth.user?. firstName[0]}
                      </Avatar>
                      
        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            className=''
                            >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
                          <MenuItem onClick={()=>navigate("/acount/orders")}>My Order</MenuItem>
                          <MenuItem onClick={handelLogOut}>Logout</MenuItem>
                          </Menu>
        
                      
                      </div>:<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <Button onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800">
                        Sign in
                      </Button>
                    
                  </div>
                  }
                  {
                    auth.user?. firstName?<button class="action-btn" onClick={()=>navigate("/card")}>
            
                    <i className="fa-solid fa-cart-shopping"></i>
                      <span class="count">{card.cart?.totleitem}</span>
                    </button>:""
                  }
        

        

          </div>

        </div>

    </div>

    <nav class="desktop-navigation-menu">

        <div class="container">

          <ul class="desktop-menu-category-list">

            <li class="menu-category">
              <Link to="/" class="menu-title">Home</Link>
            </li>

            <li class="menu-category">
              <a href="" class="menu-title">Categories</a>

              <div class="dropdown-panel">
                {
                  dropdownContent.map((items)=>{
                    return(
    <ul class="dropdown-panel-list">

          <li class="menu-title">
            <a href="#">{items.title}</a>
          </li>

        {
          items.items.map((item)=>{
            return(
              <li class="panel-list-item">
                        <Link to={`${items.title}/${item.label}`}>{item.label}</Link>
                      </li>
            )
          })
        }



    <li class="panel-list-item">
      <a href="#">
        <img src={`${process.env.PUBLIC_URL}${items.image.link}`} alt="headphone collection" width="250"
          height="119"/>
      </a>
    </li>

    </ul>
                    )
                  })

                }

                

              

              </div>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Men's</a>

              <ul class="dropdown-list">

                <li class="dropdown-item">
                  <a href="#">Shirt</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Shorts & Jeans</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Safety Shoes</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Wallet</a>
                </li>

              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">Women's</a>

              <ul class="dropdown-list">

                <li class="dropdown-item">
                  <a href="#">Dress & Frock</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Earrings</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Necklace</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Makeup Kit</a>
                </li>

              </ul>
            </li>

          

          </ul>

        </div>

    </nav>

    <div class="mobile-bottom-navigation">

        <button class="action-btn" onClick={handelMobilNav} data-mobile-menu-open-btn>
          
          <i class="fa-solid fa-bars"></i>
        </button>

       
        

              

      {
        auth.user?. firstName?<button class="action-btn" onClick={()=>navigate("/card")}>

        <i className="fa-solid fa-cart-shopping"></i>
          <span class="count">{card.cart?.totleitem}</span>
        </button>:""
      }
      {
        auth.user?. firstName?<div className="lg:ml-8 lg:flex  relative">
          <Avatar  className=" cursor-pointer uppercase" onClick={handleClick}
          aria-controls={open ?"true":undefined}
          aria-haspopup="true"
          >
            {auth.user?. firstName[0]}
          </Avatar>
          
<Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className=''
                >
<MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={()=>navigate("/acount/orders")}>My Order</MenuItem>
              <MenuItem onClick={handelLogOut}>Logout</MenuItem>
              </Menu>

          
          </div>:<div className=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
          <Button onClick={handleOpen}
          className="text-sm font-medium text-gray-700 hover:text-gray-800">
            Sign in
          </Button>
        
      </div>
      }






       

    </div>

    <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

      <div class="menu-top">
        <h2 class="menu-title">Menu</h2>

        <button class="menu-close-btn" onClick={handelMobilNav} data-mobile-menu-close-btn>
          
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <ul class="mobile-menu-category-list">

        <li class="menu-category">
          <Link to={"/"} class="menu-title">Home</Link>
        </li>
      {
        dropdownContent.map((items)=>{
   return(
    <li class="menu-category">

          <button class="accordion-menu" onClick={handelSubmenu} data-accordion-btn>
            <p class="menu-title">{items.title}</p>

            <div>
             
              <i name="add-outline"  class="fa-solid fa-plus add-icon"></i>
              <i name="remove-outline" class="fa-solid fa-minus remove-icon"></i>
            </div>
          </button>

          <ul class="submenu-category-list" data-accordion>
            {
              items.items.map((item)=>{
                return(
                  <li class="submenu-category">
                        <Link to={`${items.title}/${item.label}`}>{item.label}</Link>
                  
                </li>
                )
              })
            }
          

          </ul>

        </li>
   )
        })
      }
      

      </ul>

      <div class="menu-bottom">

       
        <ul class="menu-social-container">

          <li>
            <a href="#" class="social-link">
            <i class="fa-brands fa-facebook"></i>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
            <i class="fa-brands fa-instagram"></i>
            </a>
          </li>

          <li>
            <a href="www.linkedin.com/in/mohamed-ennaem-000597227" class="social-link">
            <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>

        </ul>

      </div>

    </nav>
    <AuthModal handleClose={handleClose} open={handelAuthModal} handleOpen={handleOpen}/>

</header>
  )
}


export default NavBar