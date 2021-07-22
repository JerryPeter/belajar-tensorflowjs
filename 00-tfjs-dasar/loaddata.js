const BASE_URL = "https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/";
const TRAIN_DATA = "train-data.csv";
const TRAIN_TARGET = "train-target.csv";
const TEST_DATA = "test-data.csv";
const TEST_TARGET = "test-target.csv";


function loadData(csv) {
    const url = `${BASE_URL}${csv}`;
    Papa.parse(url, {
        download: true,
        complete: function(results) {
            console.log(url);
            const data = tf.tensor(results['data']);
            data.print();
        }
    });
}

loadData(TRAIN_DATA);
loadData(TRAIN_TARGET);
loadData(TEST_DATA);
loadData(TEST_TARGET);

