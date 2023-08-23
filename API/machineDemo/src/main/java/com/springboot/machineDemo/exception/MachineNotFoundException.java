package com.springboot.machineDemo.exception;

@SuppressWarnings("serial")
public class MachineNotFoundException extends RuntimeException{
	public MachineNotFoundException(String message) {
		super(message);
	}

}
