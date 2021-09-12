import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter4() {
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


          <p><Link to="/part1/chapter3" className="roundedcorner">Back to Chapter 3</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter5" className="roundedcorner">Go To Chapter 5</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              "Hey, we don't want to be late. Pack your things."<br/><br/>
Today was Monday. I don't understand what people like about it. You go there, sit around staring at a clock, eat food, do the same for a few more hours and then get driven back home.<br/><br/>
    "Do I have to? I learn nothing there"<br/>
    "What do you mean?"<br/><br/>
    "I can't do the activities that the others do because that is a waste of time, so I just get worksheet after worksheet to stimulate my mind."
    "It's better than sitting around at home reading all time. It's good to get an outing. And, you're still a child, so you kind of have to", he says very jokingly. <br/><br/>
    In all honesty, school isn’t the worst. I’ve been invited to take one mainstream course per day. It’s the highlight of my day, even though everyone looks at me differently. My dad mentioned for me to not raise my hand all the time because apparently people don’t like a know it all.<br/><br/>
    "Let's go!"
As my dad heads to the car, I do the daily check of my bag. I like to make sure that I don't forget anything. On the long drive there, I look down at the ground quietly, awaiting our arrival. My dad usually tries to talk with me on the ride, but it never pans out. Either he gets bored of talking to himself, or something else happens, and we mutually agree to keep it quiet.<br/><br/> After a few minutes, we arrive at the school. Oh, the joys of high school. I grab my bag and head to the entrance where I confront Ms. Griffin. I try walking past her, but she blocks me with her arm and looks me in the eye. 
   "Excuse me. What do we say?"
In a tired, anxious and irritated voice, I quickly reply.
   "Good morning Ms. Griffin."
   "That's better. Now head on over to class."
   "Yes, Ms. Griffin."
I head on over to room 204 and stand outside the class in an orderly fashion. <br/><br/>
   In front of me is Samuel, my best friend in the class. He has something called schizophrenia, which is a severe mental disorder. Now, schizophrenia can result in a wide variety of things, including but not limited to: hallucinations, altered thoughts, fantasies and lots of difficulties when concentrating. The thing with schizophrenia is that it's not continuous. This has to do more with having episodes than having a life-long syndrome. Samuel is extremely nice, though, well, to me at least. <br/><br/>
   Right behind me is Sarah. Sarah also has autism, so I guess we can relate. But she is not as complex as me. She has Level 2 autism, where she requires lots of support. She can't really make a conversation or move by herself. However, she is an amazing friend. Always smiling!<br/><br/>
   At the very front of the line, there is Micheal. Now, Micheal is also autistic, as are the majority of the students in the class. However, it is tough to operate alone with him, be it speaking, moving or using basic motor skills. But here's the thing. He's got a brilliant mind – just the wrong body. He's like a blue whale trapped in the body of a goldfish, unable to portray his true potential. No one else sees it, but I do.<br/><br/>
    "Alright, class. Let's get started. I'll begin with attendance."
Names pass by and I sit there, waiting for last period where I can go to our mainstream class.<br/><br/>
   "Oh, and Ryan?"<br/>
   "Yes, Ms. Griffin?"<br/>
   "I forgot to tell you. Ms. Stark arranged a meeting with your father and yourself this morning."<br/><br/>
Ms. Stark is our principal. She is very nice, but a bit intimidating. It's a bit confusing, but she likes me. I think?
    I go through my entire morning again, remembering each detail step by step. <br/><br/>"My father didn't say anything about that."<br/>
    "He must have forgotten. Let me know when you're ready."<br/><br/>
As we head through the hallways, I look around at the other students giving me an awkward look - not a mean or confused look, just different. Eventually, we approach the office, where the secretary greeted me. <br/><br/>
    "Good morning," I say in a subtle and dry tone.<br/>
    "Good morning Ryan."<br/>
    "What is this meeting about?"<br/>
    "I'm not sure myself, actually! Your father is on his way. Just take a seat, and she'll see you soon."<br/>
    "Okay."<br/><br/>
I take a look around and find the cleanest seat. After quickly sitting down, I notice my father entering the main doors. I'm still quite confused about why this meeting was scheduled.<br/><br/>
    "Hi, Ryan!"<br/>
    "Hello."<br/>
    "How are you doing?"<br/>
    "What's this meeting about?"<br/>
    "Personally, I'm not sure myself. Let's wait and see."<br/><br/>
I'm still confused. Why would she call a meeting without telling my dad what it's about? 

I sure hope it's good news.

<br/>
             <br/>
             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2}></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter3" className="roundedcorner">Back to Chapter 3</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter5" className="roundedcorner">Go To Chapter 5</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}
