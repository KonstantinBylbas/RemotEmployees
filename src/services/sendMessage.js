export default async function SendMessage(event) {
    event.preventDefault();
    let form = event.target;

    if (form.name.value.trim().length < 2) {
        form.name.style.borderColor = 'red';
        return;
    }
    else
        form.name.style.borderColor = '#6eb1fb';

    if (form.messanger.value.trim().length < 2) {
        form.messanger.style.borderColor = 'red';
        return;
    }
    else
        form.messanger.style.borderColor = '#6eb1fb';

    console.log('Send data');
}