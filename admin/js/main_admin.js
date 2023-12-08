// Modal Them
const modal = document.querySelector('.js-add-modal')
const closeModal = document.querySelector('.js-close')
const buyBtns = document.querySelectorAll('.js-them')
const addForm = document.querySelector('.js-add-form')

function showModal(){
    modal.classList.add('open')
}

function removeModal(){
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showModal)
}

closeModal.addEventListener('click', removeModal)

modal.addEventListener('click', removeModal)

addForm.addEventListener('click', function(event){
    event.stopPropagation()
})

// Modal sua
const editModal = document.querySelector('.js-edit-modal')
const closeEditmodal = document.querySelector('.js-edit-close')
const editBtns = document.querySelectorAll('.js-sua')
const editForm = document.querySelector('.js-edit-form')

function showModaledit(){
    editModal.classList.add('open-edit')
}

function removeModaledit(){
    editModal.classList.remove('open-edit')
}

for(const editBtn of editBtns){
    editBtn.addEventListener('click', showModaledit)
}

closeEditmodal.addEventListener('click', removeModaledit)

editForm.addEventListener('click', function(event){
    event.stopPropagation()
})