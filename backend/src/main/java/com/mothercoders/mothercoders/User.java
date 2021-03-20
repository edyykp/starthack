package com.mothercoders.mothercoders;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {

    @Id
    private String id;
    private String idCity;
    private final String lastName;
    private final String firstName;
    private final String birth;
    private final String mail;
    private final String phone;

    public User(String lastName, String firstName, String birth, String mail, String phone, String idCity) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.birth = birth;
        this.mail = mail;
        this.phone = phone;
        this.idCity = idCity;
    }

    public String getId() { return id; }

    public void setId(String id) {this.id = id; }

    public String getLastName() {
        return lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getBirth() {
        return birth;
    }
    public String getMail() {
        return mail;
    }
    public String getPhone(){
        return phone;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", lastName='" + lastName + '\'' +
                ", firstName='" + firstName + '\'' +
                ", birth='" + birth + '\'' +
                ", mail='" + mail + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}