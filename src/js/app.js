export default function displayTheLifeBar(object) {
  const healthy = 'healthy';
  const wounded = 'wounded';
  const critical = 'critical';
  if (object.health >= 50) {
    return healthy;
  } if (object.health <= 50 && object.health >= 15) {
    return wounded;
  }
  return critical;
}
