import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "./components.css";
import { Link } from 'react-router-dom';

export default function Chapter2() {
  return (
    <div className="App">

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead">Bobby Williams</h2>
          </Col>
          <Row>
          <Col sm={2} className="nomobile"></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter1" className="roundedcorner">Back to Chapter 1</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter3" className="roundedcorner">Go To Chapter 3</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <p className="p-manifesto">
              It's hard being a kid. Wait, let me rephrase that. It's hard being a kid alone. Now, of course, I'm not alone. It's hard to explain. We live about 15 blocks north from the parliament, in a tiny and old apartment. It's got two small bedrooms, a couch, a kitchen and a washroom. Not much, right? I mean, I guess it's alright given that Ottawa is safe and tourist-friendly. But it just becomes more challenging and more complex every day. Since my mom's incident, it has been only the three of us - except it isn't.
              <br/><br/> My dad works a lot. Seven days a week for like a billion hours a day. He works at the local coffee shop near us called "That Coffee Shop." I have to say, I hate the name. Like, who was in charge at the time? He always tells us that he tried changing the name, but I don't think he has that kind of power. Right now, he is the supervisor, so he works hands-on in making delicious food. It’s not the best job in the world, but he gets discounts on food for his meals, and well, he loves it. Sometimes I go there after school to say hello, and before he even sees me, I see him doing tricks and having fun with the customers. Even if it doesn't make the most money, I'm glad he's happy. 
              <br/><br/>The honest truth however, is that I miss him a lot. When he comes home, he makes sure to be as loving as possible - but at this point, I feel pretty bad. He has to work so hard throughout the day and then entertain and take care of us for the rest of the night. It's even worse now, given that we have a new dog. I guess this is my time to prove that I am responsible enough. 
   <br/><br/>My brother, on the other hand, is a bit difficult. He has something called autism. My dad briefly told me about it, so I don't know much… I'm not sure why. Is it because he doesn't want me to worry or doesn't want it to be a big thing? What I do know is that there is a spectrum. What this means is that there are different levels of autism, ranging from lowly-functioning to highly-functioning attributes. It's not always referred to as Autism because the formal name is called ASD Syndrome. My brother has Asperger's, which means he is pretty high functioning, but still on the spectrum. I'm still confused on why there are so many names for things, but there's no point in complaining and asking why. 
   <br/><br/>What this means though, is that he can make complete sentences, do things on his own, and he is very specialized in a wide variety of topics. He always tells me how much he likes math and chemistry. Something about seeing the numbers differently.. Don’t get me wrong, I love him, and I want him to be happy always, but I guess it would be nice to have someone to talk to.
   <br/><br/> Back to my original point, I hate being alone. It's like I feed off of socialization. That's why I love school. I get to see my friends, eat snacks and just get an outing. Right now, I am in Grade 5, and I'm going to be going into Grade 6 in the fall. Now that I’m finally going to middle school, I hope that it lives up to the expectations. I'm not expecting too much, like how the movies show middle school, but it should be better than elementary. 
   <br/><br/> In the meantime, I might as well play with my puppy. He will be the one that ends this isolation. I'm so happy that I have naming rights. Of course, I am the obvious choice because I am the one that's going to spend every day with him and take care of him. He'll be like my second brother, and we can share our childhood memories. I've been watching many dog videos now, so I think I have the hang of it. We can only hope that it will work out. 

   <br/><br/>I'm excited to see how things are going to go with my new best friend, Dumpling. 


<br/>
             <br/>
             
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
          <Col sm={2}></Col>
          <Col sm={3}>


          <p><Link to="/part1/chapter1" className="roundedcorner">Back to Chapter 1</Link></p>
          </Col>
          <Col sm={3}></Col>
          <Col sm={3}>

          <p><Link to="/part1/chapter3" className="roundedcorner">Go To Chapter 3</Link></p>
          </Col>
          <Col sm={2}></Col>
          </Row>
          <br/><br/>
          
        </header>
      </Container>
    </div>
  );
}
