package com.javacodegeeks.examples;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String homepage() {
		return "static/index.html";
	}
}
