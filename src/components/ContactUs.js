
export default function ContactUs() {
    return (
        <div id="contactUsSection">
            <div id="contactUsForm">
                <form id="formInfo">
                    <h2 id="h2Contactus">SEND US A MESSAGE</h2>
                    <input type="text" id="nameContact" name="name" placeholder="Name" />
                    <input type="email" id="emailContact" name="email" placeholder="Email" />
                    <input type="message" id="msgContact" name="message" placeholder="Message" />
                    <button id="ContactUsBtn">Contact US</button>
                </form>
            </div>
            <div id="contactUsInfo">
                <h2 id="h2Contact">YOU CAN FIND US HERE</h2>
                <h3 id="h3Contact">NewYork</h3>
                <h4 id="h4Contact" >Brooklyn</h4>
                <p id="pContact">1200 suite B, 10045</p>
            </div>
        </div>
    )
}