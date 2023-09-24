package ExceptionHandling.iDesign_3;

public class ContactDetail {
    String mobile;
    String alternateMobile;
    String landLine;

    public ContactDetail(String mobile, String alternateMobile, String landLine, String email, String address) {
        this.mobile = mobile;
        this.alternateMobile = alternateMobile;
        this.landLine = landLine;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getAlternateMobile() {
        return alternateMobile;
    }

    public void setAlternateMobile(String alternateMobile) {
        this.alternateMobile = alternateMobile;
    }

    public String getLandLine() {
        return landLine;
    }

    public void setLandLine(String landLine) {
        this.landLine = landLine;
    }

    @Override
    public String toString() {
        return "Mobile:" + this.mobile +
                "\nAlternate mobile:" + this.alternateMobile +
                "\nLandLine:" + this.landLine +
                "\nEmail:" + this.email +
                "\nAddress:" + this.address;
    }
}
