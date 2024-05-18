// 抽象类 GeometricFigure
abstract class GeometricFigure {
    protected String figureType;
    protected double area;

    // 抽象方法，计算面积
    abstract void calculatingArea();

    // 打印输出面积
    void printArea() {
        System.out.println("类型为 " + figureType + " 的面积是" + area);
    }
}

// 圆形类 Circle
class Circle extends GeometricFigure {
    private double radius;

    Circle(double radius) {
        this.radius = radius;
        this.figureType = "Circle";
    }

    // 实现计算面积的方法
    void calculatingArea() {
        area = Math.PI * radius * radius;
    }

    // 重写打印输出面积的方法
    void printArea() {
        super.printArea();
    }
}

// 三角形类 Triangle
class Triangle extends GeometricFigure {
    private double side1, side2, side3;

    Triangle(double side1, double side2, double side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.figureType = "Triangle";
    }

    // 实现计算面积的方法
    void calculatingArea() {
        // 判断是否能构成三角形
        if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
            double s = (side1 + side2 + side3) / 2;
            area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        } else {
            area = -1; // 表示不能构成三角形
        }
    }

    // 重写打印输出面积的方法
    void printArea() {
        if (area == -1) {
            System.out.println("不能构成三角形，不能进行面积计算");
        } else {
            super.printArea();
        }
    }
}

// 测试类
public class Geometric {
    public static void main(String[] args) {
        Circle circle = new Circle(5);
        circle.calculatingArea();
        circle.printArea();

        Triangle triangle = new Triangle(3, 4, 5);
        triangle.calculatingArea();
        triangle.printArea();

        Triangle invalidTriangle = new Triangle(1, 2, 5);
        invalidTriangle.calculatingArea();
        invalidTriangle.printArea();
    }
}

