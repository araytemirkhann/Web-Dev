let tasks = document.querySelector('.tasks');
let inputText = document.querySelector('.input-field');
let addButton = document.querySelector('.add-button');
let task = document.querySelectorAll('.task');
let deleteImage = document.querySelectorAll('.delete-img');

function addTask() {
    console.log("ok")
    if (inputText.value != "") {
        let div = document.createElement("div");
        div.className = "task";
        let label = document.createElement("label");
        label.className = "task-new";
        let check = document.createElement("input");
        check.type = "checkbox";
        check.className = "task-checkbox";
        let span = document.createElement("span");
        span.innerHTML = inputText.value;
        let image = document.createElement("img");
        image.className = "delete-img";
        image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX/AAD/////zs7/6en/Njb/t7f/oKD/+/v/29v/k5P/9fX/UVH/IyP/u7v/dXX/YmL/aGj/LS3/xMT/QkL/1NT/qKj/f3//TEz/jY3/cHD/WVn/r6//Ojr/5eX/n5//s7P/Fxf/7e3/GRn/fHz/mZn/h4f/DQ3/SEj/Xl7/2Nj/KSm42aQpAAAEKklEQVR4nO3dWXOiQBQF4AYXVDQqSmJEVOKSmP//A8elkgevkAs52G3mnKepKYY632h6QYjGqyVB1kjTgx8NWq0kiU9pf2X5/afTXyfJqjWI/GknzXr1VDE1nDPwZxNTPv3RqlFDG7ywFzcr8C7Zv3bgfeDC7r6y75wQbQQLp9Vfv+90A2glrDD+ve+YMEN2ggpnEKAx4xRYCinsgoDGrDNcK6BwBQMa846bHHHCDhBozAbWCycMoUIzRfWCCQdYoFmgisGEY7DQrEDFUMIIDTQhqBlKOIQLUT+JIGGKB5odphpIiB5nTplgqoGETzUIDWbthhEGbzcKhtvj3v2Yjsz0Ev+YaDBI2t3NrS1zDOmGEd5Yz/T9cqfYyVOMIN0wwhs/hoOy51iIU4wh3TDCrXwJS59jKf+XIMtvjFAONMPS57jxTodcmMII5Xy/rVBFBHLJBiP8EOVaFao8lrDkSHqKHGruI8wOUStuL5fdbnd2yvM5r+cMz5mHczkdhsOyGfWrnOQj+enK3A/CCLyvrSHjuNhYLMRdW6ozi6yyUE5zbmZdtIItEh5sN1enaPYtEo5sF9enYNQtEDZs1y6Rgt1ygRDzIcR9UrAMlsKgd0nwQG9SY6ZftRXCwdv4EtulS6V/6fz5ohC2bJf9VZoUUuh8KKTQ/VBIofuhkEL3QyGF7kd+IieFmf/IkTdw1HGft1uh8PFD4eOHwsePRpg1nI3i0QyFMAA8JVJXFDdEUEih5VBIIYX2QyGFFNoPhRRSaD8UUkih/VBIIYX2QyFMuG9eRd5CfX1EUzzmtL4+4tMhofj9B+Jxyb64/i4eyHm6PkLxCLxLQnETvXimikIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCimkkEIKKaSQQgoppJBCCin8G0LFtw5TSCGFFFJIIYUU/idCb0IhhRRSSCGFFFJoUxhRqBO+/3nhC4UUUkghhRT+mLm7Qp9CCoHCen4X9N2E/dFVxD/ZD68PWVwfMr4+4ucR7n5CawEJh7Yd+ZFfw00hha4FJBzZduTngBG+2nbkp0OhTrix7chPihE+23bkZg8S7mxDcrNvYIQz25DcvGUYodgFOBO5J6smXNmG5GYi9mTVhKltSG6eFe01QsVHM5ai2DzphK6+Tfua8iphYJuSkyVM6Oqcr5gNtUJxYcmJbFTddUInlzWaJZte2Nvb9shsddWVQi+x7RFZKGb7MkL3NvqKrWE5Yc+xaT/RFlcLvVR86aTNdNW99UKv49Bos9PXLiH0Mme+clW1mKkg9DI3hpu14qnDikI3Jo25arFWVeilti8tjku9gBWExwHHpnESl+5bXnh8HZehFV7zKVKuY34rPCbzk7h9vyzbcTJIK/CO+QelhK+8dS4QsAAAAABJRU5ErkJggg==";
        image.addEventListener('click', remove, false);
        tasks.appendChild(div);
        div.appendChild(label);
        label.appendChild(check);
        label.appendChild(span);
        div.appendChild(image);
        inputText.value = null;
    }
}

function remove() {
    this.parentNode.remove();
}

for (var i = 0; i < task.length; i++) {
    deleteImage[i].addEventListener('click', remove, false);
}