console.log("rip");
let JyskeBank = {
    name: "Jyske Bank",
    address: "Skattelyvej 1",
    postalCode: "2222",
    city: "Solsiden",
    email: "kontakt@jyskebank.nu",
    phoneNumber: "+45 1234 1234",
    logo: "img/logo_jb.png"
}
let winner = {
    firstname: "Anders",
    lastname: "And",
    fullname: function() {
        return this.firstname + " " + this.lastname;
    },
    address: "Paradisæblevej 111",
    postalCode: "1000",
    city: "Andeby"
}

let selectedBank = JyskeBank;

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
document.getElementsByClassName("currentDate")[0].textContent=today;

document.getElementById("logo").src=selectedBank.logo;

const generalinfo = document.getElementsByClassName("generalInfo")
for (element in generalinfo){
    (generalinfo[element].textContent = selectedBank.name + "\n" + 
                                        selectedBank.address + "\n" + 
                                        selectedBank.city + "\n" + 
                                        selectedBank.phoneNumber + "\n" + 
                                        selectedBank.email);
}

const receiverinfo = [...document.getElementsByClassName("receiverInfo")];
receiverinfo.forEach(element => {
    element.textContent =   winner.fullname() + "\n" + 
                            winner.address + "\n" + 
                            winner.city;
});

for (element in document.getElementsByClassName("receiverName"))
    (document.getElementsByClassName("receiverName")[element].textContent=winner.fullname());

for (element in document.getElementsByClassName("bank"))
    document.getElementsByClassName("bank")[element].textContent=selectedBank.nametextContent=selectedBank.name;

for (element in document.getElementsByClassName("bankAddress"))
    document.getElementsByClassName("bankAddress")[element].textContent=selectedBank.nametextContent=selectedBank.address;

for (element in document.getElementsByClassName("bankCity"))
    document.getElementsByClassName("bankCity")[element].textContent=selectedBank.nametextContent=selectedBank.city;

for (element in document.getElementsByClassName("receiverAddress"))
    document.getElementsByClassName("receiverAddress")[element].textContent=selectedBank.nametextContent=winner.address;

for (element in document.getElementsByClassName("receiverCity"))
    document.getElementsByClassName("receiverCity")[element].textContent=selectedBank.nametextContent=winner.city;

for (element in document.getElementsByClassName("bankEmail"))
    document.getElementsByClassName("bankEmail")[element].textContent=selectedBank.nametextContent=selectedBank.email;

for (element in document.getElementsByClassName("bankPhone"))
    document.getElementsByClassName("bankPhone")[element].textContent=selectedBank.nametextContent=selectedBank.phoneNumber;