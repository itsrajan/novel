import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter3() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Paul Williams</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter2" className="roundedcorner">Back to Chapter 2</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter4" className="roundedcorner">Go To Chapter 4</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              I thought getting them a dog would be a pleasant surprise. I've been working a lot, and I am so glad that my boss noticed. A promotion is bound to be coming soon, I’m in the run for Senior VP. It’s a pretty significant jump in responsibility, but my new pay is well worth it. I just hope I won't have to work as much. Ever since the incident, I have been working more and more. I've noticed that Bobby and Ryan have been down, so I hope this will boost their spirits. 
              <br/><br/>Their mother, Diane Williams, was an artist. A beautiful one, if I must say. She went to college, got a business degree and was good at it. If you were to put her in any management position, she would undeniably thrive. Finishing second in her class, she had the dedication and the smarts to put her mind towards anything and be successful. However, she always told me how much she wished to pursue art. Every time she told me, I was perplexed, wondering why she would be leaving something she was so good at. But I am constantly reminded that it felt right and that she wanted to spend more time taking care of herself.
              <br/><br/>She was inspired by the greats: Picasso, Da Vinci, Rembrandt, Miro… She never restricted herself to a type of art. Whether it be abstract, landscapes, modernism or impressionism, she found a way to add her personal touch to it. I do recall my favourite painting of hers. It was a picture of a man and a woman walking on water, holding hands looking at the sunset. The bright colours, the deep blues, and the soothing sky made me see her true colours. 
              <br/><br/>A few days later, we watched a movie together, and I noticed she wasn't watching. She was just looking at me, with a smile on her face, and she would let me know it was the two of us in that painting. Feelings like this make everything worth it.
              <br/><br/>A couple of weeks later, I proposed to her. Right there, in front of the parliament building. My heart was racing as I hugged her tight. That day it felt like nothing could go wrong. Seven years later, I never realized how much our lives would change.
              <br/><br/>The family wanted to go on a road trip. I had become the supervisor of the store, and Diane had sold her 100th painting. We were thinking of heading down to Washington DC and staying in a nice hotel. We had prepared our trip, ranging from the Smithsonian to a walking tour through the biggest landmarks. Before going, she noticed we needed some new toothbrushes. Diane quickly said that she would head on over to the grocery store a few blocks away and quickly pick some things up. She was planning on walking, but I said driving would be easier, and it would be faster to come back. Each and every day, I think about this statement.
              <br/><br/>About an hour after, I started to get worried a bit too worried for that matter. I just closed my eyes and prayed for something good to come out of this. 
              <br/><br/>Then, the phone rang. I ran over as fast as I could, picked it up and wanted to hear her voice so badly.
              <br/><br/>"Hello! Are you interested in duct cleaning. At our company, we can assur-"
              <br/><br/>I hang up. I've received the same call so many times it's honestly out of control. Moments later, the doorbell rang and I ran over to the entrance. Expecting Diane, I welcomed her with a superfluous smile on my face. I saw a police officer wearing a bright blue uniform standing there. In a cautious voice, I whispered,
              <br/><br/>  "Hello?"
              <br/>"Good morning, sir. Is this Paul Williams? Husband of Diane Williams?"
              <br/><br/>I nod, subtly. She looked at me with a melancholic face as she slowly took off her hat. 
              <br/><br/>"May I come in?"
              <br/> "Of course…"
              <br/><br/>Immediately, I switched to an aggressive voice.
              <br/><br/> "Where… is my wife?"
              <br/>"About 45 minutes ago, she made an early right turn onto the main road and faced a severe side impact by an oncoming truck. She did not make it."
              <br/><br/>With each tear more painful than the next, my eyes became a river of pure agony. To this day, I have the same feeling. It has been ten years. Each day has hurt more than the last. 

              <br/><br/>I still remember the day—the day where my life changed forever.


<br/>
             <br/>
             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2}></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter2" className="roundedcorner">Back to Chapter 2</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter4" className="roundedcorner">Go To Chapter 4</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}
