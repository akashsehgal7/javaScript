   const reels = [
  {
    username: "sara_khan",
    userProfile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Enjoying the sunset vibes 🌅",
    video: "video1.mp4",
    likeCount: 1200,
    commentCount: 340,
    shareCount: 150,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: true,
    isLiked: true   // 👈 new property
  },
  {
    username: "akash_dev",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Coding + Coffee = Perfect combo ☕💻",
    video: "video2.mp4",
    likeCount: 980,
    commentCount: 210,
    shareCount: 95,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: false,
    isLiked: false  // 👈 new property
  },
  {
    username: "travel_guru",
    userProfile: "https://images.unsplash.com/photo-1604004382519-f8dd5f1237c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Exploring the Himalayas 🏔️",
    video: "video3.mp4",
    likeCount: 2500,
    commentCount: 600,
    shareCount: 320,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: true,
    isLiked: true
  },
  {
    username: "foodie_life",
    userProfile: "https://images.unsplash.com/photo-1734835182797-828480ff9211?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Best street food in Delhi 🍜",
    video: "video4.mp4",
    likeCount: 1800,
    commentCount: 450,
    shareCount: 220,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: false,
    isLiked: false
  },
  {
    username: "fitness_freak",
    userProfile: "https://images.unsplash.com/photo-1611042553484-d61f84d22784?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Morning workout grind 💪",
    video: "video5.mp4",
    likeCount: 2100,
    commentCount: 500,
    shareCount: 300,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: true,
    isLiked: true
  },
  {
    username: "artist_world",
    userProfile: "https://images.unsplash.com/photo-1646553747733-38b001866380?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "New painting reveal 🎨",
    video: "video6.mp4",
    likeCount: 1600,
    commentCount: 380,
    shareCount: 180,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: false,
    isLiked: false
  },
  {
    username: "tech_updates",
    userProfile: "https://images.unsplash.com/photo-1735685035723-e6bf6f42face?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Latest iPhone review 📱",
    video: "video7.mp4",
    likeCount: 3000,
    commentCount: 800,
    shareCount: 500,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: true,
    isLiked: true
  },
  {
    username: "dance_star",
    userProfile: "https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?q=80&w=808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Dance challenge 🔥",
    video: "video8.mp4",
    likeCount: 2700,
    commentCount: 720,
    shareCount: 410,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: false,
    isLiked: false
  },
  {
    username: "gaming_zone",
    userProfile: "https://plus.unsplash.com/premium_photo-1706382233385-1e524fb43eef?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Epic win in PUBG 🎮",
    video: "video9.mp4",
    likeCount: 3500,
    commentCount: 950,
    shareCount: 600,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: true,
    isLiked: true
  },
  {
    username: "nature_lover",
    userProfile: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Rainforest adventure 🌳",
    video: "video1.mp4",
    likeCount: 2200,
    commentCount: 560,
    shareCount: 280,
    whatsappShare: true,
    menu: ["Save", "Report", "Share"],
    isFollowed: false,
    isLiked: false
  }
];
 
  const allReels = document.querySelector('.all-reels')
  const main = document.querySelector('main')

function addData(){
   var sum = ''

reels.forEach(function(elem,idx){
      sum = sum + ` <div class="reel">

                 <video autoplay loop muted src="${elem.video}"></video>

                 <div class="bottom">

                    <div class="user">
                         <img src="${elem.userProfile}" alt="">
                    
                    <h4>${elem.username}</h4>
                    <button id='${idx}' class='follow'>${elem.isFollowed?'Unfollow':'Follow'}</button>
                    </div>
                   <h3>${elem.caption}</h3>
                 </div>
                 <div class="right">
                    <div id="${idx}" class="like">
                        <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                        <h6>${elem.likeCount}</h6>
                    </div>
                    <div id="${idx}" class="comment">
                        <h4 class="comment-icon"> <i class="ri-chat-1-line"></i></h4>
                        <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="share">
                        <h4 class="share"><i class="ri-share-forward-line"></i></h4>
                        <h6>${elem.shareCount}</h6>
                    </div>
                    <div class="whatsapp">
                        <h4 class="whatsapp-icon"><i class="ri-whatsapp-line"></i></h4>
                    </div>
                    <div class="menu">
                        <h4 class="menu"><i class="ri-more-2-fill"></i></h4>
                    </div>
         
                 </div>
        </div>`
    
    
})

allReels.innerHTML = sum
}

addData()

allReels.addEventListener("click",function(dets){
  if(dets.target.className == 'like'){
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    }else{
    reels[dets.target.id].likeCount--
    reels[dets.target.id].isLiked = false
  }
}
if(dets.target.className == 'follow'){
  if(!reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed = true
  }else{
    reels[dets.target.id].isFollowed = false
  }
}
addData()
if(dets.target.className == 'comment'){
  if(reels[dets.target.id].commentCount){
     const wrapper = document.createElement("div")
  const input = document.createElement("input")
  input.classList.add("comment-input")
  input.type = 'text'
  input.placeholder = 'write comment here...'
  const submitBtn = document.createElement("button")
  submitBtn.classList.add("commit-submit")
  submitBtn.textContent = 'Submit'
  wrapper.appendChild(input)
  wrapper.appendChild(submitBtn)
  main.appendChild(wrapper)
 submitBtn.addEventListener("click", function() {
      if (input.value.trim() !== "") {
        reels[dets.target.id].commentCount++;
        console.log("user comment:",input.value);
        wrapper.remove();
        addData(); 
      }
      });
    }
  }
})