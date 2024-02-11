
public class A {
	
	static int  n ;
	private int counter=1;
	
	public static void main(String[] args) {
		
		 n =10;
		 
		 final A obj = new A();
		 
		 Thread t1 = new Thread(new Runnable() {
			
			@Override
			public void run() {
				obj.printEvenNumber();
				
			}
		});
		 
		 Thread t2 = new Thread(new Runnable() {
				
				@Override
				public void run() {
					obj.printOddNumber();
					
				}
			});
		
		t1.start();
		t2.start();
		
	}

	

	public void printOddNumber() {

			synchronized (this) {
			
				while (counter < n) {
				
				if(counter%2!=0) {
					 System.out.println(
							 counter + " ");
					 counter++;
				} else {
					 try {
	                        wait();
	                        System.out.println("inside odd  number wait method");
	                    }
	                    catch (
	                        InterruptedException e) {
	                        e.printStackTrace();
	                    }
				}
				notify();
			}
		}
	}

	public void printEvenNumber() {
		
		synchronized (this) {
			
			while (counter < n) {
				
				if(counter%2==0) {
					 System.out.println(
							 counter + " ");
					 counter++;	
				} else {
					 try {
	                        wait();
	                        System.out.println("inside even  number wait method");
	                    }
	                    catch (
	                        InterruptedException e) {
	                        e.printStackTrace();
	                    }
				}
				notify();
			}
		}
	}



	

}
