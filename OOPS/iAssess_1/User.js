// package CollectionsAndMap.iAssess_1;

import java.util.Objects;

public class User implements Comparable<User>{
    private String username;
    private String bankname;

    public User(String username, String bankname) {
        this.username = username;
        this.bankname = bankname;
    }

    public User() {
        this.username = "";
        this.bankname = "";
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getBankname() {
        return bankname;
    }
