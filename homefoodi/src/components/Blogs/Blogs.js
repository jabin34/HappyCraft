import React from "react";
import Footer from "../../Shared/Footer/Footer";

const Blogs = () => {
  return (
      <div>
        <div className="container p-3 mx-auto border shadow mt-2 text-justify"
      style={{ textAlign: "justify", borderRadius: "12px" }} >
      <h5>Difference between authorization and authentication?</h5>
      <p>
        Authentication means confirming your own identity, while authorization
        means granting access to the system. In simple terms, authentication is
        the process of verifying who you are, while authorization is the process
        of verifying what you have access to. Authentication: Authentication is
        about validating your credentials like User Name/User ID and password to
        verify your identity. The system determines whether you are what you say
        you are using your credentials. In public and private networks, the
        system authenticates the user identity via login passwords.
        Authentication is usually done by a username and password, and sometimes
        in conjunction with factors of authentication, which refers to the
        various ways to be authenticated. For example, when you enter your ATM
        card into the ATM machine, the machine asks you to enter your pin. After
        you enter the pin correctly, the bank then confirms your identity that
        the card really belongs to you and you're the rightful owner of the
        card. By validating your ATM card pin, the bank actually verifies your
        identity, which is called authentication. It merely identifies who you
        are, nothing else. Authorization, on the other hand, occurs after your
        identity is successfully authenticated by the system, which ultimately
        gives you full permission to access the resources such as information,
        files, databases, funds, locations, almost anything. In simple terms,
        authorization determines your ability to access the system and up to
        what extent. Once your identity is verified by the system after
        successful authentication, you are then authorized to access the
        resources of the system. Authorization is the process to determine
        whether the authenticated user has access to the particular resources.
        It verifies your rights to grant you access to resources such as
        information, databases, files, etc. Authorization usually comes after
        authentication which confirms your privileges to perform. In simple
        terms, it's like giving someone official permission to do something or
        anything. For example, the process of verifying and confirming employees
        ID and passwords in an organization is called authentication, but
        determining which employee has access to which floor is called
        authorization.
      </p>
    </div>
    <div className="container p-3 mx-auto border shadow mt-2 text-justify"
      style={{ textAlign: "justify", borderRadius: "12px" }} >
      <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
      <p>
      Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
      Being able to authenticate our users securely, it offers a customized experience to them based on their interests and preferences.
      We can ensure that they have no problems accessing their private data while using our app from multiple devices.
      Firebase Authentication provides all the server-side stuff for authenticating the user. Firebase Authentication becomes easy with SDK. It makes API easy to use.
      Firebase authentication supports authentication using a password, phone numbers, popular identity provider like Google, Facebook, and Twitter, etc.
Parse - Open Source Backend Platform;
Back4app - Parse Hosting Platform;
Kinvey- Mobile Backend as a Service (mBaaS) for the Enterprise;
Backendless- Mobile Backend and API Services Platform;
Kuzzle- Backend for web, hybrid, or native mobile apps and IoT projects;
Pubnub- Real-time APIs and Global Messaging;
Kumulos- App Performance Management;
Game Sparks- Game Backend Platform;
Hoodie- Generic backend with a client API for Offline First applications;
Appwrite- Open-Source backend for Flutter developers
Deployd- Simple core library, with a modular API for your application;
NHost- Accelerates development and provides full control;
Amplify JS- Open-source Javascript framework;
Heroku- Platform as a service backed by Salesforce.

      </p>
    </div>
    <div className="container p-3 mx-auto border shadow mt-2 text-justify"
      style={{ textAlign: "justify", borderRadius: "12px" }} >
      <h5>What other services does firebase provide other than authentication?</h5>
      <p>
      Firebase by Google can be used for the following:

Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.
Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen
Firebase offers integration to Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack, to make your app development with efficient and accurate management and maintenance
Everything from databases, analytics to crashing reports are included in Firebase. So, the app development teams can stay focused on improving the user experience.
Firebase Machine Learning.Firebase Authentication,Firebase Realtime Database,4. Firebase Push Notification,. Firebase Cloud Storage,Firebase Analytics,Firebase Crash Reports
,Firebase Performance.

      </p>
    </div>
    <Footer/> 
      </div>
    
  );
};

export default Blogs;
