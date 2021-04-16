package com.example.librarylab.enumeration;

import org.springframework.security.core.GrantedAuthority;

public enum Category implements GrantedAuthority {

    NOVEL, THRILER, HISTORY, FANTASY, BIOGRAPHY, CLASSICS, DRAMA;

    @Override
    public String getAuthority() {
        return name();
    }
}
