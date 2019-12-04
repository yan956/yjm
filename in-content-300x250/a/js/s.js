// onFenixReady(function() {
// 	var video = document.getElementById("video");
//     var banner = document.getElementsByClassName("outer")[0];
//     banner.onclick = function(){
//     	sendEvent("click_to_site");
//     }   
// });
(function(window,document){
    var video = document.getElementsByTagName('video')[0];
    var videoControls=document.getElementById('icons_list');
    var play=document.getElementById('playBtn');
    var mute=document.getElementById('muteBtn');
    var videoPlayer={
        init : function(){
            var that=this;
            //通过创建一个js的类名引用documentElement或html元素
            document.documentElement.className='js';
            //移除video自带的controls视频控件
            video.removeAttribute('controls');
            //添加第一个html5事件，当浏览器加载完成当前帧的数据且还没有足够的数据播放视频的下一帧时触发
            //initializeControls：自定义控件
            video.addEventListener('loadeddata',this.initializeControls, false);
            this.handleButtonPresses();
        },
        initializeControls : function(){            
            videoPlayer.showHideControls();
        },
        showHideControls : function(){
            //显示或隐藏控件元素
            video.addEventListener('mouseover',function(){
                videoControls.style.opacity=1;
            },false);
                videoControls.addEventListener('mouseover',function(){
                    videoControls.style.opacity=1;
                },false);
            video.addEventListener('mouseout',function(){
                videoControls.style.opacity=0;
            },false);
                videoControls.addEventListener('mouseout',function(){
                    videoControls.style.opacity=0;
                },false);
        },
        handleButtonPresses : function(){
            video.addEventListener('click',this.playPause, false);
            play.addEventListener('click',this.playPause, false);
            video.addEventListener('click',this.muteUnmute,false);
            mute.addEventListener('click',this.muteUnmute,false);
            video.addEventListener('play',function(){
                play.title='Pause';
                play.style.backgroundImage="url(a/images/DefaultIcons/black/pause.png)";
                play.addEventListener('mouseover',function(){
                    play.style.backgroundImage="url(a/images/DefaultIcons/white/pause.png)";
                    play.style.border="2px solid #fff";
                },false);
                play.addEventListener('mouseout',function(){
                    play.style.backgroundImage="url(a/images/DefaultIcons/black/pause.png)";
                    play.style.border="2px solid #000";
                },false);
            },false);
            video.addEventListener('pause',function(){
                play.title='Play';
                play.style.backgroundImage="url(a/images/DefaultIcons/black/play.png)";
                play.addEventListener('mouseover',function(){
                    play.style.backgroundImage="url(a/images/DefaultIcons/white/play.png)";
                    play.style.border="2px solid #fff";
                },false);
                play.addEventListener('mouseout',function(){
                    play.style.backgroundImage="url(a/images/DefaultIcons/black/play.png)";
                    play.style.border="2px solid #000";
                },false);
            },false);
            video.addEventListener('ended',function(){
                this.currentTime=0;
                this.pause();
                play.title='Play';
                play.style.backgroundImage="url(a/images/DefaultIcons/black/play.png)";
                play.addEventListener('mouseover',function(){
                    play.style.backgroundImage="url(a/images/DefaultIcons/white/play.png)";
                    play.style.border="2px solid #fff";
                },false);
                play.addEventListener('mouseout',function(){
                    play.style.backgroundImage="url(a/images/DefaultIcons/black/play.png)";
                    play.style.border="2px solid #000";
                },false);
            },false);
            if (video.muted) {
                mute.title='Mute';
                mute.style.backgroundImage="url(a/images/DefaultIcons/black/sound-OFF.png)";
                mute.addEventListener('mouseover',function(){
                    mute.style.backgroundImage="url(a/images/DefaultIcons/white/sound-OFF.png)";
                    mute.style.border="2px solid #fff";
                },false);
                mute.addEventListener('mouseout',function(){
                    mute.style.backgroundImage="url(a/images/DefaultIcons/black/sound-OFF.png)";
                    mute.style.border="2px solid #000";
                },false);                       
            }                           
        },       
        playPause : function(){
            if (video.paused||video.ended) {
                if (video.ended) {
                    video.currentTime=0;
                }
                video.play();
                play.style.border="2px solid #000";
            }
            else{
                video.pause();
                play.style.border="2px solid #000";
            }
        },
        muteUnmute : function(){
            if (video.muted) {
                mute.title='Mute';
                mute.style.backgroundImage="url(a/images/DefaultIcons/black/sound-OFF.png)";
                mute.style.border="2px solid #000";
                mute.addEventListener('mouseover',function(){
                    mute.style.backgroundImage="url(a/images/DefaultIcons/white/sound-OFF.png)";
                    mute.style.border="2px solid #fff";
                },false);
                mute.addEventListener('mouseout',function(){
                    mute.style.backgroundImage="url(a/images/DefaultIcons/black/sound-OFF.png)";
                    mute.style.border="2px solid #000";
                },false);        
                video.muted=!video.muted;                
            }
            else{
                mute.title='UnMute';  
                mute.style.backgroundImage="url(a/images/DefaultIcons/black/sound-ON.png)";
                mute.style.border="2px solid #000";
                mute.addEventListener('mouseover',function(){
                    mute.style.backgroundImage="url(a/images/DefaultIcons/white/sound-ON.png)";
                    mute.style.border="2px solid #fff";
                },false);
                mute.addEventListener('mouseout',function(){
                    mute.style.backgroundImage="url(a/images/DefaultIcons/black/sound-ON.png)";
                    mute.style.border="2px solid #000";
                },false);
               video.muted=true;               
            }
        },
    };
    videoPlayer.init();
}(this,document))