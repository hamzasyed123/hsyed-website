import { useState } from "react"
import "../style/contact.css"

function Contact() {
    const [content, setContent] = useState({
        firstName:"",
        middleName:"",
        lastName:"",
        pronouns:"",
        email:"",
        phoneNumber:"",
        subject:"",
        message:""
    })

    function handleChange(event){
        const { name, value } = event.target

        setContent(prevState => ({
            ...prevState,
            [name]: value
        }))

    }


    function submitMessage(event) {
        event.preventDefault()

        alert("Message sent. We will reach out to you soon.")
        console.log("First Name: " + content.firstName)
        console.log("Last Name: " + content.lastName)
        console.log("Pronouns: " + content.pronouns)
        console.log("Email: " + content.email)
        console.log("Phone Number: " + content.phoneNumber)
        console.log("Subject: " + content.subject)
        console.log("Message: " + content.message)

        // fetch("http://localhost:3000/support/contact-us", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         "firstName": content.firstName,
        //         "middleName": content.middleName,
        //         "lastName": content.lastName,
        //         "pronouns": content.pronouns,
        //         "email": content.email,
        //         "phoneNumber": content.phoneNumber,
        //         "subject": content.subject,
        //         "message": content.message
        //     })
        // })
        // .then((response) => {
        //     if (response.ok) {
        //         alert("Message sent. We will reach out to you soon.")
        //     }
        //     return response.json()
        // })
        // .then((result) => console.log(result))

    }

    return (
        <div className="container">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <h5>* - Required Field</h5>
                <form className="contact-form" onSubmit={submitMessage}>
                    <h4>First Name*</h4>
                    <input type="text" name="firstName" value={content.firstName} onChange={handleChange} placeholder="first name" required/>
                    <h4>Middle Name</h4>
                    <input type="text" name="middleName" value={content.middleName} onChange={handleChange} placeholder="middle name" />
                    <h4>Last Name*</h4>
                    <input type="text" name="lastName" value={content.lastName} onChange={handleChange} placeholder="last name" required/>
                    <h4>Pronouns</h4>
                    <select name="pronouns" onChange={handleChange}>
                        <option value="">N/A</option>
                        <option value="heHim">he/him/his</option>
                        <option value="sheHer">she/her/hers</option>
                        <option value="theyThem">they/them/theirs</option>
                        <option value="eyEm">ey/em/eirs</option>
                        <option value="veVer">ve/vis/ver</option>
                        <option value="xeXem">xe/xem/xyrs</option>
                        <option value="zeZir">ze/zir/zirs</option>
                        <option value="xieHir">xie/hir/hirs</option>
                    </select>
                    <h4>Email Address*</h4>
                    <input type="text" name="email" value={content.email} onChange={handleChange} pattern="([A-Za-z0-9._%\-]{2,})+@([A-Za-z0-9.\-]{2,})+\.[a-z]{2,}$" placeholder="email address" required/>
                    <h4>Phone Number</h4>
                    <input type="text" name="phoneNumber" value={content.phoneNumber} onChange={handleChange} pattern="[0-9]{7,15}" placeholder="phone number" />
                    <h4>Subject*</h4>
                    <input type="text" name="subject" value={content.subject} onChange={handleChange} placeholder="subject" required/>
                    <h4>Message*</h4>
                    <textarea name="message" value={content.message} onChange={handleChange} placeholder="message" required/>
                    <br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Contact