package com.mothercoders.mothercoders;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "projects")
public class Project {

    @Id
    private String id;
    private String idCity;
    private final String description;
    private final String category;
    private final int jobsCreated;
    private final String advantages;
    private final String disadvantages;

    public Project(String description, String category, int jobsCreated, String advantages
            , String disadvantages, String idCity) {
        this.description = description;
        this.category = category;
        this.jobsCreated = jobsCreated;
        this.advantages = advantages;
        this.disadvantages = disadvantages;
        this.idCity = idCity;
    }

    public String getId() { return id; }

    public void setId(String id) {this.id = id;}

    public String getDescription() {
        return description;
    }

    public String getCategory(){
        return category;
    }
    public int getJobsCreated(){
        return jobsCreated;
    }
    public String getAdvantages(){
        return advantages;
    }
    public String getDisadvantages(){
        return disadvantages;
    }

    @Override
    public String toString() {
        return "Project{" +
                "id='" + id + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", jobsCreated=" + jobsCreated +
                ", advantages='" + advantages + '\'' +
                ", disadvantages='" + disadvantages + '\'' +
                '}';
    }
}