import { useState } from 'react'
import myLogo from './assets/Logo192.png'
import './App.css'

function App() {

  return (
    <>
      <div>
          <img src={myLogo} className="logo" alt="Vite logo" />
      </div>
	<h1>
	Privacy Policy
	</h1>
      <p className="read-the-docs">
        If you as the user of Glitch do not consent to the processing of your data as follows, please do not play Glitch.
      </p>
	<p>
		Glitch requests two permissions from your android device, the first is Internet Access and the second is Network State.
		These permissions are required in order to serve Ads.
	</p>
	<p>
		In order to serve personalised ads, third parties will collect an
anonymous Ad-ID in order to serve ads unique to your experience.
In the process of serving an Ad, other information could be shared with third party servers by mere function of the process, including but not limited to:
	<ul><li> IP Address </li>
	<li> Anonymous Ad-ID </li>
	<li> Operating System Information </li>
	<li> Device Information </li>
	</ul>
	</p>
	<p>
		Glitch is in not intended for users under the age of 13. In no way does the developer of Glitch seek to collect personal data.
	</p>
    </>
  )
}

export default App
