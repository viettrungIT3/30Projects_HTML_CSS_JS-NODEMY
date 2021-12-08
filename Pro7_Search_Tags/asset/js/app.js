const ul = document.querySelector('ul');
const input = document.querySelector('input');
const removeBtn = document.querySelector('.btn-removeAll')

let tags = ['nodejs', 'reactjs'];

createTag()

function createTag() {
    ul.querySelectorAll('li').forEach((li) => li.remove())
    tags.slice()
        .reverse()
        .forEach((tag) => {
            let liTag = `
            <li>${tag}
            <i class="fa fa-times" onclick="removeTag(this, '${tag}')"></i>
            </li>
            `
            ul.insertAdjacentHTML('afterbegin', liTag);  // Chèn liTag vào vị trí đầu tiên
        })

    input.focus();   // trả con trỏ về ô input
}

function removeTag( e, tag ) {
    let index = tags.indexOf(tag);
    tags.splice(index, 1);  // cắt bỏ thằng index
    e.parentElement.remove();   // xoá thằng mẹ nó
    input.focus();
}

function addTag(e) {
    if (e.key == 'Enter') {
        let tag = e.target.value.trim();
        // console.log(tag);
        if ( tag != '' && !tags.includes(tag)) {
            tags.push(tag);
            createTag();
        }
        e.target.value = '';
    }
}

input.addEventListener('keyup', addTag);

removeBtn.addEventListener('click', () => {
    tags.length = 0;
    ul.querySelectorAll('li').forEach((li) => li.remove());
    input.focus;
});