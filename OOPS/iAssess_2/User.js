// package CollectionsAndMap.iAssess_2;

public class User implements Comparable<User> {
    private String name;
    private String contactNumber;
    private String userName;
    private String email;

    public User(String name, String contactNumber, String userName, String email) {
        this.name = name;
        this.contactNumber = contactNumber;
        this.userName = userName;
        this.email = email;
    }

    public User() {
        this.name = null;
        this.contactNumber = null;
        this.userName = null;
        this.email = null;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
