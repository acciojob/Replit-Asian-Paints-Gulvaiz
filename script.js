document.getElementById('change_button').addEventListener('click', () => {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    if (blockId && color) {
        const block = document.getElementById(blockId);
        if (block) {
            block.style.backgroundColor = color;
        } else {
            console.log('Invalid Block ID');
        }
    } else {
        console.log('Please enter valid inputs');
    }
});

document.getElementById('Reset').addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'transparent');
});
