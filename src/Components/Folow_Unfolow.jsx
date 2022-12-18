import { useState } from "react";

const FolowUnfolowHandle = () => {
  const [activeProfiles, setActive] = useState([
    {
      isActive: false,
      id: 1,
      name: "Leanne Grham",
      username: "Bret",
      email: "Sincere@april.biz",

      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      isActive: false,
      id: 2,
      name: "Ervin Howellev",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plans",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      isActive: false,
      id: 3,
      name: "Clemsente Bach",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      isActive: false,
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
    {
      isActive: false,
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Keebler LLC",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
    },
    {
      isActive: false,
      id: 6,
      name: "Mrs. Dennis Kist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "Considine-Lockman",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
    },
    {
      isActive: false,
      id: 7,
      name: "Kurtis Weissanat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    },
    {
      isActive: false,
      id: 8,
      name: "Nicholas Ruosstr",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Abernathy Group",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
    },
  ]);

  const handleFollowUnfollow = (id) => {
    setActive((lastState) =>
      lastState.map((itemss) => {
        console.log(itemss);
        if (itemss.id === id) {
          if (itemss.isActive == true) {
            itemss.isActive = false;
          } else {
            itemss.isActive = true;
          }
        }
        return itemss;
      })
    );
  };

  const followers = {
    color: "white",
    background: "dodgerblue",
    border: "none",
    padding: "8px",
    borderRadius: "50px",
    fontWeight: "bold",
    width: "75px",
    cursor: "pointer",
  };

  const unfollowers = {
    color: "white",
    background: "red",
    border: "none",
    padding: "8px",
    borderRadius: "50px",
    fontWeight: "bold",
    width: "75px",
    cursor: "pointer",
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {activeProfiles.map((items) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12%",
              justifyContent: "center",
              border: "1px solid black",
              background: "#800059",
              border: "none",
              borderRadius: "38px",
              marginBottom: "10px",
              color: "white",
              width: "40%",
            }}
          >
            <div>
              <p>
                <strong>{items.name}</strong>
              </p>
            </div>
            <div>
              <div>
                <button
                  style={items.isActive ? unfollowers : followers}
                  onClick={() => handleFollowUnfollow(items.id)}
                >
                  {items.isActive ? (
                    <strong>Unfollow</strong>
                  ) : (
                    <strong>Follow</strong>
                  )}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FolowUnfolowHandle;
