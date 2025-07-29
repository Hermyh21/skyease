import 'package:get/get.dart';
import 'breathe_controller.dart';

class BreatheBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<BreatheController>(() => BreatheController());
  }
}
