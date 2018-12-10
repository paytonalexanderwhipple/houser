DROP TABLE houser;

CREATE TABLE houser (
    house_id SERIAL PRIMARY KEY,
    property_name VARCHAR(100),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(20),
    zip VARCHAR(10),
    monthly_mortgage VARCHAR(20),
    desired_rent VARCHAR(20),
    img text
);

INSERT INTO houser (property_name, address, city, state, zip, monthly_mortgage, desired_rent, img)
    VALUES ('house1', '123 st.', 'Homlet', 'Grayhawk', 12345, 123456, 1234, 'https://i.pinimg.com/originals/ef/be/99/efbe995db6007dca7c9981fd3afe41f6.jpg');
INSERT INTO houser (property_name, address, city, state, zip, monthly_mortgage, desired_rent, img)
    VALUES ('house2', '123 st.', 'Homlet', 'Grayhawk', 12345, 123456, 1234, 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Bignor_cottage.JPG/300px-Bignor_cottage.JPG');
INSERT INTO houser (property_name, address, city, state, zip, monthly_mortgage, desired_rent, img)
    VALUES ('house3', '123 st.', 'Homlet', 'Grayhawk', 12345, 123456, 1234, 'https://aleteiaen.files.wordpress.com/2017/07/web3-medieval-castle-england-uk-great-britain-royalty-shutterstock.jpg?quality=100&strip=all');

SELECT * FROM houser