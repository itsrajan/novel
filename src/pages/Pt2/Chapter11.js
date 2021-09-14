import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter11() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Connie Stark</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter10" className="roundedcorner">Back to Chapter 10</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter12" className="roundedcorner">Go To Chapter 12</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              The first day is always a struggle… especially for me. The endless introductions, conflict, course mistakes, and the list goes on. Even after school, there are endless meetings and lengthy conversations with parents. To my surprise, though, some good news came through the knock on my door.<br/><br/>
    "Hi there, Ms. Stark."<br/>
    "Hello, what do you need?"<br/>
    "There is a boy named Ryan wanting to see you."<br/>
    "Oh yes! Definitely! Send him right in!"<br/><br/>
A few seconds after, I see Ryan quickly walk in.<br/>
    "Hi there, Ryan. Take a seat."<br/>
He quickly shakes his head and looks at me as if he is waiting for me to say something.<br/>
    "Is there anything I can help you with?"<br/>
Again, he just stares at me.<br/>
    "Ryan!?"<br/>
    "I don't like it here."<br/><br/>
Well, that definitely was not what I was expecting.<br/>
    "Why not?"<br/>
    "It's loud."<br/>
    "Where is it loud?"<br/>
    "Everywhere"<br/>
    "Well, that's not good. Is there anything I can do for you?"<br/>
    "I don't know. I don't want to do this anymore."<br/>
    "Well, tell me what went well today."<br/><br/>
Again, he gave me a blank stare.<br/>
    "Anything?"<br/>
    "I like my teachers."<br/>
    "That's amazing!"<br/>
    "I was reading at lunch today. That was nice."<br/>
    "Ooh, that sounds really nice."<br/>
It came off a bit sarcastically, but I don't think he noticed.<br/>
    "The cafeteria is loud. Why do I have to eat there?"<br/>
    "Oh! You don't have to! You can eat pretty much wherever you want?"<br/>
    "That's what Mr. Garcia said. But I don't know where else to go. I don't like exploring"<br/>
    "How about this. Do you want a different place to spend your lunch?"<br/><br/>
He gives me a quick nod.<br/>
    "Library?"<br/>
    "I guess"<br/>
    "How about this? I have a proposition for you. I want you to try this out for one week, and then we can go from there? Does that work for you?"<br/><br/>
He gives me a subtle nod, signifying approval and a long day.<br/>
    "Amazing. I'll see you on Monday, where we can talk more"<br/>
    He leaves the office and heads down to the pickup area. He's a good kid, and I really hope this does work out for him. <br/><br/>

Plus, I don't want his father getting between me and the news.
             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part2/chapter10" className="roundedcorner">Back to Chapter 10</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part2/chapter12" className="roundedcorner">Go To Chapter 12</Link></p>
          </Col>
          <Col sm={2} className="nomobile"></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}
