package com.mothercoders.mothercoders;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document(collection = "cities")
public class City {

    @Id
    private String id;
    private String name;
    private Mayor mayor;
    private final int users;
    private final int nrProjects;
    private final int[] projects;
    private final int benchmark;

    public City(String name, Mayor mayor, int users, int nrProjects, int[] projects, int benchmark) {
        this.name = name;
        this.mayor = mayor;
        this.users = users;
        this.nrProjects = nrProjects;
        this.projects = projects;
        this.benchmark = benchmark;

    }

    public String getId() { return id; }

    public void setId(String id) {this.id = id;}

    public String getName(){
        return name;
    }
    public Mayor getMayor(){
        return mayor;
    }
    public int getUsers(){
        return users;
    }
    public int getNrProjects(){
        return nrProjects;
    }
    public int[] getProject(){
        return projects;
    }
    public int getBenchmark(){
        return benchmark;
    }

    @Override
    public String toString() {
        return "City{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", mayor=" + mayor +
                ", users=" + users +
                ", nrProjects=" + nrProjects +
                ", projects=" + Arrays.toString(projects) +
                ", benchmark=" + benchmark +
                '}';
    }
}