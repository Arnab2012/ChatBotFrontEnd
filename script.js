let chatbotVisible = false;

function toggleChatbot() {
    const box = document.querySelector('.botbox');
    box.style.display = chatbotVisible ? 'none' : 'block';
    chatbotVisible = !chatbotVisible;
    if (chatbotVisible) {
        document.getElementById('chatbotFrame').src = "https://console.dialogflow.com/api-client/demo/embedded/712f5f71-5788-4d64-bdc6-4497779cdc21";
        // document.getElementById('Button').innerHTML = "Click Again to close";
        const button = document.getElementById('Button');
        button.style.width = "353px";
        button.style.borderRadius = "0";
        button.innerHTML = "Click Again to Close";
        button.style.fontSize = "30px";

    }
    else {
        const button = document.getElementById('Button');
        button.style.height = "50px"
        button.style.width = "150px";
        button.style.borderRadius = "25px";
        button.innerHTML = "Click Me for Help";
        button.style.fontSize = "15px";
        // document.getElementById('Button').innerHTML = "Click Me for Help";
    }

}

document.getElementById('Button').addEventListener('click', toggleChatbot);