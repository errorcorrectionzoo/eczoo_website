pretty_code_graph_data = {
    "elements": {
        "nodes": [
            {
                "data": {
                    "id": "domain_classical_domain",
                    "label": "Classical Domain",
                    "_description": "codes for classical systems",
                    "_is_domain": 1,
                    "_page_href": "/domain/classical_domain"
                },
                "position": {
                    "x": 150,
                    "y": -500
                }
            },
            {
                "data": {
                    "id": "domain_quantum_domain",
                    "label": "Quantum Domain",
                    "_description": "codes for quantum systems",
                    "_is_domain": 1,
                    "_page_href": "/domain/quantum_domain"
                },
                "position": {
                    "x": 450,
                    "y": -500
                }
            },
            {
                "data": {
                    "id": "c_oscillators",
                    "label": "Oscillator code",
                    "_description": "Encodes logical Hilbert space, finite- or infinite-dimensional, into Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^n\\).",
                    "_code_href": "/c/oscillators#ecc_oscillators",
                    "_family_generation_level": 0,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Oscillator Kingdom",
                    "_kingdom_href": "/kingdom/oscillators"
                }
            },
            {
                "data": {
                    "id": "c_qudits_into_oscillators",
                    "label": "Qudit-into-oscillator code",
                    "_description": "Encodes \\(K\\)-dimensional Hilbert space into Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^n\\).",
                    "_code_href": "/c/qudits_into_oscillators#ecc_qudits_into_oscillators",
                    "_family_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_oscillators_into_oscillators",
                    "label": "Oscillator-into-oscillator code",
                    "_description": "Encodes Hilbert space of \\(\\ell^2\\)-normalizable functions on \\(\\mathbb{R}^k\\) into that on \\(\\mathbb{R}^n\\). Usually denoted as \\(((n,k))_{\\mathbb{R}}\\).",
                    "_code_href": "/c/oscillators_into_oscillators#ecc_oscillators_into_oscillators",
                    "_family_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_css",
                    "label": "Calderbank-Shor-Steane (CSS) code",
                    "_description": [
                        "An \\((n,2^k,d)\\) CSS code is usually denoted as \\([[n,k,d]]\\). Encoding is based on two \\hyperref[code:binary_linear]{binary linear codes}, an \\([n,k_1,d_1]\\) code \\(C_1\\) and \\([n,k_2,d_2]\\) code ..."
                    ],
                    "_code_href": "/c/css#ecc_css",
                    "_family_generation_level": 2
                }
            },
            {
                "data": {
                    "id": "c_toric",
                    "label": "Kitaev's toric code",
                    "_description": [
                        "A family of stabilizer codes whose generators are few-body \\(X\\)-type Pauli strings (stars) and few-body \\(Z\\)-type Pauli strings on any surface plaquette operators on an arbitrary lattice on an ar..."
                    ],
                    "_code_href": "/c/toric#ecc_toric",
                    "_family_generation_level": 3
                }
            },
            {
                "data": {
                    "id": "c_stabilizer",
                    "label": "Stabilizer code",
                    "_description": "An \\(n,2^k,d\\) qubit code is usually denoted as \\([[n,k,d]]\\). Logical subspace is the joint \\(+1\\) eigenspace of a set of \\(2^{n-k}\\) commuting Pauli operators forming the code's stabilizer group.",
                    "_code_href": "/c/stabilizer#ecc_stabilizer",
                    "_family_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_quantum_repetition",
                    "label": "Quantum repetition code",
                    "_description": "Encodes \\(1\\) qubit into \\(n\\) qubits according to \\(|0\\rangle\\to|0\\rangle^{\\otimes n}\\) and \\(|1\\rangle\\to|1\\rangle^{\\otimes n}\\).",
                    "_code_href": "/c/quantum_repetition#ecc_quantum_repetition",
                    "_family_generation_level": 3
                }
            },
            {
                "data": {
                    "id": "c_quantum_ldpc",
                    "label": "Quantum low-density parity-check (LDPC) code",
                    "_description": "",
                    "_code_href": "/c/quantum_ldpc#ecc_quantum_ldpc",
                    "_family_generation_level": 2
                }
            },
            {
                "data": {
                    "id": "c_homological",
                    "label": "Homological code",
                    "_description": "Often called a topological code.",
                    "_code_href": "/c/homological#ecc_homological",
                    "_family_generation_level": 3
                }
            },
            {
                "data": {
                    "id": "c_qubits_into_qubits",
                    "label": "Qubit code",
                    "_description": [
                        "Encodes \\(K\\)-dimensional Hilbert space into a \\(2^n\\)-dimensional (\\(n\\)-qubit) Hilbert space; has distance \\(d\\). Usually denoted as \\(((n,K,d))\\), or \\([[n,k,d]]\\) when \\(K=2^k\\). The distance i..."
                    ],
                    "_code_href": "/c/qubits_into_qubits#ecc_qubits_into_qubits",
                    "_family_generation_level": 0,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Qubit Kingdom",
                    "_kingdom_href": "/kingdom/qubits_into_qubits"
                }
            },
            {
                "data": {
                    "id": "c_groups",
                    "label": "Group code",
                    "_description": [
                        "Encodes a logical Hilbert space, finite- or infinite-dimensional, into the Hilbert space of \\(\\ell^2\\)-normalizable functions on a second-countable unimodular group. For \\(K\\)-dimensional logical s..."
                    ],
                    "_code_href": "/c/groups#ecc_groups",
                    "_family_generation_level": 0,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Group Kingdom",
                    "_kingdom_href": "/kingdom/groups"
                }
            },
            {
                "data": {
                    "id": "c_group_gkp",
                    "label": "Group GKP codes",
                    "_description": [
                        "Group code whose construction is based on nested subgroups \\(H\\subset K \\subset G\\). Logical subspace is spanned by basis states that are equal superpositions of elements of cosets of \\(H\\) in \\(K\\..."
                    ],
                    "_code_href": "/c/group_gkp#ecc_group_gkp",
                    "_family_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_molecular",
                    "label": "Molecular codes",
                    "_description": [
                        "Encodes finite-dimensional Hilbert space into the Hilbert space of \\(\\ell^2\\)-normalizable functions on the group \\(SO_3\\). Construction is based on nested subgroups \\(H\\subset K \\subset SO_3\\), wh..."
                    ],
                    "_code_href": "/c/molecular#ecc_molecular",
                    "_family_generation_level": 2
                }
            },
            {
                "data": {
                    "id": "c_qudits_into_qudits",
                    "label": "Qudit code",
                    "_description": [
                        "Encodes \\(K\\)-dimensional Hilbert space into a \\(q^n\\)-dimensional (\\(n\\)-qudit) Hilbert space for some \\(q\\); has distance \\(d\\). Usually denoted as \\(((n,K,d))_q\\), or \\([[n,k,d]]_q\\) when \\(K=q^..."
                    ],
                    "_code_href": "/c/qudits_into_qudits#ecc_qudits_into_qudits",
                    "_family_generation_level": 0,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Qu\\emph{d}it Kingdom",
                    "_kingdom_href": "/kingdom/qudits_into_qudits"
                }
            },
            {
                "data": {
                    "id": "c_binary_linear",
                    "label": "Binary linear code",
                    "_description": [
                        "An \\((n,2^k,d)\\) linear code is denoted as \\([n,k,d]\\). Its codewords form a linear subspace, i.e., for any codewords \\(x,y\\), \\(x+y\\) is also a codeword. Often defined in terms of a generator matr..."
                    ],
                    "_code_href": "/c/binary_linear#ecc_binary_linear",
                    "_family_generation_level": 1
                }
            },
            {
                "data": {
                    "id": "c_bits_into_bits",
                    "label": "Binary code",
                    "_description": "Encodes \\(K\\) states (codewords) in \\(n\\) binary coordinates and has distance \\(d\\). Usually denoted as \\((n,K,d)\\). The distance is the minimum Hamming distance between a pair of distinct codewords.",
                    "_code_href": "/c/bits_into_bits#ecc_bits_into_bits",
                    "_family_generation_level": 0,
                    "_is_kingdom": 1,
                    "_kingdom_name": "Binary Kingdom",
                    "_kingdom_href": "/kingdom/bits_into_bits"
                }
            },
            {
                "data": {
                    "id": "c_reed_solomon",
                    "label": "Reed-Solomon code",
                    "_description": [
                        "\\([n,k,n-k+1]_q\\) linear code. Let \\(\\{\\alpha_1,\\cdots,\\alpha_n\\}\\) be \\(n\\) distinct nonzero elements of \\(GF(q)\\) for prime \\(q>n\\). Encodes \\(\\mu=\\{\\mu_0,\\cdots,\\mu_{k-1}\\}\\) into \\(\\{f_\\mu(\\alp..."
                    ],
                    "_code_href": "/c/reed_solomon#ecc_reed_solomon",
                    "_family_generation_level": 2
                }
            },
            {
                "data": {
                    "id": "c_q-ary_digits_into_q-ary_digits",
                    "label": "q-ary code",
                    "_description": [
                        "Encodes \\(K\\) states (codewords) in \\(n\\) \\(q\\)-ary coordinates and has distance \\(d\\). Usually denoted as \\((n,K,d)_q\\). The distance is the minimum Hamming distance between a pair of distinct cod..."
                    ],
                    "_code_href": "/c/q-ary_digits_into_q-ary_digits#ecc_q-ary_digits_into_q-ary_digits",
                    "_family_generation_level": 0,
                    "_is_kingdom": 1,
                    "_kingdom_name": "\\(q\\)-ary Digits Kingdom",
                    "_kingdom_href": "/kingdom/q-ary_digits_into_q-ary_digits"
                }
            },
            {
                "data": {
                    "id": "c_q-ary_linear",
                    "label": "\\(q\\)-ary linear code",
                    "_description": [
                        "An \\((n,2^k,d)_q\\) linear code is denoted as \\([n,k,d]_q\\). Its codewords form a linear subspace, i.e., for any codewords \\(x,y\\), \\(\\alpha x+ \\beta y\\) is also a codeword for any \\(q\\)-ary digits ..."
                    ],
                    "_code_href": "/c/q-ary_linear#ecc_q-ary_linear",
                    "_family_generation_level": 1
                }
            }
        ],
        "edges": [
            {
                "data": {
                    "id": "kingdomtodomain_oscillators_quantum_domain_0",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_oscillators",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_qudits_into_oscillators_oscillators_0",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_qudits_into_oscillators",
                    "target": "c_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_oscillators_into_oscillators_oscillators_1",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_oscillators_into_oscillators",
                    "target": "c_oscillators"
                }
            },
            {
                "data": {
                    "id": "parent_css_stabilizer_2",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_css",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "cousin_css_binary_linear__0",
                    "label": "cousin",
                    "_rel_type": "cousin",
                    "source": "c_css",
                    "target": "c_binary_linear"
                }
            },
            {
                "data": {
                    "id": "parent_toric_css_3",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_toric",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "parent_toric_homological_4",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_toric",
                    "target": "c_homological"
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
                    "id": "parent_quantum_repetition_css_6",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_quantum_repetition",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "parent_quantum_ldpc_stabilizer_7",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_quantum_ldpc",
                    "target": "c_stabilizer"
                }
            },
            {
                "data": {
                    "id": "parent_homological_css_8",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_homological",
                    "target": "c_css"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_qubits_into_qubits_quantum_domain_1",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_qubits_into_qubits",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_groups_quantum_domain_2",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_groups",
                    "target": "domain_quantum_domain"
                }
            },
            {
                "data": {
                    "id": "parent_group_gkp_groups_9",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_group_gkp",
                    "target": "c_groups"
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
                    "id": "kingdomtodomain_qudits_into_qudits_quantum_domain_3",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_qudits_into_qudits",
                    "target": "domain_quantum_domain"
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
                    "id": "kingdomtodomain_bits_into_bits_classical_domain_4",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_bits_into_bits",
                    "target": "domain_classical_domain"
                }
            },
            {
                "data": {
                    "id": "parent_reed_solomon_q-ary_linear_12",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_reed_solomon",
                    "target": "c_q-ary_linear"
                }
            },
            {
                "data": {
                    "id": "kingdomtodomain_q-ary_digits_into_q-ary_digits_classical_domain_5",
                    "label": "domain",
                    "_rel_type": "domain",
                    "source": "c_q-ary_digits_into_q-ary_digits",
                    "target": "domain_classical_domain"
                }
            },
            {
                "data": {
                    "id": "parent_q-ary_linear_q-ary_digits_into_q-ary_digits_13",
                    "label": "parent",
                    "_rel_type": "parent",
                    "source": "c_q-ary_linear",
                    "target": "c_q-ary_digits_into_q-ary_digits"
                }
            }
        ]
    },
    "fixed_node_constraint": [
        {
            "nodeId": "domain_classical_domain",
            "position": {
                "x": 150,
                "y": -500
            }
        },
        {
            "nodeId": "domain_quantum_domain",
            "position": {
                "x": 450,
                "y": -500
            }
        }
    ],
    "alignment_constraint": {},
    "relative_placement_constraint": [
        {
            "top": "domain_classical_domain",
            "bottom": "c_oscillators",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qudits_into_oscillators",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_oscillators_into_oscillators",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_css",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_toric",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_stabilizer",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_repetition",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_quantum_ldpc",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_homological",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qubits_into_qubits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_groups",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_group_gkp",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_molecular",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_qudits_into_qudits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_binary_linear",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_bits_into_bits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_reed_solomon",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_q-ary_digits_into_q-ary_digits",
            "gap": 100
        },
        {
            "top": "domain_classical_domain",
            "bottom": "c_q-ary_linear",
            "gap": 100
        }
    ]
};