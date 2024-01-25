import Image from "next/image";
import user_image from "../../assets/user_image.jpg";
import "./user_panel.css";

export default function User_Panel() {
    return (
      <>
          <h1>User_Panel</h1>
          <div className="user_card">
            <div>
              <Image src={user_image} alt="user_image"/>
              ✎
            </div>
            <p><b>Name: </b>Boris B. Birunda ✎</p>
            <p><b>Title: </b>PhD in botanical evolution ✎</p>
            <p><b>University: </b>University of California, Berkeley ✎</p>
            <p><b>Location: </b>California, USA ✎</p>
            <p><b>Research: </b>Evolution of plant form and function ✎</p>
            <p><b>BioTree level: </b>Contributor 2 ✎</p>
            <p><b>Bio: </b>Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
            Mé faiz elementum girarzis, nisi eros vermeio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. ✎</p>
          </div>
      </>
    );
  }