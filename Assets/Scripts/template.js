

// header 


export const my_header = () => {
    
    return `

        <button  class="md:hidden  toggleMenu ">
          <img class="w-5" src="/Assets/Resources/icones/Menu.svg" alt="Menu">
        </button>
        <a href="/index.html" class="flex items-center text-orange-500 font-bold text-xl">
          <img class="w-15 h-15" src="/Assets/Resources/icones/Logo.svg" alt="Logo">
        </a>
        <div class="hidden md:flex space-x-4 items-center">
        <div class="group relative">
            <a href="#" class="px-3 py-2 text-sm text-gray-600 hover:text-orange-500">WOMEN</a>
            <div class="absolute left-0  mt-1 w-40 bg-white  rounded hidden group-hover:block z-20">
              <a href="/Pages/category_list_view.html" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">New test</a>
              <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Apparel</a>
              <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Shoes</a>
              <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Beauty</a>
              <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Accessories</a>
            </div>
        </div>
        <div class="group relative">
            <a href="#" class="px-3 py-2 text-sm text-gray-600 hover:text-orange-500">MAN</a>
            <div class="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded hidden group-hover:block z-20">
              <a href="/Pages/category_list_view.html" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">New</a>
              <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">T-Shirts</a>
              <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Jeans</a>
            </div>
        </div>
        <div class="group relative">
            <a href="#" class="px-3 py-2 text-sm text-gray-600 hover:text-orange-500">KIDS</a>
            <div class="absolute left-0 mt-1 w-40 bg-white shadow-lg rounded hidden group-hover:block z-20">
              <a href="/Pages/category_list_view.html" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">New Arrivals</a>
              <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Toys</a>
            </div>
        </div>
        <a class="px-3 py-2 text-sm text-gray-600 hover:text-orange-500" href="/Pages/blog_grid.html">BLOG</a>
      </div>
        <div class="flex items-center gap-5">
          <a href="#" class="btn_open_search group cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-5 stroke-black hover:stroke-(--orange)" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" />
            <path d="M22 21.9999L18.7823 18.7822" />
            </svg>

          </a>  
          <a  class="btn_open_panier group  cursor-pointer relative">
             <div class="flex items-center absolute bg-(--orange) px-2 text-[12px] rounded-sm text-white top-[-13px] right-[-20px]">
              <span class="compteur_panier" >0</span>
             </div>
            <svg width="24" height="24" viewBox="0 0 24 24" class="w-5 stroke-black hover:stroke-(--orange)" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.6592 6.7207L21.4756 23.2803H3.49512L4.31152 6.7207H20.6592Z"/>
              <path d="M8.1604 10.1491L8.1604 5.55139C8.1604 4.40438 8.61605 3.30434 9.42711 2.49328C10.2382 1.68221 11.3382 1.22656 12.4852 1.22656C13.6322 1.22656 14.7323 1.68221 15.5433 2.49328C16.3544 3.30434 16.8101 4.40438 16.8101 5.55139V10.1491"/>
            </svg>

          </a>
          <a href="/pages/connexion.html"  id="compte" class="btn_open_compte cursor-pointer group ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="group-hover:text-(--orange)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </a>
        </div>

            <!-- panier -->

          <div class="box_panier h-[92vh]  shadow-lg bg-white borber border-t-2 border-(--orange)">

                <img class="close_panier m-2 w-7 float-right cursor-pointer p-1 hover:block hover:p-1 hover:bg-blue-500 hover:invert " src="/Assets/Resources/icones/x.svg" alt="">
                
                <h1 class="text-md py-5 mx-4">PANIER</h1>

              <div class="box_panier_in h-[60vh]  overflow-y-scroll px-4 mb-5 ">
                  
                
        
              </div>

                <div class="box_panier_in_bottom h-[30vh] ">

                
                <div class="mt-4 mx-4 pt-3 mb-3  borber border-t-1 border-neutral-200">

                    <div class="flex items-center justify-between">
                      <h1 class="text-md">SOUS TOTAL</h1>
                      <p class="sous_total text-md text-(--orange)">245$</p>
                    </div>
                    <p class="text-[12px] text-neutral-500 mt-5">Les frais de livraison, les taxes et les codes de réduction sont calculés au moment de la facturation.</p>
                  
                </div>

                  <div class=" h-full w-full bg-black flex  hover:bg-(--orange) duration-200  ">
                    <button class="flex cursor-pointer w-full h-10 items-center justify-center gap-3">
                      <img class="" src="/Assets/Resources/icones/shopping_bag_white.svg"  alt="" srcset="">
                      <p class="valider_panier text-white ">ACHETER</p>
                    </button>

                  </div>
             </div>

                

              </div>
    
            </div>
    `
    };

export const rideau = () => {
  return ` 

     <div class="flex items-center justify-between p-4 border-b">
        <span class="text-lg font-medium">Menu</span>
        <button class="closeMenu">✕</button>
      </div>


      <div class="flex justify-around text-sm font-medium uppercase mt-4 ">
        <button data-tab="Homme" id="tab-Homme" class="tab-btn py-2 border-b-2 border-orange-500 text-orange-500">Homme</button>
        <button data-tab="Femme" id="tab-Femme" class="tab-btn py-2 text-gray-500">Femme</button>
        <button data-tab="Enfant"  id="tab-Enfant" class="tab-btn py-2 text-gray-500">Enfant</button>
      </div>

    
      <div class="p-4">
        
        <div id="content-Homme" class="tab-content space-y-2">
          <div class="menu-item">New</div>
          <div class="menu-item">Apparel</div>
          <div class="menu-item">Bag</div>
          <div class="menu-item">Shoes</div>
          <div class="menu-item">Beauty</div>
          <div class="menu-item">Accessories</div>
        </div>


        <div id="content-Femme" class="tab-content hidden space-y-2">
          <div class="menu-item">New</div>
          <div class="menu-item">T-Shirts</div>
          <div class="menu-item">Sneakers</div>
          <div class="menu-item">Jeans</div>
          <div class="menu-item">Watches</div>
        </div>

      
        <div id="content-Enfant" class="tab-content hidden space-y-2">
          <div class="menu-item">New Arrivals</div>
          <div class="menu-item">Toys</div>
          <div class="menu-item">Clothes</div>
          <div class="menu-item">Shoes</div>
        </div>

        <div class="mt-6 space-y-2 text-gray-700 text-sm">
          <div class="flex items-center gap-2">
             <img class="w-10 h-5"  src="/Assets/Resources/icones/Call.svg" alt="">
             <span>(+221) 78 581 57 82</span>
          </div>
          <div class="flex items-center gap-2">
             <img class="w-10 h-5" src="/Assets/Resources/icones/Location.svg" alt="" srcset="">
             <span>Cite Senghor</span>
            </div>
        </div>

         <img class="mx-auto opacity-50 my-5"  src="/Assets/Resources/icones/Devider.svg" alt="" srcset="">

        <div class="flex justify-center mt-6 space-x-6 text-xl text-gray-600">
          <a href="#">
            <img src="/Assets/Resources/icones/Twitter.svg" alt="" srcset="">
          </a>
          <a href="#">
              <img src="/Assets/Resources/icones/instagram_plein.svg" alt="" srcset="">
          </a>
          <a href="#">
            <img src="/Assets/Resources/icones/YouTube.svg" alt="" srcset="">
          </a>
        </div>
      </div>
  
  
  `
}



// footer

export const my_footer = () => {
    return `
    
       <div class="   px-10 px-[7%] flex gap-10 flex-col md:flex md:flex-row  items-center justify-between py-[10vh]">
           <div class="flex justify-center items_center gap-10">
            <img src="/Assets/Resources/icones/Twitter.svg" alt="" srcset="">
            <img src="/Assets/Resources/icones/instagram_plein.svg" alt="" srcset="">
            <img src="/Assets/Resources/icones/youtube.svg" alt="" srcset="">
            
        </div>
        <div class="text-center">
            <p>support@openui.design +60 825 87608:00 - 22:00 - Everyday  test</p>
        </div>
        <div class=" flex item-center justify-center gap-5">
            <a href=""  class="hover:text-(--orange)  duration-200 ">About</a>
            <a href="" class="hover:text-(--orange) duration-200 ">Contact</a>
            <a href="" class="hover:text-(--orange) duration-200 ">Blog</a>
        </div>
       </div>

       <div class="p-5 bg-neutral-200">
         <p class="max-sm:text-md text-center">Copyright© OpenUI All Rights Reserved.</p>
       </div>


                `

                }



  // produit detail


export const mon_detail_produit = (produit) => {


return `


        <div class="product_detail_top h-[70vh] flex flex-col lg:flex-row gap-5 items-center justify-between">

            <div class="detail_top_left w-full lg:w-1/3 h-full  relative overflow-hidden">

                <div id="slider" class="h-full w-full relative">
                    <!-- Slide 1 -->
                    <div class="slide  absolute max-md:flex max-md:items-center max-md:justify-center inset-0 transition-opacity duration-700 opacity-100 bg-cover bg-no-repeat md:pl-[5%] md:pt-[15%] bg-[url(${produit.image})]  " >
                        <div class="max-sm:text-white">
                          
                          
                          
                        </div>
                    </div>
                    <!-- Slide 2 -->
                    <div class="slide absolute max-md:flex max-md:items-center max-md:justify-center inset-0 transition-opacity duration-700 opacity-100 bg-cover bg-no-repeat md:pl-[5%] md:pt-[15%] bg-[url(${produit.image})]  " >
                        <div class="max-sm:text-white">
                          
                          
                        </div>
                    </div>
                    <!-- Slide 3 -->
                    <div class="slide absolute max-md:flex max-md:items-center max-md:justify-center inset-0 transition-opacity duration-700 opacity-100 bg-cover bg-no-repeat md:pl-[5%] md:pt-[15%] bg-[url(${produit.image})]  " >
                        <div class="max-sm:text-white">
                          
                          
                        </div>
                    </div>
    
              </div>
               <!-- Bouton pour ouvrir la modale -->
              <button id="openImageModal" class="absolute bottom-4 right-4 bg-white/80 hover:bg-orange-500 text-black hover:text-white rounded-full p-2 shadow transition z-20">
                  <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
              </button>

                <!-- indicateur pagination -->

                    <div id="indicators_hero" class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                        <span class="indicator_hero w-3 h-3 rounded-full bg-white/70 border border-white cursor-pointer"></span>
                        <span class="indicator_hero w-3 h-3 rounded-full bg-white/30 border border-white cursor-pointer"></span>
                        <span class="indicator_hero w-3 h-3 rounded-full bg-white/30 border border-white cursor-pointer"></span>
                    </div>


            </div>
            <div class="detail_top_right w-full lg:w-2/3 h-full relative p-5 ">
                <div class="">
                    <div class="flex items-center justify-between mb-5">
                          <h1 class="text-2xl">${produit.titre}</h1>
                    <span class="group hover:text-(--orange) cursor-pointer">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-icon lucide-share"><path d="M12 2v13"/><path d="m16 6-4-4-4 4"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/></svg>
                    </span>
                    </div>
                    <p class="mb-5">${produit.description}</p>
                    <p class="mb-5 text-2xl text-(--orange)">${produit.prix} cfa</p>
                    <div class="flex flex-col  sm:flex-row gap-5 sm:gap-10 mb-5">

                        <div class="color_detail flex items-center gap-5">
                            <span>Color</span>

                           <div class="detail_color flex items-center ">
 
                               
                           </div>
                           
                        </div>
                        <div class="color_size_detail  flex items-center gap-5">

                            <span>Size</span>

                             <div class="detail_taille flex items-center gap-2">
                               
                            
                              
                             </div>

                         
                           
                        </div>
                    </div>
                </div>

                <div class="bouton_ajouter_panier bloc_btn_panier bg-black w-full h-15 p-3 lg:absolute max-lg:mt-[50px] lg:bottom-0  flex items-center justify-center group hover:bg-(--orange) cursor-pointer duration-200">

                    <div class=" text-white flex gap-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>                 
                        <h3>AJOUTER AU PANIER</h3>

                    </div>

                </div>


            </div>

        </div>

        <div class="product_detail_bottom py-[60px]">
           <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">

              <div class="">

                <h1 class="text-xl mb-3">MATERIALS</h1>
                <P class="text-neutral-600 text-sm">Nous travaillons avec des programmes de contrôle afin de garantir le respect des normes de sécurité, de santé et de qualité pour nos produits. </P>

              </div>

              <div class="">

                <h1 class="text-xl mb-3">CARE</h1>
                <p class="text-neutral-600   text-sm">Pour garder vos vestes et manteaux propres, il suffit de les aérer et de les brosser avec un chiffon ou une brosse à vêtements. Si vous devez faire nettoyer un vêtement à sec, choisissez un pressing qui utilise des technologies respectueuses de l’environnement.</p>

              </div>

              <div class="">
                <div class="flex items-center gap-3 mb-3">
                    <img src="/Assets/Resources/icones/product_detail_icone1.svg" alt="" srcset="">
                    <p class="text-sm text-neutral-600">Ne pas utiliser d’eau de Javel</p>
                </div>
                <div class="flex items-center gap-3 mb-3">
                    <img src="/Assets/Resources/icones/product_detail_icone2.svg" alt="" srcset="">
                    <p class="text-sm text-neutral-600">Ne pas sécher en machine</p>
                </div>
                <div class="flex items-center gap-3 mb-3">
                    <img src="/Assets/Resources/icones/product_detail_icone3.svg" alt="" srcset="">
                    <p class="text-sm text-neutral-600">Nettoyage à sec au tétrachloroéthylène</p>
                </div>
                <div class="flex items-center gap-3 mb-3">
                    <img src="/Assets/Resources/icones/product_detail_icone4.svg" alt="" srcset="">
                    <p class="text-sm text-neutral-600">Repasser à une température maximale de 110°C / 230°F</p>
                </div>
              </div>

           </div>
           <div class="mt-10">
              <details class="border-b-1 border-neutral-200 mb-3">
              <summary class="text-xl mb-3 cursor-pointer flex items-center gap-3">
                <img class="opacity-50" src="/Assets/Resources/icones/product_detail_icone5.svg" alt="" srcset="">
                <h3 class="text-sm">Free Flat Rate Shipping</h3>
              </summary>
                
                <p class="text-neutral-600 text-sm my-5 ml-5">This cardigan is made from a soft, recycled bouclé knit. It features a round neckline, long sleeves, and a button closure at the front. The pink color adds a touch of femininity to your outfit, making it perfect for both casual and formal occasions.</p>
                
              </details>
            </div>
           <div class="">
              <details class="border-b-1 border-neutral-200 mb-3">
              <summary class="text-xl mb-3 cursor-pointer flex items-center gap-3">
                <img  src="/Assets/Resources/icones/product_detail_icone6.svg" alt="" srcset="">
                <h3 class="text-sm">COD Policy</h3>
              </summary>
                
                <p class="text-neutral-600 text-sm my-5 ml-5">This cardigan is made from a soft, recycled bouclé knit. It features a round neckline, long sleeves, and a button closure at the front. The pink color adds a touch of femininity to your outfit, making it perfect for both casual and formal occasions.</p>
                
              </details>
            </div>
           <div class="">
              <details class="border-b-1 border-neutral-200 mb-3">
              <summary class="text-xl mb-3 cursor-pointer flex items-center gap-3">
                <img src="/Assets/Resources/icones/product_detail_icone7.svg" alt="" srcset="">
                <h3 class="text-sm">Return Policy</h3>
              </summary>
                
                <p class="text-neutral-600 text-sm my-5 ml-5">This cardigan is made from a soft, recycled bouclé knit. It features a round neckline, long sleeves, and a button closure at the front. The pink color adds a touch of femininity to your outfit, making it perfect for both casual and formal occasions.</p>
                
              </details>
           </div>



        </div>




`


};



