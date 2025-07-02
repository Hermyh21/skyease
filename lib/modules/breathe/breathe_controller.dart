import 'dart:async';
import 'package:get/get.dart';

class BreatheController extends GetxController {
  final RxString currentPhase = 'Inhale'.obs;
  final RxInt timeLeft = 4.obs;

  Timer? _timer;
  int _phaseIndex = 0;

  final List<Map<String, dynamic>> _phases = [
    {"label": "Inhale", "duration": 4},
    {"label": "Hold", "duration": 4},
    {"label": "Exhale", "duration": 6},
  ];

  void startBreathing() {
    _phaseIndex = 0;
    _runPhase();
  }

  void _runPhase() {
    currentPhase.value = _phases[_phaseIndex]['label'];
    timeLeft.value = _phases[_phaseIndex]['duration'];

    _timer = Timer.periodic(Duration(seconds: 1), (timer) {
      timeLeft.value--;
      if (timeLeft.value <= 0) {
        timer.cancel();
        _phaseIndex = (_phaseIndex + 1) % _phases.length;
        _runPhase();
      }
    });
  }

  @override
  void onClose() {
    _timer?.cancel();
    super.onClose();
  }
}
