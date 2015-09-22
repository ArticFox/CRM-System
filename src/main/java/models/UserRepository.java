package models;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
/**
 * Created by Сергей on 07.09.2015.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

}
