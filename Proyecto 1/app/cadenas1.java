public class cadenas1{
	public static void main(String[] args){
		String cad1=args[0];
		String cad2=args[1];
		if(cad1.equals(cad2)){
			System.out.println("Son iguales");
		}else if(cad1.length()>cad2.length()){
			System.out.println(cad1+" es mayor a "+ cad2);
		}else{
			System.out.println(cad2+" es mayor a "+ cad1);
		}

	}
}