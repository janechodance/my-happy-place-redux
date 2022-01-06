import {useEffect, useState} from "react"
function Email({env, user}) {
    const [feedback, setFeedback] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false)
    
    const senderEmail = user.email
    const receiverEmail = "janechodance@gmail.com"
    const eUser = "user_woWFslLlP88BbYoqvmLlH"
    const templateId = "template_pjzjkqk"
    const from_name = user.name
    const handleCancel = () => {
    setFeedback("")
    }
  
    const handleChange = event => {
        setFeedback(event.target.value)
    }
  
  const handleSubmit = event => {
    event.preventDefault()
 
  
    sendFeedback({
      templateId,
      senderEmail,
      receiverEmail,
      feedback,
      from_name,
      eUser,
      
    })
  
    setFormSubmitted(true)
  }
  
  // Note: this is using default_service, which will map to whatever
  // default email provider you've set in your EmailJS account.
  const sendFeedback = ({
    templateId,
    senderEmail,
    receiverEmail,
    feedback,
    from_name,
    eUser,
  }) => {
    window.emailjs
      .send(
        "default_service",
        templateId,
        {
          senderEmail,
          receiverEmail,
          feedback,
          from_name
        },
        eUser
      )
      .then(res => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true)
        }
      })
      // Handle errors here however you like
      .catch(err => console.error("Failed to send feedback. Error: ", err))
  }
  if (formSubmitted && formSubmitSuccessful) {
    return <h2>Thank You for your feedback and we will get back to you soon!.</h2>
  }
  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h1>Let us know what you think!</h1>
      <textarea
        className="text-input"
        id="feedback-entry"
        name="feedback-entry"
        onChange={handleChange}
        placeholder="Enter your feedback here"
        required
        value={feedback}
      />
      <div className="btn-group">
        <button className="btn btn--cancel" onClick={handleCancel}>
          Cancel
        </button>
        <input type="submit" value="Submit" className="btn btn--submit" />
      </div>
    </form>
  )
    
  }
  
  export default Email;