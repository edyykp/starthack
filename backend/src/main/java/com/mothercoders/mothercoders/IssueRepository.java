package com.mothercoders.mothercoders;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends MongoRepository<Issue, String> {}
