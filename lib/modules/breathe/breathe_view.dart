// lib/modules/breathe/breathe_view.dart
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'breathe_controller.dart';
import 'package:lottie/lottie.dart';

class BreatheView extends GetView<BreatheController> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Breathe"),
        centerTitle: true,
        backgroundColor: Colors.lightBlue.shade100,
        elevation: 0,
      ),
      backgroundColor: Colors.blue.shade50,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Lottie.asset(
              'assets/animations/breathing_circle.json',
              width: 200,
              repeat: true,
            ),
            SizedBox(height: 24),
            Obx(() => Text(
              controller.currentPhase.value,
              style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
            )),
            Obx(() => Text(
              '${controller.timeLeft.value}s',
              style: TextStyle(fontSize: 20),
            )),
            SizedBox(height: 32),
            ElevatedButton.icon(
              onPressed: controller.startBreathing,
              icon: Icon(Icons.play_arrow),
              label: Text("Start"),
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.symmetric(horizontal: 32, vertical: 12),
                backgroundColor: Colors.blueAccent,
              ),
            )
          ],
        ),
      ),
    );
  }
}
