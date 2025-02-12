 // document.getElementById('owl').onclick = function ( ) {
        //     alert('owl clicked');
        // }


        // document.getElementById('images').addEventListener('click', (e)=>{
        //     console.log("clicked inside the ul");
        // },true); //default the third parameter is false

        // document.getElementById('owl').addEventListener('click', (e)=>{
        //     console.log("owl clicked");
        //     e.stopPropagation(); //this won't let the event to bubble i.e won't let it to go on the above element
        // },true);

        //event propagation - event bubbling, event capturing
        // bubbling goes from inside to outside is called event propagation known as bubbling - 1st img then li and then ul in the above example
        //capturing is from top to bottom

        // document.getElementById('google').addEventListener('click', function (e) {
        //     e.preventDefault();
        //     console.log("google clicked")
        // })

        document.querySelector('#images').addEventListener('click',(e) => {
            if(e.target.tagName === 'IMG'){
                let removeIt = e.target.parentNode;
            // console.log(e.target.tagName);
            removeIt.remove();
            }
            
            // removeIt.parentNode.removeChild(removeIt);
        }, false);