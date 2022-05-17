


/*new Vue ({
    el:"#app",
    data:{
        products: [
            {id:1, title:"Rosso", short_text:"A hybrid of lemon and citron, it has a yellow skin with red hues and a strongly colored flesh.", image:"image027-8-600x450.jpg"},
            {id:2, title:"Bizzaro", short_text:"High-yielding variety, on a thick bright yellow thick peel of tear-shaped fruits there are relief longitudinal outgrowths.", image:"image029-8-600x600.jpg"},
            {id:3, title:"Borneo", short_text:"Outwardly, it does not stand out among other varieties of lemons, it is notable for its strong aromatic properties, which manifest themselves even when touching the plant.", image:"image031-6.jpg"},
            {id:4, title:"Eureka variegated", short_text:"At the beginning of ripening, the fruits have a striped color, at the end the skin becomes pink. The flesh is also pink.", image:"image033-3-600x600.jpg"},
            {id:5, title:"Arcobal", short_text:"Hybrid of meyer lemon and blood orange. At full maturity, the peel turns orange, with bright red stripes. The pulp is sweet and sour, with the taste and aroma of orange.", image:"image035-3-600x450.jpg"},
          ]
    },


mountend:function() {
    console.log(window.localStorage.getItem('prod'));

},

methods:{
    addItem:function(id){
        window.localStorage.setItem('prod',id);
    }
}


});*/

new Vue ({
    el:"#app",
    data:{
        products: [
            {id:1, title:"Rosso", short_text:"A hybrid of lemon and citron, it has a yellow skin with red hues and a strongly colored flesh.", image:"image027-8-600x450.jpg"},
            {id:2, title:"Bizzaro", short_text:"High-yielding variety, on a thick bright yellow thick peel of tear-shaped fruits there are relief longitudinal outgrowths.", image:"image029-8-600x600.jpg"},
            {id:3, title:"Borneo", short_text:"Outwardly, it does not stand out among other varieties of lemons, it is notable for its strong aromatic properties, which manifest themselves even when touching the plant.", image:"image031-6.jpg"},
            {id:4, title:"Eureka variegated", short_text:"At the beginning of ripening, the fruits have a striped color, at the end the skin becomes pink. The flesh is also pink.", image:"image033-3-600x600.jpg"},
            {id:5, title:"Arcobal", short_text:"Hybrid of meyer lemon and blood orange. At full maturity, the peel turns orange, with bright red stripes. The pulp is sweet and sour, with the taste and aroma of orange.", image:"image035-3-600x450.jpg"},
          ]
    }
});