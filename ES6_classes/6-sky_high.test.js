import SkyHighBuilding from './6-sky_high';

describe('skyHighBuilding', () => {
  it('should create a SkyHighBuilding instance with correct properties', () => {
    expect.hasAssertions();
    const building = new SkyHighBuilding(200, 65);

    expect(building.sqft).toBe(200);
    expect(building.floors).toBe(65);
    expect(typeof building.evacuationWarningMessage).toBe('function');
    expect(building.evacuationWarningMessage()).toBe(
      'Evacuate slowly the 65 floors',
    );
  });
});
