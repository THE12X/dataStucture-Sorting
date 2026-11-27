
const ALGO_CONFIGS = {
    bubble: {
        title: 'BubbleSort',
        badge: 'O(n²) Adjacent',
        subtitle: 'Adjacent comparison & bubbling simulation',
        pseudoTag: 'Bubble Sort',
        infoTitle: 'How Bubble Sort Works',
        infoDesc: 'Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. Each pass bubbles the next largest element into its final sorted position.',
        timeComp: 'O(n²) Avg',
        spaceComp: 'O(1) Aux',
        iconClass: 'fa-chart-column',
        metricTwoLabel: 'Swaps:',
        showMetricThree: false,
        legend: [
            { color: '#374151', label: 'Unsorted' },
            { color: '#f97316', label: 'Comparing' },
            { color: '#a3e635', label: 'Swapping' },
            { color: '#10b981', label: 'Sorted' }
        ],
        pseudocode: [
            { line: 1, indent: 0, text: 'procedure bubbleSort(A):' },
            { line: 2, indent: 1, text: 'n = length(A)' },
            { line: 3, indent: 1, text: 'repeat' },
            { line: 4, indent: 2, text: 'swapped = false' },
            { line: 5, indent: 2, text: 'for i = 1 to n - 1 do' },
            { line: 6, indent: 3, text: 'if A[i-1] > A[i] then' },
            { line: 7, indent: 4, text: 'swap(A[i-1], A[i])' },
            { line: 8, indent: 4, text: 'swapped = true' },
            { line: 9, indent: 2, text: 'n = n - 1' },
            { line: 10, indent: 1, text: 'until not swapped' }
        ]
    },
    selection: {
        title: 'SelectionSort',
        badge: 'O(n²) Min-Scan',
        subtitle: 'In-place minimum selection & boundary swap',
        pseudoTag: 'Selection Sort',
        infoTitle: 'How Selection Sort Works',
        infoDesc: 'Selection Sort divides the array into a sorted left region and an unsorted right region. On each pass, it scans the unsorted portion to locate the smallest element and swaps it into the front of the unsorted boundary.',
        timeComp: 'O(n²) All',
        spaceComp: 'O(1) Aux',
        iconClass: 'fa-hand-pointer',
        metricTwoLabel: 'Swaps:',
        showMetricThree: false,
        legend: [
            { color: '#374151', label: 'Unsorted' },
            { color: '#a855f7', label: 'Current Min' },
            { color: '#f97316', label: 'Scanning' },
            { color: '#a3e635', label: 'Swapping' },
            { color: '#10b981', label: 'Sorted' }
        ],
        pseudocode: [
            { line: 1, indent: 0, text: 'procedure selectionSort(A):' },
            { line: 2, indent: 1, text: 'for i = 0 to n - 2 do' },
            { line: 3, indent: 2, text: 'minIdx = i' },
            { line: 4, indent: 2, text: 'for j = i + 1 to n - 1 do' },
            { line: 5, indent: 3, text: 'if A[j] < A[minIdx] then' },
            { line: 6, indent: 4, text: 'minIdx = j' },
            { line: 7, indent: 2, text: 'if minIdx != i then' },
            { line: 8, indent: 3, text: 'swap(A[i], A[minIdx])' }
        ]
    },
    insertion: {
        title: 'InsertionSort',
        badge: 'O(n²) Incremental',
        subtitle: 'Sorted prefix building via shifting & insertion',
        pseudoTag: 'Insertion Sort',
        infoTitle: 'How Insertion Sort Works',
        infoDesc: 'Insertion Sort builds the final sorted array one element at a time. It picks the next unsorted key element, shifts larger elements in the sorted left prefix one position right, and inserts the key into its proper slot.',
        timeComp: 'O(n²) / O(n)',
        spaceComp: 'O(1) Aux',
        iconClass: 'fa-arrow-right-to-bracket',
        metricTwoLabel: 'Shifts:',
        showMetricThree: false,
        legend: [
            { color: '#374151', label: 'Unsorted' },
            { color: '#60a5fa', label: 'Sorted Prefix' },
            { color: '#a855f7', label: 'Active Key' },
            { color: '#f97316', label: 'Comparing' },
            { color: '#8b5cf6', label: 'Shifting / Insert' },
            { color: '#10b981', label: 'Final Sorted' }
        ],
        pseudocode: [
            { line: 1, indent: 0, text: 'procedure insertionSort(A):' },
            { line: 2, indent: 1, text: 'for i = 1 to n - 1 do' },
            { line: 3, indent: 2, text: 'key = A[i]; j = i - 1' },
            { line: 4, indent: 2, text: 'while j >= 0 and A[j] > key:' },
            { line: 5, indent: 3, text: 'A[j + 1] = A[j]' },
            { line: 6, indent: 3, text: 'j = j - 1' },
            { line: 7, indent: 2, text: 'A[j + 1] = key' }
        ]
    },
    shell: {
        title: 'ShellSort',
        badge: 'Diminishing Gap',
        subtitle: 'Gap-strided gapped insertion passes',
        pseudoTag: 'Shell Sort',
        infoTitle: 'How Shell Sort Works',
        infoDesc: 'Shell Sort generalizes Insertion Sort by allowing exchanges of elements that are far apart. It sorts elements separated by a shrinking gap sequence (n/2, n/4, ..., 1), ending with a fast standard insertion pass on a nearly sorted array.',
        timeComp: 'O(n log² n)',
        spaceComp: 'O(1) Aux',
        iconClass: 'fa-layer-group',
        metricTwoLabel: 'Shifts:',
        metricThreeLabel: 'Current Gap:',
        showMetricThree: true,
        legend: [
            { color: '#374151', label: 'Inactive' },
            { color: '#06b6d4', label: 'Gap Subsequence' },
            { color: '#a855f7', label: 'Active Key' },
            { color: '#f97316', label: 'Gap Comparing' },
            { color: '#8b5cf6', label: 'Gap Shifting' },
            { color: '#10b981', label: 'Sorted' }
        ],
        pseudocode: [
            { line: 1, indent: 0, text: 'procedure shellSort(A):' },
            { line: 2, indent: 1, text: 'gap = floor(n / 2)' },
            { line: 3, indent: 1, text: 'while gap > 0 do' },
            { line: 4, indent: 2, text: 'for i = gap to n - 1 do' },
            { line: 5, indent: 3, text: 'temp = A[i]; j = i' },
            { line: 6, indent: 3, text: 'while j >= gap and A[j-gap] > temp:' },
            { line: 7, indent: 4, text: 'A[j] = A[j - gap]; j -= gap' },
            { line: 8, indent: 3, text: 'A[j] = temp' },
            { line: 9, indent: 2, text: 'gap = floor(gap / 2)' }
        ]
    },
    merge: {
        title: 'MergeSort',
        badge: 'Divide & Conquer',
        subtitle: 'Recursive splitting & auxiliary array merging',
        pseudoTag: 'Merge Sort',
        infoTitle: 'How Merge Sort Works',
        infoDesc: 'Merge Sort divides the array into equal halves until sub-arrays reach size 1, then repeatedly merges adjacent sub-arrays back together in sorted order using temporary auxiliary memory.',
        timeComp: 'O(n log n)',
        spaceComp: 'O(n) Aux',
        iconClass: 'fa-code-merge',
        metricTwoLabel: 'Aux Writes:',
        metricThreeLabel: 'Aux Reads:',
        showMetricThree: true,
        legend: [
            { color: '#374151', label: 'Normal' },
            { color: '#06b6d4', label: 'Left Subarray' },
            { color: '#22c55e', label: 'Right Subarray' },
            { color: '#f97316', label: 'Comparing' },
            { color: '#8b5cf6', label: 'Writing Back' },
            { color: '#10b981', label: 'Sorted' }
        ],
        pseudocode: [
            { line: 1, indent: 0, text: 'mergeSort(A, left, right):' },
            { line: 2, indent: 1, text: 'if left < right then' },
            { line: 3, indent: 2, text: 'mid = (left + right) / 2' },
            { line: 4, indent: 2, text: 'mergeSort(A, left, mid)' },
            { line: 5, indent: 2, text: 'mergeSort(A, mid+1, right)' },
            { line: 6, indent: 2, text: 'merge(A, left, mid, right)' },
            { line: 7, indent: 0, text: 'merge(A, left, mid, right):' },
            { line: 8, indent: 1, text: 'copy subarrays to temp aux' },
            { line: 9, indent: 1, text: 'while i <= mid and j <= right:' },
            { line: 10, indent: 2, text: 'compare & write smaller back' }
        ]
    },
    quick: {
        title: 'QuickSort',
        badge: 'Lomuto Partition',
        subtitle: 'In-place pivot partitioning engine',
        pseudoTag: 'Quick Sort',
        infoTitle: 'How Quick Sort Works',
        infoDesc: 'Selects the rightmost element A[high] as the Pivot, partitions elements smaller than or equal to the pivot to its left, and locks the pivot in its final sorted index before recursing.',
        timeComp: 'O(n log n) Avg',
        spaceComp: 'O(log n) Stack',
        iconClass: 'fa-bolt',
        metricTwoLabel: 'Swaps:',
        showMetricThree: false,
        legend: [
            { color: '#38bdf8', label: 'Unsorted' },
            { color: '#60a5fa', label: 'Active Range' },
            { color: '#a855f7', label: 'Pivot' },
            { color: '#f97316', label: 'Comparing / Swapping' },
            { color: '#a3e635', label: 'Sorted' }
        ],
        pseudocode: [
            { line: 1, indent: 0, text: 'quickSort(A, low, high):' },
            { line: 2, indent: 1, text: 'if low < high:' },
            { line: 3, indent: 2, text: 'p = partition(A, low, high)' },
            { line: 4, indent: 2, text: 'quickSort(A, low, p - 1)' },
            { line: 5, indent: 2, text: 'quickSort(A, p + 1, high)' },
            { line: 7, indent: 0, text: 'partition(A, low, high):' },
            { line: 8, indent: 1, text: 'pivot = A[high]; i = low - 1' },
            { line: 10, indent: 1, text: 'for j = low to high - 1:' },
            { line: 11, indent: 2, text: 'if A[j] <= pivot: swap(++i, j)' },
            { line: 14, indent: 1, text: 'swap(A[i + 1], A[high]); return i+1' }
        ]
    },
    heap: {
        title: 'HeapSort',
        badge: 'Max-Heap Binary Tree',
        subtitle: 'In-place binary heap construction & extraction',
        pseudoTag: 'Heap Sort',
        infoTitle: 'How Heap Sort Works',
        infoDesc: 'Heap Sort first restructures the array into a Max-Heap where every parent node is greater than its children. It then repeatedly swaps the maximum root element with the end of the heap and restores the heap property.',
        timeComp: 'O(n log n)',
        spaceComp: 'O(1) Aux',
        iconClass: 'fa-sitemap',
        metricTwoLabel: 'Swaps:',
        showMetricThree: false,
        legend: [
            { color: '#374151', label: 'Outside Heap' },
            { color: '#38bdf8', label: 'Active Heap' },
            { color: '#a855f7', label: 'Parent Node' },
            { color: '#f97316', label: 'Comparing Children' },
            { color: '#a3e635', label: 'Swapping' },
            { color: '#10b981', label: 'Sorted' }
        ],
        pseudocode: [
            { line: 1, indent: 0, text: 'heapSort(A, n):' },
            { line: 2, indent: 1, text: 'for i = n/2 - 1 down to 0:' },
            { line: 3, indent: 2, text: 'heapify(A, n, i)' },
            { line: 4, indent: 1, text: 'for end = n - 1 down to 1:' },
            { line: 5, indent: 2, text: 'swap(A[0], A[end])' },
            { line: 6, indent: 2, text: 'heapify(A, end, 0)' },
            { line: 7, indent: 0, text: 'heapify(A, size, i):' },
            { line: 8, indent: 1, text: 'largest = max(i, 2i+1, 2i+2)' },
            { line: 9, indent: 1, text: 'if largest != i:' },
            { line: 10, indent: 2, text: 'swap(A[i], A[largest]); heapify' }
        ]
    }
};

/**
 * Unified Sorting Engine
 */
class UnifiedSortingVisualizer {
    constructor() {
        this.currentAlgo = 'bubble';
        this.array = [];
        this.originalArray = [];
        this.steps = [];
        this.stepIndex = 0;

        this.isPlaying = false;
        this.runToken = 0;
        this.audioEnabled = false;
        this.audioCtx = null;

        this.cacheDOM();
        this.bindEvents();
        this.applyAlgorithmTheme();
        this.generateNewArray();
    }

    cacheDOM() {
        this.algoTabs = document.querySelectorAll('.algo-tab');
        this.sizeSlider = document.getElementById('sizeSlider');
        this.speedSlider = document.getElementById('speedSlider');
        this.sizeVal = document.getElementById('sizeVal');
        this.speedVal = document.getElementById('speedVal');

        this.btnGenerate = document.getElementById('btnGenerate');
        this.btnReset = document.getElementById('btnReset');
        this.btnPlay = document.getElementById('btnPlay');
        this.btnStep = document.getElementById('btnStep');
        this.btnAudio = document.getElementById('btnAudio');

        this.compCount = document.getElementById('compCount');
        this.metricTwoLabel = document.getElementById('metricTwoLabel');
        this.metricTwoVal = document.getElementById('metricTwoVal');
        this.metricThreeBox = document.getElementById('metricThreeBox');
        this.metricThreeLabel = document.getElementById('metricThreeLabel');
        this.metricThreeVal = document.getElementById('metricThreeVal');

        this.statusText = document.getElementById('statusText');
        this.barsContainer = document.getElementById('barsContainer');
        this.legendContainer = document.getElementById('legendContainer');
        this.pseudocodeBox = document.getElementById('pseudocodeBox');
    }

    bindEvents() {
        this.algoTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const selected = tab.dataset.algo;
                if (selected !== this.currentAlgo) {
                    this.switchAlgorithm(selected);
                }
            });
        });

        this.sizeSlider.addEventListener('input', (e) => {
            this.sizeVal.textContent = e.target.value;
            if (!this.isPlaying) {
                this.generateNewArray();
            }
        });

        this.speedSlider.addEventListener('input', () => this.updateSpeedLabel());

        this.btnGenerate.addEventListener('click', () => {
            this.pause();
            this.generateNewArray();
        });

        this.btnReset.addEventListener('click', () => {
            this.pause();
            this.resetToOriginal();
        });

        this.btnPlay.addEventListener('click', () => {
            this.isPlaying ? this.pause() : this.start();
        });

        this.btnStep.addEventListener('click', () => {
            if (this.isPlaying) this.pause();
            this.stepForward();
        });

        this.btnAudio.addEventListener('click', () => this.toggleAudio());
    }

    switchAlgorithm(algoKey) {
        this.pause();
        this.currentAlgo = algoKey;
        this.applyAlgorithmTheme();
        this.resetToOriginal();
    }

    applyAlgorithmTheme() {
        const cfg = ALGO_CONFIGS[this.currentAlgo];

        // Update Tab Styles
        this.algoTabs.forEach(tab => {
            const isActive = tab.dataset.algo === this.currentAlgo;
            tab.className = isActive
                ? 'algo-tab px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 bg-electricLime text-obsidian-900 shadow'
                : 'algo-tab px-3 py-1.5 rounded-lg text-xs font-semibold text-cloudyGray hover:text-white transition-all flex items-center gap-1.5';
        });

        // Update Header & Info Cards
        document.getElementById('headerTitle').textContent = cfg.title;
        document.getElementById('headerBadge').textContent = cfg.badge;
        document.getElementById('headerSubtitle').textContent = cfg.subtitle;
        document.getElementById('pseudoTag').textContent = cfg.pseudoTag;
        document.getElementById('infoTitle').textContent = cfg.infoTitle;
        document.getElementById('infoDesc').textContent = cfg.infoDesc;
        document.getElementById('timeCompVal').textContent = cfg.timeComp;
        document.getElementById('spaceCompVal').textContent = cfg.spaceComp;

        const brandIcon = document.getElementById('brandIcon');
        brandIcon.className = `fa-solid ${cfg.iconClass} text-obsidian-900 text-lg`;

        // Update Metrics Labels
        this.metricTwoLabel.textContent = cfg.metricTwoLabel;
        if (cfg.showMetricThree) {
            this.metricThreeLabel.textContent = cfg.metricThreeLabel || 'Aux Reads:';
            this.metricThreeBox.classList.remove('hidden');
            this.metricThreeBox.classList.add('flex');
        } else {
            this.metricThreeBox.classList.add('hidden');
            this.metricThreeBox.classList.remove('flex');
        }

        // Render Legend
        this.legendContainer.innerHTML = cfg.legend.map(item => `
                    <div class="flex items-center gap-1.5">
                        <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${item.color}"></span>
                        <span class="text-cloudyGray font-medium">${item.label}</span>
                    </div>
                `).join('');

        // Render Pseudocode
        this.pseudocodeBox.innerHTML = cfg.pseudocode.map(row => `
                    <div data-line="${row.line}" style="padding-left: ${row.indent * 12 + 8}px" class="code-line transition-colors duration-150 py-1 pr-2 rounded">
                        ${row.text}
                    </div>
                `).join('');

        this.updateSpeedLabel();
    }

    updateSpeedLabel() {
        const val = parseInt(this.speedSlider.value, 10);
        if (val < 30) this.speedVal.textContent = 'Slow';
        else if (val < 75) this.speedVal.textContent = 'Medium';
        else this.speedVal.textContent = 'Fast';
    }

    getDelayMs() {
        const val = parseInt(this.speedSlider.value, 10);
        return Math.floor(Math.max(8, 450 - val * 4.3));
    }

    toggleAudio() {
        this.audioEnabled = !this.audioEnabled;
        if (this.audioEnabled && !this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.audioCtx = new AudioContext();
        }
        if (this.audioEnabled && this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }

        const icon = document.getElementById('audioIcon');
        const label = document.getElementById('audioLabel');
        if (this.audioEnabled) {
            icon.className = 'fa-solid fa-volume-high text-electricLime';
            label.textContent = 'Sound On';
            this.btnAudio.classList.add('border-electricLime/50', 'text-white');
        } else {
            icon.className = 'fa-solid fa-volume-xmark';
            label.textContent = 'Sound Off';
            this.btnAudio.classList.remove('border-electricLime/50', 'text-white');
        }
    }

    playTone(value, type = 'sine') {
        if (!this.audioEnabled || !this.audioCtx || value === undefined) return;
        try {
            const now = this.audioCtx.currentTime;
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            const freq = 220 + (value / 100) * 660;
            osc.type = type;
            osc.frequency.setValueAtTime(freq, now);

            const duration = Math.min(0.08, Math.max(0.025, this.getDelayMs() / 1200));
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now);
            osc.stop(now + duration);
        } catch (e) { }
    }

    generateNewArray() {
        const size = parseInt(this.sizeSlider.value, 10);
        this.originalArray = Array.from({ length: size }, () => Math.floor(Math.random() * 90) + 10);
        this.resetToOriginal();
    }

    resetToOriginal() {
        this.runToken++;
        this.isPlaying = false;
        this.sizeSlider.disabled = false;
        this.btnGenerate.disabled = false;
        this.btnStep.disabled = false;
        this.updatePlayButtonUI();

        this.array = [...this.originalArray];
        this.stepIndex = 0;

        const builders = {
            bubble: () => this.buildBubbleSortSteps([...this.originalArray]),
            selection: () => this.buildSelectionSortSteps([...this.originalArray]),
            insertion: () => this.buildInsertionSortSteps([...this.originalArray]),
            shell: () => this.buildShellSortSteps([...this.originalArray]),
            merge: () => this.buildMergeSortSteps([...this.originalArray]),
            quick: () => this.buildQuickSortSteps([...this.originalArray]),
            heap: () => this.buildHeapSortSteps([...this.originalArray])
        };

        this.steps = builders[this.currentAlgo]();

        const initialM3 = this.currentAlgo === 'shell' ? Math.floor(this.originalArray.length / 2) : 0;
        this.updateTelemetry(0, 0, initialM3, `Ready (${ALGO_CONFIGS[this.currentAlgo].pseudoTag}). Click Start or Step.`);
        this.highlightCodeLine(null);
        this.renderBars({ array: this.array, sorted: new Set() });
    }

    /**
     * 1. BUBBLE SORT TRACE GENERATOR
     */
    buildBubbleSortSteps(arr) {
        const trace = [];
        const sorted = new Set();
        let comps = 0, swaps = 0;
        const n = arr.length;

        for (let pass = 0; pass < n; pass++) {
            let swapped = false;
            for (let i = 0; i < n - pass - 1; i++) {
                comps++;
                trace.push({
                    array: [...arr],
                    comparing: [i, i + 1],
                    swapping: [],
                    sorted: new Set(sorted),
                    comps, m2: swaps, m3: 0,
                    line: 6,
                    soundVal: arr[i + 1],
                    status: `Comparing A[${i}] (${arr[i]}) and A[${i + 1}] (${arr[i + 1]})`
                });

                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swapped = true;
                    swaps++;
                    trace.push({
                        array: [...arr],
                        comparing: [],
                        swapping: [i, i + 1],
                        sorted: new Set(sorted),
                        comps, m2: swaps, m3: 0,
                        line: 7,
                        soundVal: arr[i],
                        soundType: 'triangle',
                        status: `Swapped ${arr[i]} and ${arr[i + 1]}`
                    });
                }
            }
            sorted.add(n - pass - 1);
            if (!swapped) {
                for (let k = 0; k < n; k++) sorted.add(k);
                break;
            }
        }

        for (let k = 0; k < n; k++) sorted.add(k);
        trace.push({
            array: [...arr],
            sorted: new Set(sorted),
            comps, m2: swaps, m3: 0,
            line: null,
            status: `Bubble Sort completed in ${comps} comparisons and ${swaps} swaps!`
        });
        return trace;
    }

    /**
     * 2. SELECTION SORT TRACE GENERATOR
     */
    buildSelectionSortSteps(arr) {
        const trace = [];
        const sorted = new Set();
        let comps = 0, swaps = 0;
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            trace.push({
                array: [...arr],
                pivot: minIdx,
                sorted: new Set(sorted),
                comps, m2: swaps, m3: 0,
                line: 3,
                status: `Pass ${i + 1}: Initial minimum set to A[${minIdx}] = ${arr[minIdx]}`
            });

            for (let j = i + 1; j < n; j++) {
                comps++;
                trace.push({
                    array: [...arr],
                    pivot: minIdx,
                    comparing: [j],
                    sorted: new Set(sorted),
                    comps, m2: swaps, m3: 0,
                    line: 5,
                    soundVal: arr[j],
                    status: `Scanning A[${j}] (${arr[j]}) against current min A[${minIdx}] (${arr[minIdx]})`
                });

                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                    trace.push({
                        array: [...arr],
                        pivot: minIdx,
                        sorted: new Set(sorted),
                        comps, m2: swaps, m3: 0,
                        line: 6,
                        soundVal: arr[minIdx],
                        status: `New minimum found at index ${minIdx} (${arr[minIdx]})`
                    });
                }
            }

            if (minIdx !== i) {
                [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
                swaps++;
                trace.push({
                    array: [...arr],
                    swapping: [i, minIdx],
                    sorted: new Set(sorted),
                    comps, m2: swaps, m3: 0,
                    line: 8,
                    soundVal: arr[i],
                    soundType: 'triangle',
                    status: `Swapped minimum ${arr[i]} into sorted position ${i}`
                });
            }
            sorted.add(i);
        }

        sorted.add(n - 1);
        trace.push({
            array: [...arr],
            sorted: new Set(sorted),
            comps, m2: swaps, m3: 0,
            line: null,
            status: `Selection Sort completed in ${comps} comparisons and ${swaps} swaps!`
        });
        return trace;
    }

    /**
     * 3. INSERTION SORT TRACE GENERATOR
     */
    buildInsertionSortSteps(arr) {
        const trace = [];
        const sorted = new Set();
        let comps = 0, shifts = 0;
        const n = arr.length;

        for (let i = 1; i < n; i++) {
            const key = arr[i];
            let j = i - 1;

            trace.push({
                array: [...arr],
                range: [0, i - 1],
                pivot: i,
                sorted: new Set(sorted),
                comps, m2: shifts, m3: 0,
                line: 3,
                soundVal: key,
                status: `Selected key A[${i}] = ${key} to insert into sorted prefix [0..${i - 1}]`
            });

            while (j >= 0) {
                comps++;
                trace.push({
                    array: [...arr],
                    range: [0, i],
                    pivot: j + 1,
                    comparing: [j],
                    sorted: new Set(sorted),
                    comps, m2: shifts, m3: 0,
                    line: 4,
                    soundVal: arr[j],
                    status: `Comparing key (${key}) with A[${j}] (${arr[j]})`
                });

                if (arr[j] > key) {
                    arr[j + 1] = arr[j];
                    shifts++;
                    trace.push({
                        array: [...arr],
                        range: [0, i],
                        writing: [j + 1],
                        sorted: new Set(sorted),
                        comps, m2: shifts, m3: 0,
                        line: 5,
                        soundVal: arr[j + 1],
                        soundType: 'triangle',
                        status: `Shifted A[${j}] (${arr[j]}) right to index ${j + 1}`
                    });
                    j--;
                } else {
                    break;
                }
            }

            arr[j + 1] = key;
            trace.push({
                array: [...arr],
                range: [0, i],
                writing: [j + 1],
                sorted: new Set(sorted),
                comps, m2: shifts, m3: 0,
                line: 7,
                soundVal: key,
                soundType: 'triangle',
                status: `Inserted key (${key}) at index ${j + 1}`
            });
        }

        for (let k = 0; k < n; k++) sorted.add(k);
        trace.push({
            array: [...arr],
            sorted: new Set(sorted),
            comps, m2: shifts, m3: 0,
            line: null,
            status: `Insertion Sort completed in ${comps} comparisons and ${shifts} shifts!`
        });
        return trace;
    }

    /**
     * 4. SHELL SORT TRACE GENERATOR
     */
    buildShellSortSteps(arr) {
        const trace = [];
        const sorted = new Set();
        let comps = 0, shifts = 0;
        const n = arr.length;

        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                const temp = arr[i];
                let j = i;

                // Highlight elements belonging to the current gap stride chain
                const gapChain = [];
                for (let g = i % gap; g < n; g += gap) gapChain.push(g);

                trace.push({
                    array: [...arr],
                    leftSub: gapChain,
                    pivot: i,
                    sorted: new Set(sorted),
                    comps, m2: shifts, m3: gap,
                    line: 5,
                    soundVal: temp,
                    status: `Gap = ${gap}: Picked temp A[${i}] = ${temp}`
                });

                while (j >= gap) {
                    comps++;
                    trace.push({
                        array: [...arr],
                        leftSub: gapChain,
                        pivot: j,
                        comparing: [j - gap],
                        sorted: new Set(sorted),
                        comps, m2: shifts, m3: gap,
                        line: 6,
                        soundVal: arr[j - gap],
                        status: `Gap = ${gap}: Comparing A[${j - gap}] (${arr[j - gap]}) with temp (${temp})`
                    });

                    if (arr[j - gap] > temp) {
                        arr[j] = arr[j - gap];
                        shifts++;
                        trace.push({
                            array: [...arr],
                            leftSub: gapChain,
                            writing: [j],
                            sorted: new Set(sorted),
                            comps, m2: shifts, m3: gap,
                            line: 7,
                            soundVal: arr[j],
                            soundType: 'triangle',
                            status: `Gap = ${gap}: Shifted A[${j - gap}] (${arr[j]}) to index ${j}`
                        });
                        j -= gap;
                    } else {
                        break;
                    }
                }

                arr[j] = temp;
                trace.push({
                    array: [...arr],
                    leftSub: gapChain,
                    writing: [j],
                    sorted: new Set(sorted),
                    comps, m2: shifts, m3: gap,
                    line: 8,
                    soundVal: temp,
                    soundType: 'triangle',
                    status: `Gap = ${gap}: Placed temp (${temp}) at index ${j}`
                });
            }
        }

        for (let k = 0; k < n; k++) sorted.add(k);
        trace.push({
            array: [...arr],
            sorted: new Set(sorted),
            comps, m2: shifts, m3: 0,
            line: null,
            status: `Shell Sort completed in ${comps} comparisons and ${shifts} shifts!`
        });
        return trace;
    }

    /**
     * 5. MERGE SORT TRACE GENERATOR
     */
    buildMergeSortSteps(arr) {
        const trace = [];
        const aux = [...arr];
        const sorted = new Set();
        let comps = 0, writes = 0, reads = 0;

        const merge = (l, m, r) => {
            const leftSub = [], rightSub = [];
            for (let x = l; x <= m; x++) leftSub.push(x);
            for (let x = m + 1; x <= r; x++) rightSub.push(x);

            for (let idx = l; idx <= r; idx++) {
                aux[idx] = arr[idx];
                reads++;
            }
            trace.push({
                array: [...arr],
                leftSub, rightSub,
                sorted: new Set(sorted),
                comps, m2: writes, m3: reads,
                line: 8,
                status: `Merging subarrays [${l}..${m}] and [${m + 1}..${r}]`
            });

            let i = l, j = m + 1, k = l;
            while (i <= m && j <= r) {
                comps++;
                reads += 2;
                trace.push({
                    array: [...arr],
                    leftSub, rightSub,
                    comparing: [i, j],
                    sorted: new Set(sorted),
                    comps, m2: writes, m3: reads,
                    line: 10,
                    soundVal: aux[i],
                    status: `Comparing aux[${i}] (${aux[i]}) and aux[${j}] (${aux[j]})`
                });

                if (aux[i] <= aux[j]) {
                    arr[k] = aux[i++];
                } else {
                    arr[k] = aux[j++];
                }
                writes++;
                trace.push({
                    array: [...arr],
                    leftSub, rightSub,
                    writing: [k],
                    sorted: new Set(sorted),
                    comps, m2: writes, m3: reads,
                    line: 10,
                    soundVal: arr[k],
                    soundType: 'triangle',
                    status: `Writing ${arr[k]} into index ${k}`
                });
                if (l === 0 && r === arr.length - 1) sorted.add(k);
                k++;
            }

            while (i <= m) {
                arr[k] = aux[i++];
                writes++;
                trace.push({
                    array: [...arr],
                    leftSub, rightSub,
                    writing: [k],
                    sorted: new Set(sorted),
                    comps, m2: writes, m3: reads,
                    line: 10,
                    soundVal: arr[k],
                    status: `Flushing remaining left value ${arr[k]} to index ${k}`
                });
                if (l === 0 && r === arr.length - 1) sorted.add(k);
                k++;
            }

            while (j <= r) {
                arr[k] = aux[j++];
                writes++;
                trace.push({
                    array: [...arr],
                    leftSub, rightSub,
                    writing: [k],
                    sorted: new Set(sorted),
                    comps, m2: writes, m3: reads,
                    line: 10,
                    soundVal: arr[k],
                    status: `Flushing remaining right value ${arr[k]} to index ${k}`
                });
                if (l === 0 && r === arr.length - 1) sorted.add(k);
                k++;
            }
        };

        const mergeSort = (l, r) => {
            if (l >= r) return;
            const m = Math.floor(l + (r - l) / 2);
            trace.push({
                array: [...arr],
                range: [l, r],
                sorted: new Set(sorted),
                comps, m2: writes, m3: reads,
                line: 3,
                status: `Dividing range [${l}..${r}] at mid = ${m}`
            });
            mergeSort(l, m);
            mergeSort(m + 1, r);
            merge(l, m, r);
        };

        mergeSort(0, arr.length - 1);
        for (let k = 0; k < arr.length; k++) sorted.add(k);
        trace.push({
            array: [...arr],
            sorted: new Set(sorted),
            comps, m2: writes, m3: reads,
            line: null,
            status: `Merge Sort completed in ${comps} comparisons, ${reads} reads, and ${writes} writes!`
        });
        return trace;
    }

    /**
     * 6. QUICK SORT (LOMUTO) TRACE GENERATOR
     */
    buildQuickSortSteps(arr) {
        const trace = [];
        const sorted = new Set();
        let comps = 0, swaps = 0;

        const partition = (low, high) => {
            const pivotVal = arr[high];
            trace.push({
                array: [...arr],
                range: [low, high],
                pivot: high,
                sorted: new Set(sorted),
                comps, m2: swaps, m3: 0,
                line: 8,
                status: `Selected Pivot A[${high}] = ${pivotVal} for range [${low}..${high}]`
            });

            let i = low - 1;
            for (let j = low; j < high; j++) {
                comps++;
                trace.push({
                    array: [...arr],
                    range: [low, high],
                    pivot: high,
                    comparing: [j, high],
                    sorted: new Set(sorted),
                    comps, m2: swaps, m3: 0,
                    line: 11,
                    soundVal: arr[j],
                    status: `Comparing A[${j}] (${arr[j]}) with Pivot (${pivotVal})`
                });

                if (arr[j] <= pivotVal) {
                    i++;
                    if (i !== j) {
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                        swaps++;
                        trace.push({
                            array: [...arr],
                            range: [low, high],
                            pivot: high,
                            swapping: [i, j],
                            sorted: new Set(sorted),
                            comps, m2: swaps, m3: 0,
                            line: 11,
                            soundVal: arr[i],
                            soundType: 'triangle',
                            status: `${arr[i]} ≤ ${pivotVal}: Swapped A[${i}] and A[${j}]`
                        });
                    }
                }
            }

            const pivotFinal = i + 1;
            if (pivotFinal !== high) {
                [arr[pivotFinal], arr[high]] = [arr[high], arr[pivotFinal]];
                swaps++;
            }
            sorted.add(pivotFinal);

            trace.push({
                array: [...arr],
                range: [low, high],
                pivot: pivotFinal,
                sorted: new Set(sorted),
                comps, m2: swaps, m3: 0,
                line: 14,
                soundVal: arr[pivotFinal],
                soundType: 'triangle',
                status: `Locked Pivot (${pivotVal}) at final sorted index ${pivotFinal}`
            });

            return pivotFinal;
        };

        const quickSort = (low, high) => {
            if (low < high) {
                const p = partition(low, high);
                quickSort(low, p - 1);
                quickSort(p + 1, high);
            } else if (low === high && low >= 0 && low < arr.length) {
                sorted.add(low);
            }
        };

        quickSort(0, arr.length - 1);
        for (let k = 0; k < arr.length; k++) sorted.add(k);
        trace.push({
            array: [...arr],
            sorted: new Set(sorted),
            comps, m2: swaps, m3: 0,
            line: null,
            status: `Quick Sort completed in ${comps} comparisons and ${swaps} swaps!`
        });
        return trace;
    }

    /**
     * 7. HEAP SORT TRACE GENERATOR
     */
    buildHeapSortSteps(arr) {
        const trace = [];
        const sorted = new Set();
        let comps = 0, swaps = 0;
        const n = arr.length;

        const heapify = (heapSize, rootIdx) => {
            let largest = rootIdx;
            const left = 2 * rootIdx + 1;
            const right = 2 * rootIdx + 2;

            trace.push({
                array: [...arr],
                range: [0, heapSize - 1],
                pivot: rootIdx,
                sorted: new Set(sorted),
                comps, m2: swaps, m3: 0,
                line: 7,
                status: `Heapifying subtree at parent A[${rootIdx}] = ${arr[rootIdx]} (heap size: ${heapSize})`
            });

            if (left < heapSize) {
                comps++;
                trace.push({
                    array: [...arr],
                    range: [0, heapSize - 1],
                    pivot: rootIdx,
                    comparing: [largest, left],
                    sorted: new Set(sorted),
                    comps, m2: swaps, m3: 0,
                    line: 8,
                    soundVal: arr[left],
                    status: `Comparing parent/largest A[${largest}] (${arr[largest]}) with left child A[${left}] (${arr[left]})`
                });
                if (arr[left] > arr[largest]) {
                    largest = left;
                }
            }

            if (right < heapSize) {
                comps++;
                trace.push({
                    array: [...arr],
                    range: [0, heapSize - 1],
                    pivot: rootIdx,
                    comparing: [largest, right],
                    sorted: new Set(sorted),
                    comps, m2: swaps, m3: 0,
                    line: 8,
                    soundVal: arr[right],
                    status: `Comparing largest A[${largest}] (${arr[largest]}) with right child A[${right}] (${arr[right]})`
                });
                if (arr[right] > arr[largest]) {
                    largest = right;
                }
            }

            if (largest !== rootIdx) {
                [arr[rootIdx], arr[largest]] = [arr[largest], arr[rootIdx]];
                swaps++;
                trace.push({
                    array: [...arr],
                    range: [0, heapSize - 1],
                    swapping: [rootIdx, largest],
                    sorted: new Set(sorted),
                    comps, m2: swaps, m3: 0,
                    line: 10,
                    soundVal: arr[rootIdx],
                    soundType: 'triangle',
                    status: `Swapped parent A[${rootIdx}] and larger child A[${largest}]`
                });
                heapify(heapSize, largest);
            }
        };

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(n, i);
        }

        for (let end = n - 1; end > 0; end--) {
            [arr[0], arr[end]] = [arr[end], arr[0]];
            swaps++;
            sorted.add(end);
            trace.push({
                array: [...arr],
                range: [0, end - 1],
                swapping: [0, end],
                sorted: new Set(sorted),
                comps, m2: swaps, m3: 0,
                line: 5,
                soundVal: arr[end],
                soundType: 'triangle',
                status: `Extracted max root (${arr[end]}) to sorted position ${end}`
            });

            heapify(end, 0);
        }

        sorted.add(0);
        trace.push({
            array: [...arr],
            sorted: new Set(sorted),
            comps, m2: swaps, m3: 0,
            line: null,
            status: `Heap Sort completed in ${comps} comparisons and ${swaps} swaps!`
        });
        return trace;
    }

    /**
     * Playback Loop Controls
     */
    async start() {
        if (this.stepIndex >= this.steps.length) {
            this.resetToOriginal();
        }

        this.isPlaying = true;
        this.sizeSlider.disabled = true;
        this.btnGenerate.disabled = true;
        this.btnStep.disabled = true;
        this.updatePlayButtonUI();

        const token = ++this.runToken;

        while (this.isPlaying && token === this.runToken && this.stepIndex < this.steps.length) {
            this.stepForward();
            if (this.stepIndex >= this.steps.length) break;
            await new Promise(r => setTimeout(r, this.getDelayMs()));
        }

        if (token === this.runToken) {
            this.isPlaying = false;
            this.sizeSlider.disabled = false;
            this.btnGenerate.disabled = false;
            this.btnStep.disabled = false;
            this.updatePlayButtonUI();
        }
    }

    pause() {
        this.isPlaying = false;
        this.runToken++;
        this.sizeSlider.disabled = false;
        this.btnGenerate.disabled = false;
        this.btnStep.disabled = false;
        this.updatePlayButtonUI();
    }

    stepForward() {
        if (this.stepIndex >= this.steps.length) return;

        const step = this.steps[this.stepIndex++];
        this.array = step.array;

        this.updateTelemetry(step.comps, step.m2, step.m3, step.status);
        this.highlightCodeLine(step.line);
        this.renderBars(step);
        this.playTone(step.soundVal, step.soundType || 'sine');

        if (this.stepIndex >= this.steps.length) {
            this.isPlaying = false;
            this.sizeSlider.disabled = false;
            this.btnGenerate.disabled = false;
            this.btnStep.disabled = false;
            this.updatePlayButtonUI();
        }
    }

    updatePlayButtonUI() {
        if (this.isPlaying) {
            this.btnPlay.innerHTML = `<i class="fa-solid fa-pause"></i> <span>Pause</span>`;
            this.btnPlay.className = 'py-2.5 px-6 bg-blazeOrange hover:bg-blazeOrange/90 text-obsidian-900 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm';
        } else {
            const label = (this.stepIndex > 0 && this.stepIndex < this.steps.length) ? 'Resume' : 'Start';
            this.btnPlay.innerHTML = `<i class="fa-solid fa-play"></i> <span>${label}</span>`;
            this.btnPlay.className = 'py-2.5 px-6 bg-gradient-to-r from-electricLime to-emerald-500 hover:opacity-90 text-obsidian-900 font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm';
        }
    }

    updateTelemetry(comps, m2, m3, status) {
        this.compCount.textContent = comps;
        this.metricTwoVal.textContent = m2;
        this.metricThreeVal.textContent = m3;
        this.statusText.textContent = status;
    }

    highlightCodeLine(lineNum) {
        const lines = this.pseudocodeBox.querySelectorAll('.code-line');
        lines.forEach(el => {
            el.classList.remove('bg-electricLime/20', 'text-electricLime', 'border-l-2', 'border-electricLime', 'font-semibold');
            if (lineNum !== null && parseInt(el.dataset.line, 10) === lineNum) {
                el.classList.add('bg-electricLime/20', 'text-electricLime', 'border-l-2', 'border-electricLime', 'font-semibold');
            }
        });
    }

    renderBars(state) {
        const {
            array,
            sorted = new Set(),
            comparing = [],
            swapping = [],
            writing = [],
            leftSub = [],
            rightSub = [],
            pivot = null,
            range = null
        } = state;

        const maxValue = Math.max(...array, 100);
        const showNumbers = array.length <= 25;

        this.barsContainer.innerHTML = '';

        array.forEach((val, idx) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'flex flex-col items-center justify-end h-full flex-1';

            const bar = document.createElement('div');
            bar.className = 'w-full rounded-t-sm bar-transition relative';
            const heightPct = Math.max(10, Math.round((val / maxValue) * 100));
            bar.style.height = `${heightPct}%`;

            // Unified Color Priority System across all 7 algorithms
            if (sorted.has(idx)) {
                bar.style.backgroundColor = this.currentAlgo === 'quick' ? '#a3e635' : '#10b981';
                bar.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.35)';
            } else if (idx === pivot) {
                bar.style.backgroundColor = '#a855f7'; // Pivot / Min / Key / Parent Violet
                bar.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.65)';
            } else if (swapping.includes(idx)) {
                bar.style.backgroundColor = '#a3e635'; // Swap Lime
                bar.style.boxShadow = '0 0 15px rgba(163, 230, 53, 0.6)';
                bar.style.transform = 'scaleY(1.04)';
            } else if (writing.includes(idx)) {
                bar.style.backgroundColor = '#8b5cf6'; // Shift / Write Violet
                bar.style.boxShadow = '0 0 15px rgba(139, 92, 246, 0.6)';
                bar.style.transform = 'scaleY(1.04)';
            } else if (comparing.includes(idx)) {
                bar.style.backgroundColor = '#f97316'; // Compare Blaze Orange
                bar.style.boxShadow = '0 0 15px rgba(249, 115, 22, 0.6)';
            } else if (leftSub.includes(idx)) {
                bar.style.backgroundColor = '#06b6d4'; // Merge Left / Shell Gap Subsequence Cyan
            } else if (rightSub.includes(idx)) {
                bar.style.backgroundColor = '#22c55e'; // Merge Right Green
            } else if (range && idx >= range[0] && idx <= range[1]) {
                bar.style.backgroundColor = this.currentAlgo === 'heap' ? '#38bdf8' : '#60a5fa';
            } else {
                bar.style.backgroundColor = this.currentAlgo === 'quick' ? '#38bdf8' : '#374151';
            }

            if (showNumbers) {
                const label = document.createElement('span');
                label.className = 'absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono text-cloudyGray font-semibold select-none';
                label.textContent = val;
                bar.appendChild(label);
            }

            wrapper.appendChild(bar);
            this.barsContainer.appendChild(wrapper);
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new UnifiedSortingVisualizer();
});
