
import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import Popup from "reactjs-popup"
import modules from "../data/modules"
import "../style/write.css"

function Write() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [titleText, setTitleText] = useState({
    title: "",
    subtitle: ""
  })
  const [mainText, setMainText] = useState("")

  function handleChangeTitle(event) {
    const { name, value } = event.target
    setTitleText(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function publish() {
    alert("Successfully submitted an article")
    console.log("Title: " + titleText.title)
    console.log("Subtitle: " + titleText.subtitle)
    console.log("Main Text: " + mainText)
    
    // const token = localStorage.getItem('AUTHORIZATION_TOKEN_BLOG');
    // fetch("http://localhost:3000/post", {

    //   method: "POST",
    //   headers: {
    //     "token": token,
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ "title": titleText.title, "subtitle": titleText.subtitle, "postData": mainText })
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       alert("Successfully submitted an article")
    //     }
    //     return response.json()
    //   })
    //   .then((result) => {
    //     console.log(result)
    //   })
  }

  return (
    <div className="container">
      <div className="pagename">
        <h1>ARTICLE</h1>
      </div>
      <div className="write-container">
        <h4>COVER IMAGE</h4>
        <input type="file" onChange={(event) => {setBackgroundImage(URL.createObjectURL(event.target.files[0]))}} />
        {
          backgroundImage && (
            <div className="cover-image">
              <img alt="background" width="250px" src={backgroundImage} />
              <button onClick={() => { setBackgroundImage(null) }}>Remove</button>
            </div>
          )
        }
        <h4>TITLE</h4>
        <input type="text" name="title" value={titleText.title} onChange={handleChangeTitle} placeholder="Title" maxLength={500} />
        <h4>SUBTITLE</h4>
        <input type="text" name="subtitle" value={titleText.subtitle} onChange={handleChangeTitle} placeholder="Subtitle" maxLength={500} />
        <div className="button-gallery">
          <button onClick={publish}>Submit</button>
          <Popup trigger={<button>Show Preview</button>} modal contentStyle={{
            margin: 'auto',
            background: '#fff',
            width: '90%',
            height: '90%',
            padding: '5px',
            border: '1px solid #d7d7d7',
            overflow: 'auto'
          }}>
            {close => (
              <div className="popup-content">
                <h1>{titleText.title}</h1>
                <h3>{titleText.subtitle}</h3>
                {backgroundImage && (
                  <div>
                    <img alt="background" width={"250px"} src={backgroundImage} />
                  </div>
                )}
                <div className="preview-content">
                  <ReactQuill value={mainText} readOnly={true} theme="bubble" />
                </div>
                <div className="button-gallery">
                  <button onClick={publish}>Submit</button>
                  <button className="close-button" onClick={close}>Go Back</button>
                </div>
              </div>
            )}
            </Popup>
        </div>
        <h4>TEXT</h4>
        <div className="content-container">
          <ReactQuill modules={modules} value={mainText} onChange={(value) => { setMainText(value) }} placeholder="Write Article Content Here" />
        </div>
      </div>
    </div>
  )
}

export default Write