// package CollectionsAndMap.iAssess_3;

import java.util.TreeMap;
import java.util.Map;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Map<state, Map<city, count>>
        Map<String, Map<String, Integer>> map = new TreeMap<>();

        Scanner in = new Scanner(System.in);
        System.out.println("Enter the number of address:");
        int n = in.nextInt();
        in.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.println("Enter the address:");
            String[] input = in.nextLine().split(",");
            String state = input[2];
            String city = input[1];

            if (map.containsKey(state)) {
                Map<String, Integer> m = map.get(state);
            }
        }
    }
}
