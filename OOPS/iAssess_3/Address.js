package CollectionsAndMap.iDesign_3;

public class Address {
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private String pincode;

    public Address(String addressLine1, String addressLine2, String city, String state, String pincode) {
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }

    public Address() {
        this.addressLine1 = "";
        this.addressLine2 = "";
    }
}
