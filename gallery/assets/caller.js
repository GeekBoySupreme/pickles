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
        renderImages(data);
        //console.log(data);
    })
}

function renderImages(data) {
    console.log(data.body.length);

    // var image = document.createElement('img');
    // image.src = data.body[19].image_data;
    // document.body.appendChild(image);

    // var html = "<div class='col-lg-6'><img src='"+ data.body[5].src +"' class='img-fluid'/></div>

    var featured_html = '';
    var featured_grid_small = '<div class="col-lg-6"><div class="row">';
    var all_html = '';

    var featured_count = 5;

    for(var i=0; i<data.body.length; i++) {
        if(featured_count == 5) {
            featured_html += "<div class='col-lg-6'><img src='"+ data.body[5].image_data +"' class='img-fluid'/></div>";
            featured_count--;
        }
        else if(featured_count<5 && featured_count>0) {
            featured_grid_small += "<div class='col-lg-6'><img src='"+ data.body[i].image_data +"' class='img-fluid'/></div>";
            featured_count--;
        }
        else {
            all_html += "<div class='col-lg-4'><img src='"+ data.body[i].image_data +"' class='img-fluid'/></div>";
        }
    }

    document.getElementById("featured-container").innerHTML = featured_html + featured_grid_small + '</div></div>';
    document.getElementById("everything-else-container").innerHTML = all_html;

}


getData();