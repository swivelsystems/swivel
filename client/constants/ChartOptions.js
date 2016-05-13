export const infoTitle1 = 'Students Passing';
export const infoDescription1 = 'Shows the number of students passing based on assignments that should have been submitted.';
export const infoTitle2 = 'Daily Participation';
export const infoDescription2 ='Shows the number of students who participate at least once per day.';
export const infoTitle3 = 'Missing Submissions';
export const infoDescription3 = 'Shows the number of students who have not submitted at least one assignment.';
export const doughnutChartOptions = {
  segmentShowStroke: true,
  responsive: true,
  animation: false,
  segmentStrokeColor: "#ECF0F1",
  segmentStrokeWidth: 1,
};
export const gradesData = [
  {
    value: 24,
    color: '#2ecc71',
    highlight: '#27ae60',
    label: 'Passing',
  },
  {
    value: 3,
    color: '#e95849',
    highlight: '#c0392b',
    label: 'Failing',
  },
];

export const participationData = [
  {
    value: 19,
    color: '#2ecc71',
    highlight: '#27ae60',
    label: '1-5x per day',
  },
  {
    value: 8,
    color: '#e95849',
    highlight: '#c0392b',
    label: '0x per day',
  },
];

export const extraCredit = [
  {
    value: 15,
    color: '#2ecc71',
    highlight: '#27ae60',
    label: 'No missing',
  },
  {
    value: 12,
    color: '#e95849',
    highlight: '#c0392b',
    label: 'At least 1 missing',
  },
];


export const barData = {
  labels:
  [
    '0-10%',
    '10-20%',
    '20-30%',
    '30-40%',
    '40-50%',
    '50-60%',
    '60-70%',
    '70-80%',
    '80-90%',
    '90-100%',
  ],
  datasets: [
    {
      label: 'My First dataset',
      fillColor: '#3498DB',
      color: '#3498DB',
      borderWidth: 0,
      hoverBackgroundColor: '#2980b9',
      hoverBorderColor: '#2980b9',
      data: [0, 0, 1, 0, 0, 2, 3, 10, 10, 4],
    },
  ],
};

export const barChartOptions = {
  // responsive: true,
};
