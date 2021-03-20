package com.mothercoders.mothercoders;
import com.mongodb.ConnectionString;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.MongoClientSettings;
public class ConnectDatabase {
    public static void Main(String[] args) {


        MongoClient mongoClient = MongoClients.create();
        System.out.println("connected");
        /*
        ConnectionString connString = new ConnectionString(
                "mongodb+srv://<username>:<password>@<cluster-address>/test?w=majority"
        );
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString(connString)
                .retryWrites(true)
                .build();
        MongoClient mongoClient = MongoClients.create(settings);
        MongoDatabase database = mongoClient.getDatabase("test");*/
    }
}
