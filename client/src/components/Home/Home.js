import React from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";
import Searchbar from "../searchbar/searchbar";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Category from "../Categories/General/Category";
import imgDefault from "../../assets/imgDefault.jpg";
import { Link } from "react-router-dom";
import CatHome from "../Categories/General/CatHome";
import ShowCard from "../AllProfessionals/ShowCard";

const Home = () => {
  const worker = useSelector((state) => state?.worker);
  console.log(worker, "worker");

  return (
    <div className={styles.wrapper}>
      <NavBar />

      <div className={styles.containerOne}>
        <div className={styles.left}>
          <div className={styles.text}>
            FIND THE PERFECT PROFESSIONAL SERVICES FOR YOU
          </div>

          <div className={styles.search}>
            <Searchbar />
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="https://media.istockphoto.com/id/1181830509/es/foto/urbano-feliz-mujer-de-negocios-usando-la-tableta-y-trabajando.jpg?s=612x612&w=0&k=20&c=p7EW36clLJUH6ICRXqYjic2VKMEcOfGP01SdI8nawkE="
            alt="Profesional"
          />

          {/* <div className={styles.profesionalName}>Yuri Nallely</div> */}
          {/*           <div className={styles.stars}>⭐⭐⭐⭐⭐</div> */}
        </div>
      </div>

      <div className="">
        <h1
          className="col-12 text-center fs-1"
          style={{ color: " #1F1F1F", height: "3vw" }}
        >
          Professionals
        </h1>
        <div className="container h-100">
          {worker.message && <div>{worker.message}</div>}
          {worker.length > 0 ? (
            <div className="row col-md-12 d-flex align-items-center justify-content-around">
              {worker.map((prof) => {
                return (
                  <div key={prof.id} className="col-md-4">
                    <ShowCard
                      name={prof.name}
                      rating={prof.rating}
                      id={prof.id}
                      photo={prof.photo}
                      professions={prof.professions}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="container">
              <CatHome />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
