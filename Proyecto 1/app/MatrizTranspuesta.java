public class MatrizTranspuesta{
	public static void main (String [] args){
	 	int matriz [][]={{1,2,3},{4,5,6},{7,8,9},{0,1,2}};
		int transpuesta [][]=new int[matriz[0].length][matriz.length];
		System.out.println("Matriz");
		for (int i=0;i<matriz.length;i++) {
			for (int j=0;j<matriz[0].length;j++) {
				System.out.print(" "+ matriz[i][j] + " ");
			}
			System.out.println("\n");
		}

		System.out.println("\n\n"+"Transpuesta: ");
		for (int i=0;i<matriz[0].length;i++) {
			for (int j=0;j<matriz.length;j++) {
				System.out.print(" "+ matriz[j][i] + " ");
			}
			System.out.println("\n");
		}
}