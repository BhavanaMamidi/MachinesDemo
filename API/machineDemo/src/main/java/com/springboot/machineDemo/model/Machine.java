package com.springboot.machineDemo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Machine {
	@Id
    private String id;
    private String name;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdOn;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedOn;
    
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public LocalDateTime getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}
	public LocalDateTime getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(LocalDateTime updatedOn) {
		this.updatedOn = updatedOn;
	}
	
	public Machine() {

	}
	public Machine(String id, String name, LocalDateTime createdOn, LocalDateTime updatedOn) {
		super();
		this.id = id;
		this.name = name;
		this.createdOn = createdOn;
		this.updatedOn = updatedOn;
	}
	@Override
	public String toString() {
		return "Machine [id=" + id + ", name=" + name + ", createdOn=" + createdOn + ", updatedOn=" + updatedOn + "]";
	}
    

}
