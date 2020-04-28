function playsound(selector,event,sfxID) {
    document.querySelector(selector).addEventListener(event,function () {
        document.getElementById(sfxID).play();
    })  
}

for (let i = 0; i < 4; i++) {
    playsound("#"+VHclass[i]+"_img","click","clicksfx");
    playsound("#"+VHclass[i]+"_img","mouseover","hoversfx");
}
playsound(".start","click","clicksfx");
playsound(".start","mouseover","hoversfx");
playsound(".play","click","clicksfx");
playsound(".play","mouseover","hoversfx");



class Vault_Hunter {
    constructor(VHclass,Health,Shield,Strength,Mana) {
        this.VHclass = VHclass;
        this.Health = Health;
        this.Shield = Shield;
        this.Strength = Strength;
        this.Mana = Mana;
    }
}

let Amara = new Vault_Hunter('Siren',200,0,50,70);
let Fl4k = new Vault_Hunter('BM',200,0,0);
let Moze = new Vault_Hunter('Op',200,0,70);
let Zane = new Vault_Hunter('Gunner',200,0,70);
let VaultHunter = [Fl4k,Amara,Zane,Moze];

