import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'home_controller.dart';

class HomeView extends GetView<HomeController> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('SkyEase'),
        centerTitle: true,
        backgroundColor: Colors.lightBlue.shade100,
        elevation: 0,
      ),
      backgroundColor: Colors.blue.shade50,
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: GridView.count(
          crossAxisCount: 2,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
          children: [
            _HomeCard(
              title: 'Breathe',
              icon: Icons.air,
              onTap: controller.goToBreathe,
            ),
            _HomeCard(
              title: 'Relax Audio',
              icon: Icons.headphones,
              onTap: () {}, // placeholder
            ),
            _HomeCard(
              title: 'Watch',
              icon: Icons.ondemand_video,
              onTap: () {}, // placeholder
            ),
            _HomeCard(
              title: 'Journal',
              icon: Icons.book,
              onTap: () {}, // placeholder
            ),
            _HomeCard(
              title: 'Panic Button',
              icon: Icons.warning_amber,
              onTap: () {}, // placeholder
            ),
          ],
        ),
      ),
    );
  }
}

class _HomeCard extends StatelessWidget {
  final String title;
  final IconData icon;
  final VoidCallback onTap;

  const _HomeCard({
    required this.title,
    required this.icon,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        elevation: 3,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        color: Colors.white,
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 48, color: Colors.blue),
              SizedBox(height: 8),
              Text(title, style: TextStyle(fontSize: 16)),
            ],
          ),
        ),
      ),
    );
  }
}
