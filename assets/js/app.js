const cl = console.log;

const shopStore = document.getElementById("shopStore");

let result = ``;
boardDetails.forEach(ele => {
    result += `
        <div class="col-sm-4">
            <div class="img-box">
                <img src="${ele.imgPath}" alt="surfboard Image" title="surfboard" class="img-fluid">
                <div class="bg-img-container"></div>
                <div class="surfboard-info">
                    <p class="infoHeading">${ele.brandName}</p>
                    <h1 class="primaryHeading">${ele.name}</h1>
                    <h3 class="board-price text-center">${ele.price}</h3>
                    <h5 class="buy text-center">buy</h5>
                </div>
            </div>
        </div>
    `;
});

shopStore.innerHTML = result;