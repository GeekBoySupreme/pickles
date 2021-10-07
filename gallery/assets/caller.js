const { createClient } = supabase
supabase = createClient("https://jxywbtgddxjqlcwoioah.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMzQ1NTIzMCwiZXhwIjoxOTQ5MDMxMjMwfQ.or_Vm-5JnsYH0BFHoRqND6ykaUwpSfo1VREUAB6S5YY");


async function createData() {
    const { data, error} = await supabase
    .from('pickle-gallery')
    .insert([
        {
            name: 'Pickle Rick',
            social_handle: '@picklerick',
            remix: 0,
            featured: 1
        }
    ])
}


async function getData() {
    const { data, error} = await supabase
    .from('pickle-gallery')
    .select()
    .then(data => {
        //renderImages(data);
        console.log(data);
    })
}

function renderImages(data) {
    console.log(data.body[0].image_data);

    var image = document.createElement('img');
    image.src = data.body[0].image_data;
    document.body.appendChild(image);
}