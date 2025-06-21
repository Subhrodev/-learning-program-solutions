//The Factory Pattern is a creational design pattern that provides an interface for creating objects 
//but allows subclasses or implementing classes to decide which class to instantiate. It encapsulates the 
//object creation logic within a separate factory class, providing a common interface for creating objects 
//without exposing the instantiation logic to the client.

package FactoryPattern;

public class Main {
    public static void main(String[] args) {
        ShapeFactory factory = new ShapeFactory();

        Shape shape1 = factory.getShape("CIRCLE");
        shape1.draw();

        Shape shape2 = factory.getShape("RECTANGLE");
        shape2.draw();
    }
}