pretty_code_graph_data = {
    "elements": {
        "nodes": [
            {
                "data": {
                    "id": "c_qudits_into_oscillators",
                    "label": "Qudit-into-oscillator code",
                    "_description": "Encodes \\(K\\)-dimensional Hilbert space into Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^n\\).",
                    "_code_href": "/code_qudits_into_oscillators#ecc_qudits_into_oscillators",
                    "_generation_level": 0
                }
            },
            {
                "data": {
                    "id": "c_oscillators_into_oscillators",
                    "label": "Oscillator code",
                    "_description": "Encodes Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^k\\) into that on \\(\\mathbb{R}^n\\). Usually denoted as \\(((n,k))_{\\mathbb{R}}\\).",
                    "_code_href": "/code_oscillators_into_oscillators#ecc_oscillators_into_oscillators",
                    "_generation_level": 0
                }
            },
            {
                "data": {
                    "id": "c_CSS",
                    "label": "Calderbank-Shor-Steane (CSS) code",
                    "_description": [
                        "An \\((n,2^k,d)\\) CSS code is usually denoted as \\([[n,k,d]]\\). Encoding is based on two binary linear codes, an \\([n,k_1,d_1]\\) code \\(C_1\\) and \\([n,k_2,d_2]\\) code \\(C_2\\) with \\(C_1^\\perp \\subse..."
                    ],
                    "_code_href": "/code_CSS#ecc_CSS",
                    "_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_toric",
                    "label": "Kitaev's toric code",
                    "_description": [
                        "A family of stabilizer codes whose generators are few-body \\(X\\)-type Pauli strings (stars) and few-body \\(Z\\)-type Pauli strings on any surface plaquette operators on an arbitrary lattice on an ar..."
                    ],
                    "_code_href": "/code_toric#ecc_toric",
                    "_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_stabilizer",
                    "label": "Stabilizer code",
                    "_description": "An \\(n,2^k,d\\) stabilizer is usually denoted as \\([[n,k,d]]\\). Logical subspace is the joint \\(+1\\) eigenspace of a set of commuting Pauli operators forming the code's stabilizer group.",
                    "_code_href": "/code_stabilizer#ecc_stabilizer",
                    "_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_quantum_repetition",
                    "label": "Quantum repetition code",
                    "_description": "Encodes \\(1\\) qubit into \\(n\\) qubits according to \\(|0\\rangle\\to|0\\rangle^{\\otimes n}\\) and \\(|1\\rangle\\to|1\\rangle^{\\otimes n}\\).",
                    "_code_href": "/code_quantum_repetition#ecc_quantum_repetition",
                    "_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_quantum_LDPC",
                    "label": "Quantum low-density parity-check (LDPC) code",
                    "_description": "",
                    "_code_href": "/code_quantum_LDPC#ecc_quantum_LDPC",
                    "_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_qubits_into_qubits",
                    "label": "Qubit code",
                    "_description": [
                        "Encodes \\(K\\)-dimensional Hilbert space into a \\(2^n\\)-dimensional (\\(n\\)-qubit) Hilbert space; has distance \\(d\\). Usually denoted as \\(((n,K,d))\\), or \\([[n,k,d]]\\) when \\(K=2^k\\). The distance i..."
                    ],
                    "_code_href": "/code_qubits_into_qubits#ecc_qubits_into_qubits",
                    "_generation_level": 0
                }
            },
            {
                "data": {
                    "id": "c_group_gkp",
                    "label": "Group GKP codes",
                    "_description": [
                        "Encodes finite-dimensional Hilbert space into the Hilbert space of \\(\\ell^2\\)-normalizable functions on a group \\(G\\). Construction is based on nested subgroups \\(H\\subset K \\subset G\\), where \\(H,..."
                    ],
                    "_code_href": "/code_group_gkp#ecc_group_gkp",
                    "_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_groups_into_groups",
                    "label": "Group code",
                    "_description": [
                        "Encodes Hilbert space of \\(\\ell^2\\)-normalizable functions on a group \\(G_1\\) into that on a second-countable unimodular group \\(G_2\\). For finite \\(G_1\\) and \\(G_2=G^{\\times n}\\), can be denoted a..."
                    ],
                    "_code_href": "/code_groups_into_groups#ecc_groups_into_groups",
                    "_generation_level": 0
                }
            },
            {
                "data": {
                    "id": "c_molecular",
                    "label": "Molecular codes",
                    "_description": [
                        "Encodes finite-dimensional Hilbert space into the Hilbert space of \\(\\ell^2\\)-normalizable functions on the group \\(SO_3\\). Construction is based on nested subgroups \\(H\\subset K \\subset SO_3\\), wh..."
                    ],
                    "_code_href": "/code_molecular#ecc_molecular",
                    "_generation_level": null
                }
            },
            {
                "data": {
                    "id": "c_qudits_into_qudits",
                    "label": "Qudit code",
                    "_description": [
                        "Encodes \\(K\\)-dimensional Hilbert space into a \\(q^n\\)-dimensional (\\(n\\)-qudit) Hilbert space for some \\(q\\); has distance \\(d\\). Usually denoted as \\(((n,K,d))_q\\), or \\([[n,k,d]]_q\\) when \\(K=q^..."
                    ],
                    "_code_href": "/code_qudits_into_qudits#ecc_qudits_into_qudits",
                    "_generation_level": 0
                }
            },
            {
                "data": {
                    "id": "c_binary_linear",
                    "label": "Binary linear code",
                    "_description": [
                        "An \\((n,2^k,d)\\) linear code is denoted as \\([n,k,d]\\). Its codewords form a linear subspace, i.e., for any codewords \\(x,y\\), \\(x+y\\) is also a codeword. Often defined in terms of a generator matr..."
                    ],
                    "_code_href": "/code_binary_linear#ecc_binary_linear",
                    "_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_bits_into_bits",
                    "label": "Binary code",
                    "_description": [
                        "Encodes \\(K\\) bitstrings (codewords) into bitstrings of length \\(n\\) and has distance \\(d\\). Usually denoted as \\((n,K,d)\\), or \\([n,k,d]\\) when \\(K=2^k\\). The distance is the number of nonzero ent..."
                    ],
                    "_code_href": "/code_bits_into_bits#ecc_bits_into_bits",
                    "_generation_level": 0
                }
            },
            {
                "data": {
                    "id": "c_reed_solomon",
                    "label": "Reed-Solomon code",
                    "_description": [
                        "\\([n,k,n-k+1]_q\\) linear code. Let \\(\\{\\alpha_1,\\cdots,\\alpha_n\\}\\) be \\(n\\) distinct nonzero elements of \\(GF(q)\\) for prime \\(q>n\\). Encodes \\(\\mu=\\{\\mu_0,\\cdots,\\mu_{k-1}\\}\\) into \\(\\{f_\\mu(\\alp..."
                    ],
                    "_code_href": "/code_reed_solomon#ecc_reed_solomon",
                    "_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_q-ary_digits_into_q-ary_digits",
                    "label": "q-ary code",
                    "_description": [
                        "Encodes \\(K\\) \\(q\\)-ary strings (codewords) into \\(q\\)-ary strings of length \\(n\\) and has distance \\(d\\). Usually denoted as \\((n,K,d)_q\\), or \\([n,k,d]_q\\) when \\(K=q^k\\). The distance is the num..."
                    ],
                    "_code_href": "/code_q-ary_digits_into_q-ary_digits#ecc_q-ary_digits_into_q-ary_digits",
                    "_generation_level": 0
                }
            }
        ],
        "edges": [
            {
                "data": {
                    "id": "parent_CSS_qubits_into_qubits_0",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_CSS",
                    "target": "c_qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "parent_CSS_stabilizer_1",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_CSS",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_CSS_stabilizer_0",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_CSS",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "parent_toric_qubits_into_qubits_2",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_toric",
                    "target": "c_qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "parent_toric_CSS_3",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_toric",
                    "target": "c_CSS"
                }
            },
            {
                "data": {
                    "id": "parent_toric_stabilizer_4",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_toric",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "parent_stabilizer_qubits_into_qubits_5",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_stabilizer",
                    "target": "c_qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_repetition_qubits_into_qubits_6",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_quantum_repetition",
                    "target": "c_qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_repetition_stabilizer_7",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_quantum_repetition",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_quantum_repetition_stabilizer_1",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_quantum_repetition",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_LDPC_qubits_into_qubits_8",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_quantum_LDPC",
                    "target": "c_qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "parent_group_gkp_groups_into_groups_9",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_group_gkp",
                    "target": "c_groups_into_groups"
                }
            },
            {
                "data": {
                    "id": "parent_molecular_group_gkp_10",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_molecular",
                    "target": "c_group_gkp"
                }
            },
            {
                "data": {
                    "id": "parent_binary_linear_bits_into_bits_11",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_binary_linear",
                    "target": "c_bits_into_bits"
                }
            },
            {
                "data": {
                    "id": "parent_reed_solomon_q-ary_digits_into_q-ary_digits_12",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_reed_solomon",
                    "target": "c_q-ary_digits_into_q-ary_digits"
                }
            }
        ]
    },
    "fixed_node_constraint": [],
    "alignment_constraint": {}
};