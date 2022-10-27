import Plane from "../assets/2022plane.png";
import LandingGear from "../assets/landinggear.jpg";
import Oswald from "../assets/oswald.png";
import Lobstercopter from "../assets/lobstercopter.png";
import GLab from "../assets/glab1.PNG";
import Plane2 from "../assets/dbfplane3.jpg";
import LandingGearfea from "../assets/landinggearfea.png";
import Oswald2 from "../assets/oswald2.png";
import GLab2 from "../assets/glab2.JPG";
import Lobstercopter2 from "../assets/lobstercopter2.png";

export const ProjectList = [
  {
    name: "Design/Build/Fly Planes",
    image: Plane,
    skills: "As president of MIT’s Design, Build, Fly team, I’m responsible for team organization including leading meetings, and coordinating with MIT departments; planning recruiting and new member trainings; working with VP/Treasurer to create budget, manage sponsorships, and plan/inform of recruiting  events with companies; organizing competition travel. However, my biggest role is working with the Chief Engineer to lead our team’s plane design and manufacturing. I work with various subteams, especially mechanisms and propulsion, calculating optimal motor thrust and propeller dimensions, and testing different configurations of propulsion systems in wind tunnels to determine the best arrangement given mission requirements. I also work with the rest of the team to machine different aircraft parts including motor mounts, wing attachments, struts, and fuselage parts. We use carbon fiber, highload foam, plywood, and various composite layups to build our plane, and laser/foam cut and 3D print many of our parts.",
    extraImage: Plane2,
  },
  {
    name: "DBF Landing Gear",
    image: LandingGear,
    skills: "Aside from working on the propulsion system, one of my main contributions to last year’s plane was to design and build the landing gear. Given that the mission called for many take-offs and landings, the landing gear needed to be able to perform under load, and not deform over time. We first attempted to create custom landing gear by laying up unidirectional carbon fiber on a mold and adding a carbon fiber tube wrap to prevent delamination. The optimal shape was determined via FEA, shown below: However, our carbon fiber wasn’t thick enough, and our post-processing wasn’t enough to prevent delamination. Ultimately, it wasn’t strong enough under load. We tried again, this time making the landing gear out of aluminum. I created a CAD of the landing in SolidWorks and used the flat pattern DXF to waterjet the shape and cut out the lightening holes. I then used a rolling brake to create the ideal bending, and checked my bend against the shape I lasercut. I made several versions of this landing gear, trying out different bends, and trying to ensure there were no sharp bends that would have added stresses when landing. When we tested this landing gear, it was strong enough to work, but unfortunately, bending it by hand with a rolling brake did not provide a high enough level of symmetry, and it was difficult to maneuver. This prompted us to rethink our strategy of having rear landing gear at all - if it was difficult to manufacture it such that all four wheels were touching the ground at once, why not remove the back two wheels and make our plane a tail-dragger? After adding support structures and skids to the tail, we flight tested this final version of the plane, and it finally took off and landed smoothly.",
    extraImage: LandingGearfea
  },
  {
    name: "Oswald the Robot",
    image: Oswald,
    skills: "As part of MIT’s Design and Manufacturing class, I designed and machined a robot capable of com- pleting tasks on a gameboard. My robot’s main module was a telescoping lift made out of aluminum rods and delrin linear bearings - I used a mill to cut even holes out of the rods and delrin, and milled pulleys and a winch out of delrin. The main body of the robot was waterjetted in three separate parts and attached with screws and rivets.",
    extraImage: Oswald2
  },
  {
    name: "Lobstercopter",
    image: Lobstercopter,
    skills: "Lobstercopter is a toy prototype I made with my team for MIT’s Toy Product Design Class. The toy is a dynamic version of limbo, having you you duck and jump to avoid the lobster’s spinning claws. Once you make contact with the arm, it falls off and a light sensor cues the motor to stop. The toy’s main structure consists of a thermoformed plastic cover with a high torque motor sitting on a lazy Susan-esque plywood base. It has two half-plastic, half-foam arms - the light-sensor is located at the midpoint of the arm, and has wired connections traveling down to the base of the toy. The arm’s breakaway connections are 3D printed to fit both halves of the arm, specially designed to fall off when horizontal pressure is applied, but not when the toy is spinning",
    extraImage: Lobstercopter2,
  },
  {
    name: "G(ravity)-Lab",
    image: GLab,
    skills: "G-Lab (http://www.mit.edu/~amobius/glab/index.html) is a website that offers a step-by-step guide to help elementary school students gain a better intuition of gravity. It is presented as a self contained course - students need no prior knowledge to participate, and once they finish they should understand how gravity influences the motion of objects here on Earth and in space. The website has three components: gravity on Earth, escaping Earth’s gravity to launch a rocket into space, and gravity in space. For the gravity on Earth component, students explore gravity by jumping around, playing with a simulation of two balls falling, and watching a video of falling objects in a vacuum. They are introduced to the concept of mass (as the amount of stuff in an object) and how gravity is an inherent property of mass (it’s just the mass of one body attracting the mass of another body). Leaving Earth is a short segment that introduces the idea of escape velocity through a series of exploratory images and urges them to think about how a rocket (or a plane) actually gets off the ground. Finally, “gravity in space” discusses how orbits form and allows students to play with a simulation to see how mass influences orbital shapes (by influencing gravity). I designed the website to teach elementary school age kids (from 3rd to 5th grade). I chose this age group specifically because there aren’t many resources that allow kids to extrapolate the effects of gravity beyond Earth or that really describe why gravity works the way it does. It was created to address many misconceptions that people may develop about physics (like that a heavier object falls faster than a lighter one or that the force of gravity on us from Earth is greater than the force of gravity on Earth from us) so that these issues don’t come up when learning formal mechanics.",
    extraImage: GLab2,
  },
];
