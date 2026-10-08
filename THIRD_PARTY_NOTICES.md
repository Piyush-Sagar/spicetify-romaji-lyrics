# Third-party notices

The extension bundles the following unmodified library code; its own adapter calls public dictionary-loading and tokenizer methods without modifying those libraries. The complete notices below are also included in the single-file distribution.

| Component | Version | License | Preserved notice |
| --- | --- | --- | --- |
| Kuroshiro | 1.2.1 | MIT | [kuroshiro-LICENSE.txt](licenses/kuroshiro-LICENSE.txt) |
| Kuromoji | 0.1.2 | Apache-2.0 | [kuromoji-LICENSE.txt](licenses/kuromoji-LICENSE.txt) |
| doublearray | 0.0.2 | MIT | [doublearray-LICENSE.txt](licenses/doublearray-LICENSE.txt) |
| fflate | 0.8.3 | MIT | [fflate-LICENSE.txt](licenses/fflate-LICENSE.txt) |
| MeCab IPADIC dictionary | 2.7.0-20070801, distributed with Kuromoji 0.1.2 | NAIST / ICOT terms | [kuromoji-NOTICE.txt](licenses/kuromoji-NOTICE.txt) |

Dictionary data is downloaded from the pinned Kuromoji package on jsDelivr, rather than stored in this repository. Its copyright and warranty notices are retained here and in the extension bundle. Build-only and test-only dependencies are listed in `package-lock.json`; their code is not shipped in the extension.
