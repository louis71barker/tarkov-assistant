import { Component, OnInit } from '@angular/core';
declare const Twitch: any;

@Component({
  selector: 'app-twitch-stream',
  templateUrl: './twitch-stream.component.html',
  styleUrls: ['./twitch-stream.component.scss']
})
export class TwitchStreamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      width: 940,
      height: 480,
      channel: "deadlyslob",
      layout: "video",
      autoplay: true,
    };
    var player = new Twitch.Player("twitch-embed", options);
    player.setVolume(0.5);
  }

}
