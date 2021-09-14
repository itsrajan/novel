import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter12() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Ryan Williams</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter11" className="roundedcorner">Back to Chapter 11</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter13" className="roundedcorner">Go To Chapter 13</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              I'm in the car, on the way home with both my dad and Dumpling. Dad seems extra excited today, probably because it is my first day. I just really hope he doesn't ask too many questions. I'm just sitting here, wondering why I didn't say anything about what that kid said. Why didn't I tell Ms. Stark? <br/><br/>
    "So Ryan, how was school today."<br/>
    "Good"<br/>
    "Seriously? That is the same response that every child gives every parent. But actually, what did you do?"<br/>
    "Classes"<br/>
    "Did you like your teachers?"<br/>
    "They were nice."<br/>
    "Well, that's always good."<br/><br/>
Dad seems to be a bit annoyed. Though he wants me to talk about something I don't want to talk about. It's confusing.<br/>
    "It was loud."<br/>
    "Well, that's not good."<br/>
    "At lunch, it was very loud. It hurt my head. So I read my book."<br/>
    "Did it work?"<br/>
    "Kind of"<br/><br/>
Should I tell him? He's already against the idea of me going. The 
the only thing telling him would do, is jeopardize my chances of continuing even further. <br/>
    "I went to Ms. Stark after school."<br/>
He looked a bit intrigued as soon as I said that.<br/>
    "What for?"<br/>
    "I told her my problem, and she said that I could go to the library at lunchtime."<br/>
    "Don't you want to make friends with other people?"<br/>
    "She said the library is quiet."<br/>
    "That's one thing she is right about."<br/>
    "She said to try school out for one more week, just to see how it is. Then, I can make my decision."<br/>
    "I guess that is reasonable. But Ryan, listen to me here."<br/><br/>
He turns his head around and looks at me eye to eye. Of course, the biggest problem with looking at someone eye to eye that is behind you, is that you can't see what's happening directly in front. <br/>
    "Dad!"<br/><br/>
Immediately, he hits the brakes a few metres behind another car, waiting at a red light. An endless series of honks and remarks towards our car flood the intersection, which was without a doubt worse than screeching chairs. <br/><br/>
    "Ryan, are you ok!?"<br/>
He sounds panicked and worried. I don't feel up to talking right now, so I give him a quick nod. <br/>
    "Ryan, I need you to talk to me!"<br/>
    "I'm fine."<br/>
    "Oh, thank God."<br/>
    "Why would you not pay attention." <br/>
    "I'm sorry, Ryan! The incident was a while back, and I  
thought it would be ok. I didn't know that this would happen. Thank you for saying something. Is Dumpling ok?"<br/><br/>
    I don't understand this. He knows what happened, and yet he puts my life in danger. To express my anger, I give him a nod and signal him to take us home. Dumpling is fine. He was a bit shocked in the beginning; however, his tail is wagging now that I've got him in my arms. I want to go home.<br/><br/>
    Just as we arrive at the house, I quickly ask my dad, "What were you trying to tell me?"<br/>
    "Oh nothing, it wasn't important."<br/>
    "Please tell me?"<br/>
    "Fine, I was just saying if Ms. Stark asks you to speak to some people at the press, you don't have to say anything. It will be uncomfortable and unfair."<br/>
    That was what he was trying to say that would risk my life? I guess he's looking out for me, but still! I give him a stubborn nod and head on inside, only to immediately head to my room. Bobby sees me storm into my room and quickly follows. Seconds later, I hear a few knocks on my door.<br/><br/>
    "Go away."<br/>
    "It's me. Bobby. Can I come in?"<br/>
    "Fine"<br/><br/>
He walks in and just sits on my bed next to me.<br/>
    "What happened?"<br/>
    "A lot."<br/>
    "Where? At school or in the car?"<br/>
    "Both"<br/>
    "Ok, start with the car, and then tell me what happened at school."<br/>
    "Dad almost got into an accident."<br/>
    "Wait! What! Actually?"<br/>
    "He turned around to look at me and didn't see a red light."<br/>
    "Are you and Dumpling ok?"<br/>
    "Yes"<br/><br/>
    "Well, as long as you're ok. And what happened at school?"<br/>
    "That depends. Are you going to tell anyone?"<br/>
    "I guess not?"<br/>
    "Are you sure?"<br/>
    "Yeah, fine."<br/><br/>
    These next words I say, bluntly.<br/>
    "Someone called me a freak"<br/>
    "What? I'm so sorry."<br/><br/>
I knew this was going to be his reaction. I'm glad that he is empathetic, but I don't want to make it a scene.<br/>
    "Why are you sorry?"<br/>
    "That you had to experience that."<br/>
    "Just don't tell anyone. I want to keep on going to school. It will be nice. The only reason I told you is because I can trust you, and, well, I wanted to tell someone."<br/>
    "I understand."<br/>
Here's the thing. I don't understand. <br/><br/>

This was a hectic first day, and I'm not sure what to do anymore—one more week.
             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter11" className="roundedcorner">Back to Chapter 11</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter13" className="roundedcorner">Go To Chapter 13</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}
