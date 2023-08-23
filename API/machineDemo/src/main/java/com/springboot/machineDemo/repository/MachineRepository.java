package com.springboot.machineDemo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.machineDemo.model.Machine;

public interface MachineRepository extends JpaRepository<Machine, String> {

}
