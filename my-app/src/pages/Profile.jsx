import styles from "../css/profile.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import signupData from "../data/signup.json";
export const Profile = () => {
  let data = signupData.signupData;
  const [toggle, settoggle] = useState(true);
  const [inpuType, setInputType] = useState("password");
  const [profile, setProfile] = useState(true);
  const handleClick = (input) => {
    settoggle(input);
    if (input) {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  return (
    <>
      {profile ? (
        <div className={styles.Profile}>
          <div className={styles.mainDiv}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_"
              alt=""
            />
          </div>
          <div className={styles.titleDiv}>Sign In or Sign Up</div>
          <div className={styles.inputDiv}>
            <div className={styles.signin}>
              <h2>SIGN IN</h2>
              <p>If you already have an account with us, sign in below</p>
              <div>
                <label htmlFor="mail">Email Address</label>
                <input type="text" name="mail" id="" />
                <label htmlFor="password">Password</label>
                <div className={styles.passDiv}>
                  <input type={inpuType} name="password" id="" />
                  {toggle ? (
                    <div onClick={() => handleClick(false)}>SHOW</div>
                  ) : (
                    <div onClick={() => handleClick(true)}>HIDE</div>
                  )}
                </div>
                <div className={styles.forgot}>
                  <Link to={"/"}>Forgot Password?</Link>
                  <div>
                    <label htmlFor="Remember">Remember Me</label>
                    <input
                      style={{ width: "20px" }}
                      type="checkbox"
                      name="Remember"
                    />
                  </div>
                </div>
                <div className={styles.btn} styles={{ width: "20px" }}>
                  SIGN IN
                </div>
              </div>
            </div>
            <div className={styles.signup}>
              <h2>SIGN UP</h2>
              <p>Create an account to access the best of your favorite store</p>
              <img
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf946a6ac/images/loyalty/July19/nonloyalty_5thmkt_signuptile_D.png?yocs=s_"
                alt=""
              />
              <div onClick={() => setProfile(false)} className={styles.btn}>
                CREATE AN ACCOUNT
              </div>
            </div>
          </div>
          <div className={styles.lastDiv}>
            <p>QUESTIONS?</p>
            <p> We’re here for you! Call us at 1-800-756-5005.</p>
          </div>
        </div>
      ) : (
        <div className={styles.Profile}>
          <div className={styles.mainDiv}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_"
              alt=""
            />
          </div>
          <div className={styles.titleDiv}>Create an Account</div>
          <div className={styles.signupDiv}>
            <form>
              {data.map((el,i) => {
                return (
                  <div key={i}>
                    <label htmlFor="mail">*{el}</label>
                    <input type="text" name="mail" id="" />
                  </div>
                );
              })}
              <div>
              <label htmlFor="password">*Password</label>
              <div className={styles.passDiv}>
                <input type={inpuType} name="password" id="" />
                {toggle ? (
                  <div onClick={() => handleClick(false)}>SHOW</div>
                ) : (
                  <div onClick={() => handleClick(true)}>HIDE</div>
                )}
              </div>
              </div>
              <input
                onClick={() => setProfile(true)}
                className={styles.btn}
                type="submit" value="CREATE AN ACCOUNT"
              />
            </form>
          </div>
          <div className={styles.lastDiv}>
            <p>QUESTIONS?</p>
            <p> We’re here for you! Call us at 1-800-756-5005.</p>
          </div>
        </div>
      )}
    </>
  );
};