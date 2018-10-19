import { Component, OnInit } from "@angular/core";
import * as SocialShare from "nativescript-social-share";
import * as ImageSource from "image-source";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public url ="https://play.nativescript.org/dist/assets/img/NativeScript_logo.png";
    public text ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    
    constructor() {
    }

    ngOnInit(): void {
    }

    shareText() {
        SocialShare.shareText(this.text);
    }

    shareImage(){
        ImageSource.fromUrl(this.url).then((image) => {
            SocialShare.shareImage(image);
        });
    }
}
