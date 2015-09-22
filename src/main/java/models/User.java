package models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.*;

@Entity
public class User {
    @Id
    @GeneratedValue
    private long id;

    private String username;
    @JsonIgnore
    private String password;

    @OneToMany(mappedBy = "user")
    private Set<MyTasks> tasks = new HashSet<MyTasks>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<MyTasks> getTasks() {
        return tasks;
    }

    public void setTasks(Set<MyTasks> tasks) {
        this.tasks = tasks;
    }
}
