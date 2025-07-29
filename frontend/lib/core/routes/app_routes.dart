import 'package:get/get.dart';
import '../../modules/home/home_view.dart';
import '../../modules/home/home_binding.dart';
import '../../modules/breathe/breathe_view.dart';
import '../../modules/breathe/breathe_binding.dart';

class AppRoutes {
  static const String home = '/';
  static const String breathe = '/breathe';

  static final routes = [
    GetPage(
      name: home,
      page: () => HomeView(),
      binding: HomeBinding(),
    ),
    GetPage(
      name: breathe,
      page: () => BreatheView(),
      binding: BreatheBinding(),
    ),
  ];
}
