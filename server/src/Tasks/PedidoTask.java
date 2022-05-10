package Tasks;

public class PedidoTask extends Thread {

    private boolean isRun;

    public PedidoTask() {
        this.isRun = true;
        this.start();

    }

    @Override
    public void run() {
        while (isRun) {
            try {
                System.out.println("PedidoTask");
                Thread.sleep(1000 * 60);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }

}
