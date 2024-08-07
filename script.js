//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', () => {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

   
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'transparent');

    // Change the color of the specified grid item
    const block = document.getElementById(blockId);
    if (block) {
        block.style.backgroundColor = color;
    }
});

document.getElementById('Reset').addEventListener('click', () => {
   
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'transparent');
});
