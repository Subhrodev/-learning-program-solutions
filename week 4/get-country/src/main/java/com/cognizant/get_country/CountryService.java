package com.cognizant.get_country;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.cognizant.get_country.Country;

@Service
public class CountryService {

    @Autowired
    @Qualifier("countryList")
    private List<Country> countryList;

    public Country getCountry(String code) {
        return countryList.stream()
            .filter(c -> c.getCode().equalsIgnoreCase(code))
            .findFirst()
            .orElse(null);
    }
}
