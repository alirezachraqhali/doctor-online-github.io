const menu = document.querySelector('.header .menu')
const form_box = document.querySelector('.header .form-box')
document.querySelector('.header .btn-menu').addEventListener('click', ()=>{
    menu.appendChild(form_box)
    menu.classList.add('mobile-show')
    form_box.querySelector('input[type="search"]').click()
})
document.querySelector('.header .menu .btn-close').addEventListener('click', ()=>{
    menu.classList.remove('mobile-show')
})

const list1ds = document.querySelectorAll('.card-box .card:has(.list.list-1d)')
if (list1ds.length != 0){
    list1ds.forEach((list)=> {
        const link = list.querySelector('.legend a')
        link.addEventListener('click' , ()=> {
            list.classList.toggle('full-screen')
            const is_full_screen = list.classList.contains('full-screen')
            link.setAttribute('title', (is_full_screen) ? 'کوجک کن' : 'بیشتر ببینید')
            const link_icon = link.querySelector('i')
            if (is_full_screen) {
                link_icon.classList.remove('fa-angle-left')
                link_icon.classList.add('fa-close')
            } else {
                link_icon.classList.remove('fa-close')
                link_icon.classList.add('fa-angle-left')
            }
        })
    })
}