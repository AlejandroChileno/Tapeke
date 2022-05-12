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
                Thread.sleep(1000 * 60);
                sync_pedidos_pagados();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private void sync_pedidos_pagados() {
        System.out.println("sync_pedidos_pagados");
        
    }

}
