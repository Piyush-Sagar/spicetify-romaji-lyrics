// Romaji Lyrics v1.0.1 | MIT | https://github.com/Piyush-Sagar/spicetify-romaji-lyrics
// Bundled third-party code: see THIRD_PARTY_NOTICES.md and licenses/.
/*!
--- doublearray-LICENSE.txt ---
The MIT License (MIT)

Copyright (c) 2014 Takuya Asano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--- fflate-LICENSE.txt ---
MIT License

Copyright (c) 2026 Arjun Barrett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--- kuromoji-LICENSE.txt ---

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--- kuromoji-NOTICE.txt ---
Library dependencies
====================

This software includes a binary and/or source version of data from

* mecab-ipadic-2.7.0-20070801

which can be obtained from

http://atilika.com/releases/mecab-ipadic/mecab-ipadic-2.7.0-20070801.tar.gz

or

http://jaist.dl.sourceforge.net/project/mecab/mecab-ipadic/2.7.0-20070801/mecab-ipadic-2.7.0-20070801.tar.gz



Copyright and license
=====================


mecab-ipadic-2.7.0-20070801
---------------------------

Copyright 2000, 2001, 2002, 2003 Nara Institute of Science
and Technology.  All Rights Reserved.

Use, reproduction, and distribution of this software is permitted.
Any copy of this software, whether in its original form or modified,
must include both the above copyright notice and the following
paragraphs.

Nara Institute of Science and Technology (NAIST),
the copyright holders, disclaims all warranties with regard to this
software, including all implied warranties of merchantability and
fitness, in no event shall NAIST be liable for
any special, indirect or consequential damages or any damages
whatsoever resulting from loss of use, data or profits, whether in an
action of contract, negligence or other tortuous action, arising out
of or in connection with the use or performance of this software.

A large portion of the dictionary entries
originate from ICOT Free Software.  The following conditions for ICOT
Free Software applies to the current dictionary as well.

Each User may also freely distribute the Program, whether in its
original form or modified, to any third party or parties, PROVIDED
that the provisions of Section 3 ("NO WARRANTY") will ALWAYS appear
on, or be attached to, the Program, which is distributed substantially
in the same form as set out herein and that such intended
distribution, if actually made, will neither violate or otherwise
contravene any of the laws and regulations of the countries having
jurisdiction over the User or the intended distribution itself.

NO WARRANTY

The program was produced on an experimental basis in the course of the
research and development conducted during the project and is provided
to users as so produced on an experimental basis.  Accordingly, the
program is provided without any warranty whatsoever, whether express,
implied, statutory or otherwise.  The term "warranty" used herein
includes, but is not limited to, any warranty of the quality,
performance, merchantability and fitness for a particular purpose of
the program and the nonexistence of any infringement or violation of
any right of any third party.

Each user of the program will agree and understand, and be deemed to
have agreed and understood, that there is no warranty whatsoever for
the program and, accordingly, the entire risk arising from or
otherwise connected with the program is assumed by the user.

Therefore, neither ICOT, the copyright holder, or any other
organization that participated in or was otherwise related to the
development of the program and their respective officials, directors,
officers and other employees shall be held liable for any and all
damages, including, without limitation, general, special, incidental
and consequential damages, arising out of or otherwise in connection
with the use or inability to use the program or any product, material
or result produced or otherwise obtained by using the program,
regardless of whether they have been advised of, or otherwise had
knowledge of, the possibility of such damages at any time during the
project or thereafter.  Each user will be deemed to have agreed to the
foregoing by his or her commencement of use of the program.  The term
"use" as used herein includes, but is not limited to, the use,
modification, copying and distribution of the program and the
production of secondary products from the program.

In the case where the program, whether in its original form or
modified, was distributed or delivered to or received by a user from
any person, organization or entity other than ICOT, unless it makes or
grants independently of ICOT any specific warranty to the user in
writing, such person, organization or entity, will also be exempted
from and not be held liable to the user for any such damages as noted
above as far as the program is concerned.
˜˜


--- kuroshiro-LICENSE.txt ---
The MIT License (MIT)

Copyright (c) 2015-2026 Hexen Qi <hexenq@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/kuromoji/src/viterbi/ViterbiNode.js
  var require_ViterbiNode = __commonJS({
    "node_modules/kuromoji/src/viterbi/ViterbiNode.js"(exports, module) {
      "use strict";
      function ViterbiNode(node_name, node_cost, start_pos, length, type, left_id, right_id, surface_form) {
        this.name = node_name;
        this.cost = node_cost;
        this.start_pos = start_pos;
        this.length = length;
        this.left_id = left_id;
        this.right_id = right_id;
        this.prev = null;
        this.surface_form = surface_form;
        if (type === "BOS") {
          this.shortest_cost = 0;
        } else {
          this.shortest_cost = Number.MAX_VALUE;
        }
        this.type = type;
      }
      module.exports = ViterbiNode;
    }
  });

  // node_modules/kuromoji/src/viterbi/ViterbiLattice.js
  var require_ViterbiLattice = __commonJS({
    "node_modules/kuromoji/src/viterbi/ViterbiLattice.js"(exports, module) {
      "use strict";
      var ViterbiNode = require_ViterbiNode();
      function ViterbiLattice() {
        this.nodes_end_at = [];
        this.nodes_end_at[0] = [new ViterbiNode(-1, 0, 0, 0, "BOS", 0, 0, "")];
        this.eos_pos = 1;
      }
      ViterbiLattice.prototype.append = function(node) {
        var last_pos = node.start_pos + node.length - 1;
        if (this.eos_pos < last_pos) {
          this.eos_pos = last_pos;
        }
        var prev_nodes = this.nodes_end_at[last_pos];
        if (prev_nodes == null) {
          prev_nodes = [];
        }
        prev_nodes.push(node);
        this.nodes_end_at[last_pos] = prev_nodes;
      };
      ViterbiLattice.prototype.appendEos = function() {
        var last_index = this.nodes_end_at.length;
        this.eos_pos++;
        this.nodes_end_at[last_index] = [new ViterbiNode(-1, 0, this.eos_pos, 0, "EOS", 0, 0, "")];
      };
      module.exports = ViterbiLattice;
    }
  });

  // node_modules/kuromoji/src/util/SurrogateAwareString.js
  var require_SurrogateAwareString = __commonJS({
    "node_modules/kuromoji/src/util/SurrogateAwareString.js"(exports, module) {
      "use strict";
      function SurrogateAwareString(str) {
        this.str = str;
        this.index_mapping = [];
        for (var pos = 0; pos < str.length; pos++) {
          var ch = str.charAt(pos);
          this.index_mapping.push(pos);
          if (SurrogateAwareString.isSurrogatePair(ch)) {
            pos++;
          }
        }
        this.length = this.index_mapping.length;
      }
      SurrogateAwareString.prototype.slice = function(index) {
        if (this.index_mapping.length <= index) {
          return "";
        }
        var surrogate_aware_index = this.index_mapping[index];
        return this.str.slice(surrogate_aware_index);
      };
      SurrogateAwareString.prototype.charAt = function(index) {
        if (this.str.length <= index) {
          return "";
        }
        var surrogate_aware_start_index = this.index_mapping[index];
        var surrogate_aware_end_index = this.index_mapping[index + 1];
        if (surrogate_aware_end_index == null) {
          return this.str.slice(surrogate_aware_start_index);
        }
        return this.str.slice(surrogate_aware_start_index, surrogate_aware_end_index);
      };
      SurrogateAwareString.prototype.charCodeAt = function(index) {
        if (this.index_mapping.length <= index) {
          return NaN;
        }
        var surrogate_aware_index = this.index_mapping[index];
        var upper = this.str.charCodeAt(surrogate_aware_index);
        var lower;
        if (upper >= 55296 && upper <= 56319 && surrogate_aware_index < this.str.length) {
          lower = this.str.charCodeAt(surrogate_aware_index + 1);
          if (lower >= 56320 && lower <= 57343) {
            return (upper - 55296) * 1024 + lower - 56320 + 65536;
          }
        }
        return upper;
      };
      SurrogateAwareString.prototype.toString = function() {
        return this.str;
      };
      SurrogateAwareString.isSurrogatePair = function(ch) {
        var utf16_code = ch.charCodeAt(0);
        if (utf16_code >= 55296 && utf16_code <= 56319) {
          return true;
        } else {
          return false;
        }
      };
      module.exports = SurrogateAwareString;
    }
  });

  // node_modules/kuromoji/src/viterbi/ViterbiBuilder.js
  var require_ViterbiBuilder = __commonJS({
    "node_modules/kuromoji/src/viterbi/ViterbiBuilder.js"(exports, module) {
      "use strict";
      var ViterbiNode = require_ViterbiNode();
      var ViterbiLattice = require_ViterbiLattice();
      var SurrogateAwareString = require_SurrogateAwareString();
      function ViterbiBuilder(dic) {
        this.trie = dic.trie;
        this.token_info_dictionary = dic.token_info_dictionary;
        this.unknown_dictionary = dic.unknown_dictionary;
      }
      ViterbiBuilder.prototype.build = function(sentence_str) {
        var lattice = new ViterbiLattice();
        var sentence = new SurrogateAwareString(sentence_str);
        var key, trie_id, left_id, right_id, word_cost;
        for (var pos = 0; pos < sentence.length; pos++) {
          var tail = sentence.slice(pos);
          var vocabulary = this.trie.commonPrefixSearch(tail);
          for (var n = 0; n < vocabulary.length; n++) {
            trie_id = vocabulary[n].v;
            key = vocabulary[n].k;
            var token_info_ids = this.token_info_dictionary.target_map[trie_id];
            for (var i2 = 0; i2 < token_info_ids.length; i2++) {
              var token_info_id = parseInt(token_info_ids[i2]);
              left_id = this.token_info_dictionary.dictionary.getShort(token_info_id);
              right_id = this.token_info_dictionary.dictionary.getShort(token_info_id + 2);
              word_cost = this.token_info_dictionary.dictionary.getShort(token_info_id + 4);
              lattice.append(new ViterbiNode(token_info_id, word_cost, pos + 1, key.length, "KNOWN", left_id, right_id, key));
            }
          }
          var surrogate_aware_tail = new SurrogateAwareString(tail);
          var head_char = new SurrogateAwareString(surrogate_aware_tail.charAt(0));
          var head_char_class = this.unknown_dictionary.lookup(head_char.toString());
          if (vocabulary == null || vocabulary.length === 0 || head_char_class.is_always_invoke === 1) {
            key = head_char;
            if (head_char_class.is_grouping === 1 && 1 < surrogate_aware_tail.length) {
              for (var k = 1; k < surrogate_aware_tail.length; k++) {
                var next_char = surrogate_aware_tail.charAt(k);
                var next_char_class = this.unknown_dictionary.lookup(next_char);
                if (head_char_class.class_name !== next_char_class.class_name) {
                  break;
                }
                key += next_char;
              }
            }
            var unk_ids = this.unknown_dictionary.target_map[head_char_class.class_id];
            for (var j = 0; j < unk_ids.length; j++) {
              var unk_id = parseInt(unk_ids[j]);
              left_id = this.unknown_dictionary.dictionary.getShort(unk_id);
              right_id = this.unknown_dictionary.dictionary.getShort(unk_id + 2);
              word_cost = this.unknown_dictionary.dictionary.getShort(unk_id + 4);
              lattice.append(new ViterbiNode(unk_id, word_cost, pos + 1, key.length, "UNKNOWN", left_id, right_id, key.toString()));
            }
          }
        }
        lattice.appendEos();
        return lattice;
      };
      module.exports = ViterbiBuilder;
    }
  });

  // node_modules/kuromoji/src/viterbi/ViterbiSearcher.js
  var require_ViterbiSearcher = __commonJS({
    "node_modules/kuromoji/src/viterbi/ViterbiSearcher.js"(exports, module) {
      "use strict";
      function ViterbiSearcher(connection_costs) {
        this.connection_costs = connection_costs;
      }
      ViterbiSearcher.prototype.search = function(lattice) {
        lattice = this.forward(lattice);
        return this.backward(lattice);
      };
      ViterbiSearcher.prototype.forward = function(lattice) {
        var i2, j, k;
        for (i2 = 1; i2 <= lattice.eos_pos; i2++) {
          var nodes = lattice.nodes_end_at[i2];
          if (nodes == null) {
            continue;
          }
          for (j = 0; j < nodes.length; j++) {
            var node = nodes[j];
            var cost = Number.MAX_VALUE;
            var shortest_prev_node;
            var prev_nodes = lattice.nodes_end_at[node.start_pos - 1];
            if (prev_nodes == null) {
              continue;
            }
            for (k = 0; k < prev_nodes.length; k++) {
              var prev_node = prev_nodes[k];
              var edge_cost;
              if (node.left_id == null || prev_node.right_id == null) {
                console.log("Left or right is null");
                edge_cost = 0;
              } else {
                edge_cost = this.connection_costs.get(prev_node.right_id, node.left_id);
              }
              var _cost = prev_node.shortest_cost + edge_cost + node.cost;
              if (_cost < cost) {
                shortest_prev_node = prev_node;
                cost = _cost;
              }
            }
            node.prev = shortest_prev_node;
            node.shortest_cost = cost;
          }
        }
        return lattice;
      };
      ViterbiSearcher.prototype.backward = function(lattice) {
        var shortest_path = [];
        var eos = lattice.nodes_end_at[lattice.nodes_end_at.length - 1][0];
        var node_back = eos.prev;
        if (node_back == null) {
          return [];
        }
        while (node_back.type !== "BOS") {
          shortest_path.push(node_back);
          if (node_back.prev == null) {
            return [];
          }
          node_back = node_back.prev;
        }
        return shortest_path.reverse();
      };
      module.exports = ViterbiSearcher;
    }
  });

  // node_modules/kuromoji/src/util/IpadicFormatter.js
  var require_IpadicFormatter = __commonJS({
    "node_modules/kuromoji/src/util/IpadicFormatter.js"(exports, module) {
      "use strict";
      function IpadicFormatter() {
      }
      IpadicFormatter.prototype.formatEntry = function(word_id, position, type, features) {
        var token = {};
        token.word_id = word_id;
        token.word_type = type;
        token.word_position = position;
        token.surface_form = features[0];
        token.pos = features[1];
        token.pos_detail_1 = features[2];
        token.pos_detail_2 = features[3];
        token.pos_detail_3 = features[4];
        token.conjugated_type = features[5];
        token.conjugated_form = features[6];
        token.basic_form = features[7];
        token.reading = features[8];
        token.pronunciation = features[9];
        return token;
      };
      IpadicFormatter.prototype.formatUnknownEntry = function(word_id, position, type, features, surface_form) {
        var token = {};
        token.word_id = word_id;
        token.word_type = type;
        token.word_position = position;
        token.surface_form = surface_form;
        token.pos = features[1];
        token.pos_detail_1 = features[2];
        token.pos_detail_2 = features[3];
        token.pos_detail_3 = features[4];
        token.conjugated_type = features[5];
        token.conjugated_form = features[6];
        token.basic_form = features[7];
        return token;
      };
      module.exports = IpadicFormatter;
    }
  });

  // node_modules/kuromoji/src/Tokenizer.js
  var require_Tokenizer = __commonJS({
    "node_modules/kuromoji/src/Tokenizer.js"(exports, module) {
      "use strict";
      var ViterbiBuilder = require_ViterbiBuilder();
      var ViterbiSearcher = require_ViterbiSearcher();
      var IpadicFormatter = require_IpadicFormatter();
      var PUNCTUATION = /、|。/;
      function Tokenizer2(dic) {
        this.token_info_dictionary = dic.token_info_dictionary;
        this.unknown_dictionary = dic.unknown_dictionary;
        this.viterbi_builder = new ViterbiBuilder(dic);
        this.viterbi_searcher = new ViterbiSearcher(dic.connection_costs);
        this.formatter = new IpadicFormatter();
      }
      Tokenizer2.splitByPunctuation = function(input) {
        var sentences = [];
        var tail = input;
        while (true) {
          if (tail === "") {
            break;
          }
          var index = tail.search(PUNCTUATION);
          if (index < 0) {
            sentences.push(tail);
            break;
          }
          sentences.push(tail.substring(0, index + 1));
          tail = tail.substring(index + 1);
        }
        return sentences;
      };
      Tokenizer2.prototype.tokenize = function(text) {
        var sentences = Tokenizer2.splitByPunctuation(text);
        var tokens = [];
        for (var i2 = 0; i2 < sentences.length; i2++) {
          var sentence = sentences[i2];
          this.tokenizeForSentence(sentence, tokens);
        }
        return tokens;
      };
      Tokenizer2.prototype.tokenizeForSentence = function(sentence, tokens) {
        if (tokens == null) {
          tokens = [];
        }
        var lattice = this.getLattice(sentence);
        var best_path = this.viterbi_searcher.search(lattice);
        var last_pos = 0;
        if (tokens.length > 0) {
          last_pos = tokens[tokens.length - 1].word_position;
        }
        for (var j = 0; j < best_path.length; j++) {
          var node = best_path[j];
          var token, features, features_line;
          if (node.type === "KNOWN") {
            features_line = this.token_info_dictionary.getFeatures(node.name);
            if (features_line == null) {
              features = [];
            } else {
              features = features_line.split(",");
            }
            token = this.formatter.formatEntry(node.name, last_pos + node.start_pos, node.type, features);
          } else if (node.type === "UNKNOWN") {
            features_line = this.unknown_dictionary.getFeatures(node.name);
            if (features_line == null) {
              features = [];
            } else {
              features = features_line.split(",");
            }
            token = this.formatter.formatUnknownEntry(node.name, last_pos + node.start_pos, node.type, features, node.surface_form);
          } else {
            token = this.formatter.formatEntry(node.name, last_pos + node.start_pos, node.type, []);
          }
          tokens.push(token);
        }
        return tokens;
      };
      Tokenizer2.prototype.getLattice = function(text) {
        return this.viterbi_builder.build(text);
      };
      module.exports = Tokenizer2;
    }
  });

  // node_modules/doublearray/doublearray.js
  var require_doublearray = __commonJS({
    "node_modules/doublearray/doublearray.js"(exports, module) {
      (function() {
        "use strict";
        var TERM_CHAR = "\0", TERM_CODE = 0, ROOT_ID = 0, NOT_FOUND = -1, BASE_SIGNED = true, CHECK_SIGNED = true, BASE_BYTES = 4, CHECK_BYTES = 4, MEMORY_EXPAND_RATIO = 2;
        var newBC = function(initial_size) {
          if (initial_size == null) {
            initial_size = 1024;
          }
          var initBase = function(_base, start, end) {
            for (var i2 = start; i2 < end; i2++) {
              _base[i2] = -i2 + 1;
            }
            if (0 < check.array[check.array.length - 1]) {
              var last_used_id = check.array.length - 2;
              while (0 < check.array[last_used_id]) {
                last_used_id--;
              }
              _base[start] = -last_used_id;
            }
          };
          var initCheck = function(_check, start, end) {
            for (var i2 = start; i2 < end; i2++) {
              _check[i2] = -i2 - 1;
            }
          };
          var realloc = function(min_size) {
            var new_size = min_size * MEMORY_EXPAND_RATIO;
            var base_new_array = newArrayBuffer(base.signed, base.bytes, new_size);
            initBase(base_new_array, base.array.length, new_size);
            base_new_array.set(base.array);
            base.array = null;
            base.array = base_new_array;
            var check_new_array = newArrayBuffer(check.signed, check.bytes, new_size);
            initCheck(check_new_array, check.array.length, new_size);
            check_new_array.set(check.array);
            check.array = null;
            check.array = check_new_array;
          };
          var first_unused_node = ROOT_ID + 1;
          var base = {
            signed: BASE_SIGNED,
            bytes: BASE_BYTES,
            array: newArrayBuffer(BASE_SIGNED, BASE_BYTES, initial_size)
          };
          var check = {
            signed: CHECK_SIGNED,
            bytes: CHECK_BYTES,
            array: newArrayBuffer(CHECK_SIGNED, CHECK_BYTES, initial_size)
          };
          base.array[ROOT_ID] = 1;
          check.array[ROOT_ID] = ROOT_ID;
          initBase(base.array, ROOT_ID + 1, base.array.length);
          initCheck(check.array, ROOT_ID + 1, check.array.length);
          return {
            getBaseBuffer: function() {
              return base.array;
            },
            getCheckBuffer: function() {
              return check.array;
            },
            loadBaseBuffer: function(base_buffer) {
              base.array = base_buffer;
              return this;
            },
            loadCheckBuffer: function(check_buffer) {
              check.array = check_buffer;
              return this;
            },
            size: function() {
              return Math.max(base.array.length, check.array.length);
            },
            getBase: function(index) {
              if (base.array.length - 1 < index) {
                return -index + 1;
              }
              return base.array[index];
            },
            getCheck: function(index) {
              if (check.array.length - 1 < index) {
                return -index - 1;
              }
              return check.array[index];
            },
            setBase: function(index, base_value) {
              if (base.array.length - 1 < index) {
                realloc(index);
              }
              base.array[index] = base_value;
            },
            setCheck: function(index, check_value) {
              if (check.array.length - 1 < index) {
                realloc(index);
              }
              check.array[index] = check_value;
            },
            setFirstUnusedNode: function(index) {
              first_unused_node = index;
            },
            getFirstUnusedNode: function() {
              return first_unused_node;
            },
            shrink: function() {
              var last_index = this.size() - 1;
              while (true) {
                if (0 <= check.array[last_index]) {
                  break;
                }
                last_index--;
              }
              base.array = base.array.subarray(0, last_index + 2);
              check.array = check.array.subarray(0, last_index + 2);
            },
            calc: function() {
              var unused_count = 0;
              var size = check.array.length;
              for (var i2 = 0; i2 < size; i2++) {
                if (check.array[i2] < 0) {
                  unused_count++;
                }
              }
              return {
                all: size,
                unused: unused_count,
                efficiency: (size - unused_count) / size
              };
            },
            dump: function() {
              var dump_base = "";
              var dump_check = "";
              var i2;
              for (i2 = 0; i2 < base.array.length; i2++) {
                dump_base = dump_base + " " + this.getBase(i2);
              }
              for (i2 = 0; i2 < check.array.length; i2++) {
                dump_check = dump_check + " " + this.getCheck(i2);
              }
              console.log("base:" + dump_base);
              console.log("chck:" + dump_check);
              return "base:" + dump_base + " chck:" + dump_check;
            }
          };
        };
        function DoubleArrayBuilder(initial_size) {
          this.bc = newBC(initial_size);
          this.keys = [];
        }
        DoubleArrayBuilder.prototype.append = function(key, record) {
          this.keys.push({ k: key, v: record });
          return this;
        };
        DoubleArrayBuilder.prototype.build = function(keys, sorted) {
          if (keys == null) {
            keys = this.keys;
          }
          if (keys == null) {
            return new DoubleArray(this.bc);
          }
          if (sorted == null) {
            sorted = false;
          }
          var buff_keys = keys.map(function(k) {
            return {
              k: stringToUtf8Bytes(k.k + TERM_CHAR),
              v: k.v
            };
          });
          if (sorted) {
            this.keys = buff_keys;
          } else {
            this.keys = buff_keys.sort(function(k1, k2) {
              var b1 = k1.k;
              var b2 = k2.k;
              var min_length = Math.min(b1.length, b2.length);
              for (var pos = 0; pos < min_length; pos++) {
                if (b1[pos] === b2[pos]) {
                  continue;
                }
                return b1[pos] - b2[pos];
              }
              return b1.length - b2.length;
            });
          }
          buff_keys = null;
          this._build(ROOT_ID, 0, 0, this.keys.length);
          return new DoubleArray(this.bc);
        };
        DoubleArrayBuilder.prototype._build = function(parent_index, position, start, length) {
          var children_info = this.getChildrenInfo(position, start, length);
          var _base = this.findAllocatableBase(children_info);
          this.setBC(parent_index, children_info, _base);
          for (var i2 = 0; i2 < children_info.length; i2 = i2 + 3) {
            var child_code = children_info[i2];
            if (child_code === TERM_CODE) {
              continue;
            }
            var child_start = children_info[i2 + 1];
            var child_len = children_info[i2 + 2];
            var child_index = _base + child_code;
            this._build(child_index, position + 1, child_start, child_len);
          }
        };
        DoubleArrayBuilder.prototype.getChildrenInfo = function(position, start, length) {
          var current_char = this.keys[start].k[position];
          var i2 = 0;
          var children_info = new Int32Array(length * 3);
          children_info[i2++] = current_char;
          children_info[i2++] = start;
          var next_pos = start;
          var start_pos = start;
          for (; next_pos < start + length; next_pos++) {
            var next_char = this.keys[next_pos].k[position];
            if (current_char !== next_char) {
              children_info[i2++] = next_pos - start_pos;
              children_info[i2++] = next_char;
              children_info[i2++] = next_pos;
              current_char = next_char;
              start_pos = next_pos;
            }
          }
          children_info[i2++] = next_pos - start_pos;
          children_info = children_info.subarray(0, i2);
          return children_info;
        };
        DoubleArrayBuilder.prototype.setBC = function(parent_id, children_info, _base) {
          var bc = this.bc;
          bc.setBase(parent_id, _base);
          var i2;
          for (i2 = 0; i2 < children_info.length; i2 = i2 + 3) {
            var code = children_info[i2];
            var child_id = _base + code;
            var prev_unused_id = -bc.getBase(child_id);
            var next_unused_id = -bc.getCheck(child_id);
            if (child_id !== bc.getFirstUnusedNode()) {
              bc.setCheck(prev_unused_id, -next_unused_id);
            } else {
              bc.setFirstUnusedNode(next_unused_id);
            }
            bc.setBase(next_unused_id, -prev_unused_id);
            var check = parent_id;
            bc.setCheck(child_id, check);
            if (code === TERM_CODE) {
              var start_pos = children_info[i2 + 1];
              var value = this.keys[start_pos].v;
              if (value == null) {
                value = 0;
              }
              var base = -value - 1;
              bc.setBase(child_id, base);
            }
          }
        };
        DoubleArrayBuilder.prototype.findAllocatableBase = function(children_info) {
          var bc = this.bc;
          var _base;
          var curr = bc.getFirstUnusedNode();
          while (true) {
            _base = curr - children_info[0];
            if (_base < 0) {
              curr = -bc.getCheck(curr);
              continue;
            }
            var empty_area_found = true;
            for (var i2 = 0; i2 < children_info.length; i2 = i2 + 3) {
              var code = children_info[i2];
              var candidate_id = _base + code;
              if (!this.isUnusedNode(candidate_id)) {
                curr = -bc.getCheck(curr);
                empty_area_found = false;
                break;
              }
            }
            if (empty_area_found) {
              return _base;
            }
          }
        };
        DoubleArrayBuilder.prototype.isUnusedNode = function(index) {
          var bc = this.bc;
          var check = bc.getCheck(index);
          if (index === ROOT_ID) {
            return false;
          }
          if (check < 0) {
            return true;
          }
          return false;
        };
        function DoubleArray(bc) {
          this.bc = bc;
          this.bc.shrink();
        }
        DoubleArray.prototype.contain = function(key) {
          var bc = this.bc;
          key += TERM_CHAR;
          var buffer = stringToUtf8Bytes(key);
          var parent = ROOT_ID;
          var child = NOT_FOUND;
          for (var i2 = 0; i2 < buffer.length; i2++) {
            var code = buffer[i2];
            child = this.traverse(parent, code);
            if (child === NOT_FOUND) {
              return false;
            }
            if (bc.getBase(child) <= 0) {
              return true;
            } else {
              parent = child;
              continue;
            }
          }
          return false;
        };
        DoubleArray.prototype.lookup = function(key) {
          key += TERM_CHAR;
          var buffer = stringToUtf8Bytes(key);
          var parent = ROOT_ID;
          var child = NOT_FOUND;
          for (var i2 = 0; i2 < buffer.length; i2++) {
            var code = buffer[i2];
            child = this.traverse(parent, code);
            if (child === NOT_FOUND) {
              return NOT_FOUND;
            }
            parent = child;
          }
          var base = this.bc.getBase(child);
          if (base <= 0) {
            return -base - 1;
          } else {
            return NOT_FOUND;
          }
        };
        DoubleArray.prototype.commonPrefixSearch = function(key) {
          var buffer = stringToUtf8Bytes(key);
          var parent = ROOT_ID;
          var child = NOT_FOUND;
          var result = [];
          for (var i2 = 0; i2 < buffer.length; i2++) {
            var code = buffer[i2];
            child = this.traverse(parent, code);
            if (child !== NOT_FOUND) {
              parent = child;
              var grand_child = this.traverse(child, TERM_CODE);
              if (grand_child !== NOT_FOUND) {
                var base = this.bc.getBase(grand_child);
                var r = {};
                if (base <= 0) {
                  r.v = -base - 1;
                }
                r.k = utf8BytesToString(arrayCopy(buffer, 0, i2 + 1));
                result.push(r);
              }
              continue;
            } else {
              break;
            }
          }
          return result;
        };
        DoubleArray.prototype.traverse = function(parent, code) {
          var child = this.bc.getBase(parent) + code;
          if (this.bc.getCheck(child) === parent) {
            return child;
          } else {
            return NOT_FOUND;
          }
        };
        DoubleArray.prototype.size = function() {
          return this.bc.size();
        };
        DoubleArray.prototype.calc = function() {
          return this.bc.calc();
        };
        DoubleArray.prototype.dump = function() {
          return this.bc.dump();
        };
        var newArrayBuffer = function(signed, bytes, size) {
          if (signed) {
            switch (bytes) {
              case 1:
                return new Int8Array(size);
              case 2:
                return new Int16Array(size);
              case 4:
                return new Int32Array(size);
              default:
                throw new RangeError("Invalid newArray parameter element_bytes:" + bytes);
            }
          } else {
            switch (bytes) {
              case 1:
                return new Uint8Array(size);
              case 2:
                return new Uint16Array(size);
              case 4:
                return new Uint32Array(size);
              default:
                throw new RangeError("Invalid newArray parameter element_bytes:" + bytes);
            }
          }
        };
        var arrayCopy = function(src, src_offset, length) {
          var buffer = new ArrayBuffer(length);
          var dstU8 = new Uint8Array(buffer, 0, length);
          var srcU8 = src.subarray(src_offset, length);
          dstU8.set(srcU8);
          return dstU8;
        };
        var stringToUtf8Bytes = function(str) {
          var bytes = new Uint8Array(new ArrayBuffer(str.length * 4));
          var i2 = 0, j = 0;
          while (i2 < str.length) {
            var unicode_code;
            var utf16_code = str.charCodeAt(i2++);
            if (utf16_code >= 55296 && utf16_code <= 56319) {
              var upper = utf16_code;
              var lower = str.charCodeAt(i2++);
              if (lower >= 56320 && lower <= 57343) {
                unicode_code = (upper - 55296) * (1 << 10) + (1 << 16) + (lower - 56320);
              } else {
                return null;
              }
            } else {
              unicode_code = utf16_code;
            }
            if (unicode_code < 128) {
              bytes[j++] = unicode_code;
            } else if (unicode_code < 1 << 11) {
              bytes[j++] = unicode_code >>> 6 | 192;
              bytes[j++] = unicode_code & 63 | 128;
            } else if (unicode_code < 1 << 16) {
              bytes[j++] = unicode_code >>> 12 | 224;
              bytes[j++] = unicode_code >> 6 & 63 | 128;
              bytes[j++] = unicode_code & 63 | 128;
            } else if (unicode_code < 1 << 21) {
              bytes[j++] = unicode_code >>> 18 | 240;
              bytes[j++] = unicode_code >> 12 & 63 | 128;
              bytes[j++] = unicode_code >> 6 & 63 | 128;
              bytes[j++] = unicode_code & 63 | 128;
            } else {
            }
          }
          return bytes.subarray(0, j);
        };
        var utf8BytesToString = function(bytes) {
          var str = "";
          var code, b1, b2, b3, b4, upper, lower;
          var i2 = 0;
          while (i2 < bytes.length) {
            b1 = bytes[i2++];
            if (b1 < 128) {
              code = b1;
            } else if (b1 >> 5 === 6) {
              b2 = bytes[i2++];
              code = (b1 & 31) << 6 | b2 & 63;
            } else if (b1 >> 4 === 14) {
              b2 = bytes[i2++];
              b3 = bytes[i2++];
              code = (b1 & 15) << 12 | (b2 & 63) << 6 | b3 & 63;
            } else {
              b2 = bytes[i2++];
              b3 = bytes[i2++];
              b4 = bytes[i2++];
              code = (b1 & 7) << 18 | (b2 & 63) << 12 | (b3 & 63) << 6 | b4 & 63;
            }
            if (code < 65536) {
              str += String.fromCharCode(code);
            } else {
              code -= 65536;
              upper = 55296 | code >> 10;
              lower = 56320 | code & 1023;
              str += String.fromCharCode(upper, lower);
            }
          }
          return str;
        };
        var doublearray = {
          builder: function(initial_size) {
            return new DoubleArrayBuilder(initial_size);
          },
          load: function(base_buffer, check_buffer) {
            var bc = newBC(0);
            bc.loadBaseBuffer(base_buffer);
            bc.loadCheckBuffer(check_buffer);
            return new DoubleArray(bc);
          }
        };
        if ("undefined" === typeof module) {
          window.doublearray = doublearray;
        } else {
          module.exports = doublearray;
        }
      })();
    }
  });

  // node_modules/kuromoji/src/util/ByteBuffer.js
  var require_ByteBuffer = __commonJS({
    "node_modules/kuromoji/src/util/ByteBuffer.js"(exports, module) {
      "use strict";
      var stringToUtf8Bytes = function(str) {
        var bytes = new Uint8Array(str.length * 4);
        var i2 = 0, j = 0;
        while (i2 < str.length) {
          var unicode_code;
          var utf16_code = str.charCodeAt(i2++);
          if (utf16_code >= 55296 && utf16_code <= 56319) {
            var upper = utf16_code;
            var lower = str.charCodeAt(i2++);
            if (lower >= 56320 && lower <= 57343) {
              unicode_code = (upper - 55296) * (1 << 10) + (1 << 16) + (lower - 56320);
            } else {
              return null;
            }
          } else {
            unicode_code = utf16_code;
          }
          if (unicode_code < 128) {
            bytes[j++] = unicode_code;
          } else if (unicode_code < 1 << 11) {
            bytes[j++] = unicode_code >>> 6 | 192;
            bytes[j++] = unicode_code & 63 | 128;
          } else if (unicode_code < 1 << 16) {
            bytes[j++] = unicode_code >>> 12 | 224;
            bytes[j++] = unicode_code >> 6 & 63 | 128;
            bytes[j++] = unicode_code & 63 | 128;
          } else if (unicode_code < 1 << 21) {
            bytes[j++] = unicode_code >>> 18 | 240;
            bytes[j++] = unicode_code >> 12 & 63 | 128;
            bytes[j++] = unicode_code >> 6 & 63 | 128;
            bytes[j++] = unicode_code & 63 | 128;
          } else {
          }
        }
        return bytes.subarray(0, j);
      };
      var utf8BytesToString = function(bytes) {
        var str = "";
        var code, b1, b2, b3, b4, upper, lower;
        var i2 = 0;
        while (i2 < bytes.length) {
          b1 = bytes[i2++];
          if (b1 < 128) {
            code = b1;
          } else if (b1 >> 5 === 6) {
            b2 = bytes[i2++];
            code = (b1 & 31) << 6 | b2 & 63;
          } else if (b1 >> 4 === 14) {
            b2 = bytes[i2++];
            b3 = bytes[i2++];
            code = (b1 & 15) << 12 | (b2 & 63) << 6 | b3 & 63;
          } else {
            b2 = bytes[i2++];
            b3 = bytes[i2++];
            b4 = bytes[i2++];
            code = (b1 & 7) << 18 | (b2 & 63) << 12 | (b3 & 63) << 6 | b4 & 63;
          }
          if (code < 65536) {
            str += String.fromCharCode(code);
          } else {
            code -= 65536;
            upper = 55296 | code >> 10;
            lower = 56320 | code & 1023;
            str += String.fromCharCode(upper, lower);
          }
        }
        return str;
      };
      function ByteBuffer(arg) {
        var initial_size;
        if (arg == null) {
          initial_size = 1024 * 1024;
        } else if (typeof arg === "number") {
          initial_size = arg;
        } else if (arg instanceof Uint8Array) {
          this.buffer = arg;
          this.position = 0;
          return;
        } else {
          throw typeof arg + " is invalid parameter type for ByteBuffer constructor";
        }
        this.buffer = new Uint8Array(initial_size);
        this.position = 0;
      }
      ByteBuffer.prototype.size = function() {
        return this.buffer.length;
      };
      ByteBuffer.prototype.reallocate = function() {
        var new_array = new Uint8Array(this.buffer.length * 2);
        new_array.set(this.buffer);
        this.buffer = new_array;
      };
      ByteBuffer.prototype.shrink = function() {
        this.buffer = this.buffer.subarray(0, this.position);
        return this.buffer;
      };
      ByteBuffer.prototype.put = function(b) {
        if (this.buffer.length < this.position + 1) {
          this.reallocate();
        }
        this.buffer[this.position++] = b;
      };
      ByteBuffer.prototype.get = function(index) {
        if (index == null) {
          index = this.position;
          this.position += 1;
        }
        if (this.buffer.length < index + 1) {
          return 0;
        }
        return this.buffer[index];
      };
      ByteBuffer.prototype.putShort = function(num) {
        if (65535 < num) {
          throw num + " is over short value";
        }
        var lower = 255 & num;
        var upper = (65280 & num) >> 8;
        this.put(lower);
        this.put(upper);
      };
      ByteBuffer.prototype.getShort = function(index) {
        if (index == null) {
          index = this.position;
          this.position += 2;
        }
        if (this.buffer.length < index + 2) {
          return 0;
        }
        var lower = this.buffer[index];
        var upper = this.buffer[index + 1];
        var value = (upper << 8) + lower;
        if (value & 32768) {
          value = -(value - 1 ^ 65535);
        }
        return value;
      };
      ByteBuffer.prototype.putInt = function(num) {
        if (4294967295 < num) {
          throw num + " is over integer value";
        }
        var b0 = 255 & num;
        var b1 = (65280 & num) >> 8;
        var b2 = (16711680 & num) >> 16;
        var b3 = (4278190080 & num) >> 24;
        this.put(b0);
        this.put(b1);
        this.put(b2);
        this.put(b3);
      };
      ByteBuffer.prototype.getInt = function(index) {
        if (index == null) {
          index = this.position;
          this.position += 4;
        }
        if (this.buffer.length < index + 4) {
          return 0;
        }
        var b0 = this.buffer[index];
        var b1 = this.buffer[index + 1];
        var b2 = this.buffer[index + 2];
        var b3 = this.buffer[index + 3];
        return (b3 << 24) + (b2 << 16) + (b1 << 8) + b0;
      };
      ByteBuffer.prototype.readInt = function() {
        var pos = this.position;
        this.position += 4;
        return this.getInt(pos);
      };
      ByteBuffer.prototype.putString = function(str) {
        var bytes = stringToUtf8Bytes(str);
        for (var i2 = 0; i2 < bytes.length; i2++) {
          this.put(bytes[i2]);
        }
        this.put(0);
      };
      ByteBuffer.prototype.getString = function(index) {
        var buf = [], ch;
        if (index == null) {
          index = this.position;
        }
        while (true) {
          if (this.buffer.length < index + 1) {
            break;
          }
          ch = this.get(index++);
          if (ch === 0) {
            break;
          } else {
            buf.push(ch);
          }
        }
        this.position = index;
        return utf8BytesToString(buf);
      };
      module.exports = ByteBuffer;
    }
  });

  // node_modules/kuromoji/src/dict/TokenInfoDictionary.js
  var require_TokenInfoDictionary = __commonJS({
    "node_modules/kuromoji/src/dict/TokenInfoDictionary.js"(exports, module) {
      "use strict";
      var ByteBuffer = require_ByteBuffer();
      function TokenInfoDictionary() {
        this.dictionary = new ByteBuffer(10 * 1024 * 1024);
        this.target_map = {};
        this.pos_buffer = new ByteBuffer(10 * 1024 * 1024);
      }
      TokenInfoDictionary.prototype.buildDictionary = function(entries) {
        var dictionary_entries = {};
        for (var i2 = 0; i2 < entries.length; i2++) {
          var entry = entries[i2];
          if (entry.length < 4) {
            continue;
          }
          var surface_form = entry[0];
          var left_id = entry[1];
          var right_id = entry[2];
          var word_cost = entry[3];
          var feature = entry.slice(4).join(",");
          if (!isFinite(left_id) || !isFinite(right_id) || !isFinite(word_cost)) {
            console.log(entry);
          }
          var token_info_id = this.put(left_id, right_id, word_cost, surface_form, feature);
          dictionary_entries[token_info_id] = surface_form;
        }
        this.dictionary.shrink();
        this.pos_buffer.shrink();
        return dictionary_entries;
      };
      TokenInfoDictionary.prototype.put = function(left_id, right_id, word_cost, surface_form, feature) {
        var token_info_id = this.dictionary.position;
        var pos_id = this.pos_buffer.position;
        this.dictionary.putShort(left_id);
        this.dictionary.putShort(right_id);
        this.dictionary.putShort(word_cost);
        this.dictionary.putInt(pos_id);
        this.pos_buffer.putString(surface_form + "," + feature);
        return token_info_id;
      };
      TokenInfoDictionary.prototype.addMapping = function(source, target) {
        var mapping = this.target_map[source];
        if (mapping == null) {
          mapping = [];
        }
        mapping.push(target);
        this.target_map[source] = mapping;
      };
      TokenInfoDictionary.prototype.targetMapToBuffer = function() {
        var buffer = new ByteBuffer();
        var map_keys_size = Object.keys(this.target_map).length;
        buffer.putInt(map_keys_size);
        for (var key in this.target_map) {
          var values = this.target_map[key];
          var map_values_size = values.length;
          buffer.putInt(parseInt(key));
          buffer.putInt(map_values_size);
          for (var i2 = 0; i2 < values.length; i2++) {
            buffer.putInt(values[i2]);
          }
        }
        return buffer.shrink();
      };
      TokenInfoDictionary.prototype.loadDictionary = function(array_buffer) {
        this.dictionary = new ByteBuffer(array_buffer);
        return this;
      };
      TokenInfoDictionary.prototype.loadPosVector = function(array_buffer) {
        this.pos_buffer = new ByteBuffer(array_buffer);
        return this;
      };
      TokenInfoDictionary.prototype.loadTargetMap = function(array_buffer) {
        var buffer = new ByteBuffer(array_buffer);
        buffer.position = 0;
        this.target_map = {};
        buffer.readInt();
        while (true) {
          if (buffer.buffer.length < buffer.position + 1) {
            break;
          }
          var key = buffer.readInt();
          var map_values_size = buffer.readInt();
          for (var i2 = 0; i2 < map_values_size; i2++) {
            var value = buffer.readInt();
            this.addMapping(key, value);
          }
        }
        return this;
      };
      TokenInfoDictionary.prototype.getFeatures = function(token_info_id_str) {
        var token_info_id = parseInt(token_info_id_str);
        if (isNaN(token_info_id)) {
          return "";
        }
        var pos_id = this.dictionary.getInt(token_info_id + 6);
        return this.pos_buffer.getString(pos_id);
      };
      module.exports = TokenInfoDictionary;
    }
  });

  // node_modules/kuromoji/src/dict/ConnectionCosts.js
  var require_ConnectionCosts = __commonJS({
    "node_modules/kuromoji/src/dict/ConnectionCosts.js"(exports, module) {
      "use strict";
      function ConnectionCosts(forward_dimension, backward_dimension) {
        this.forward_dimension = forward_dimension;
        this.backward_dimension = backward_dimension;
        this.buffer = new Int16Array(forward_dimension * backward_dimension + 2);
        this.buffer[0] = forward_dimension;
        this.buffer[1] = backward_dimension;
      }
      ConnectionCosts.prototype.put = function(forward_id, backward_id, cost) {
        var index = forward_id * this.backward_dimension + backward_id + 2;
        if (this.buffer.length < index + 1) {
          throw "ConnectionCosts buffer overflow";
        }
        this.buffer[index] = cost;
      };
      ConnectionCosts.prototype.get = function(forward_id, backward_id) {
        var index = forward_id * this.backward_dimension + backward_id + 2;
        if (this.buffer.length < index + 1) {
          throw "ConnectionCosts buffer overflow";
        }
        return this.buffer[index];
      };
      ConnectionCosts.prototype.loadConnectionCosts = function(connection_costs_buffer) {
        this.forward_dimension = connection_costs_buffer[0];
        this.backward_dimension = connection_costs_buffer[1];
        this.buffer = connection_costs_buffer;
      };
      module.exports = ConnectionCosts;
    }
  });

  // node_modules/kuromoji/src/dict/CharacterClass.js
  var require_CharacterClass = __commonJS({
    "node_modules/kuromoji/src/dict/CharacterClass.js"(exports, module) {
      "use strict";
      function CharacterClass(class_id, class_name, is_always_invoke, is_grouping, max_length) {
        this.class_id = class_id;
        this.class_name = class_name;
        this.is_always_invoke = is_always_invoke;
        this.is_grouping = is_grouping;
        this.max_length = max_length;
      }
      module.exports = CharacterClass;
    }
  });

  // node_modules/kuromoji/src/dict/InvokeDefinitionMap.js
  var require_InvokeDefinitionMap = __commonJS({
    "node_modules/kuromoji/src/dict/InvokeDefinitionMap.js"(exports, module) {
      "use strict";
      var ByteBuffer = require_ByteBuffer();
      var CharacterClass = require_CharacterClass();
      function InvokeDefinitionMap() {
        this.map = [];
        this.lookup_table = {};
      }
      InvokeDefinitionMap.load = function(invoke_def_buffer) {
        var invoke_def = new InvokeDefinitionMap();
        var character_category_definition = [];
        var buffer = new ByteBuffer(invoke_def_buffer);
        while (buffer.position + 1 < buffer.size()) {
          var class_id = character_category_definition.length;
          var is_always_invoke = buffer.get();
          var is_grouping = buffer.get();
          var max_length = buffer.getInt();
          var class_name = buffer.getString();
          character_category_definition.push(new CharacterClass(class_id, class_name, is_always_invoke, is_grouping, max_length));
        }
        invoke_def.init(character_category_definition);
        return invoke_def;
      };
      InvokeDefinitionMap.prototype.init = function(character_category_definition) {
        if (character_category_definition == null) {
          return;
        }
        for (var i2 = 0; i2 < character_category_definition.length; i2++) {
          var character_class = character_category_definition[i2];
          this.map[i2] = character_class;
          this.lookup_table[character_class.class_name] = i2;
        }
      };
      InvokeDefinitionMap.prototype.getCharacterClass = function(class_id) {
        return this.map[class_id];
      };
      InvokeDefinitionMap.prototype.lookup = function(class_name) {
        var class_id = this.lookup_table[class_name];
        if (class_id == null) {
          return null;
        }
        return class_id;
      };
      InvokeDefinitionMap.prototype.toBuffer = function() {
        var buffer = new ByteBuffer();
        for (var i2 = 0; i2 < this.map.length; i2++) {
          var char_class = this.map[i2];
          buffer.put(char_class.is_always_invoke);
          buffer.put(char_class.is_grouping);
          buffer.putInt(char_class.max_length);
          buffer.putString(char_class.class_name);
        }
        buffer.shrink();
        return buffer.buffer;
      };
      module.exports = InvokeDefinitionMap;
    }
  });

  // node_modules/kuromoji/src/dict/CharacterDefinition.js
  var require_CharacterDefinition = __commonJS({
    "node_modules/kuromoji/src/dict/CharacterDefinition.js"(exports, module) {
      "use strict";
      var InvokeDefinitionMap = require_InvokeDefinitionMap();
      var CharacterClass = require_CharacterClass();
      var SurrogateAwareString = require_SurrogateAwareString();
      var DEFAULT_CATEGORY = "DEFAULT";
      function CharacterDefinition() {
        this.character_category_map = new Uint8Array(65536);
        this.compatible_category_map = new Uint32Array(65536);
        this.invoke_definition_map = null;
      }
      CharacterDefinition.load = function(cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer) {
        var char_def = new CharacterDefinition();
        char_def.character_category_map = cat_map_buffer;
        char_def.compatible_category_map = compat_cat_map_buffer;
        char_def.invoke_definition_map = InvokeDefinitionMap.load(invoke_def_buffer);
        return char_def;
      };
      CharacterDefinition.parseCharCategory = function(class_id, parsed_category_def) {
        var category = parsed_category_def[1];
        var invoke = parseInt(parsed_category_def[2]);
        var grouping = parseInt(parsed_category_def[3]);
        var max_length = parseInt(parsed_category_def[4]);
        if (!isFinite(invoke) || invoke !== 0 && invoke !== 1) {
          console.log("char.def parse error. INVOKE is 0 or 1 in:" + invoke);
          return null;
        }
        if (!isFinite(grouping) || grouping !== 0 && grouping !== 1) {
          console.log("char.def parse error. GROUP is 0 or 1 in:" + grouping);
          return null;
        }
        if (!isFinite(max_length) || max_length < 0) {
          console.log("char.def parse error. LENGTH is 1 to n:" + max_length);
          return null;
        }
        var is_invoke = invoke === 1;
        var is_grouping = grouping === 1;
        return new CharacterClass(class_id, category, is_invoke, is_grouping, max_length);
      };
      CharacterDefinition.parseCategoryMapping = function(parsed_category_mapping) {
        var start = parseInt(parsed_category_mapping[1]);
        var default_category = parsed_category_mapping[2];
        var compatible_category = 3 < parsed_category_mapping.length ? parsed_category_mapping.slice(3) : [];
        if (!isFinite(start) || start < 0 || start > 65535) {
          console.log("char.def parse error. CODE is invalid:" + start);
        }
        return { start, default: default_category, compatible: compatible_category };
      };
      CharacterDefinition.parseRangeCategoryMapping = function(parsed_category_mapping) {
        var start = parseInt(parsed_category_mapping[1]);
        var end = parseInt(parsed_category_mapping[2]);
        var default_category = parsed_category_mapping[3];
        var compatible_category = 4 < parsed_category_mapping.length ? parsed_category_mapping.slice(4) : [];
        if (!isFinite(start) || start < 0 || start > 65535) {
          console.log("char.def parse error. CODE is invalid:" + start);
        }
        if (!isFinite(end) || end < 0 || end > 65535) {
          console.log("char.def parse error. CODE is invalid:" + end);
        }
        return { start, end, default: default_category, compatible: compatible_category };
      };
      CharacterDefinition.prototype.initCategoryMappings = function(category_mapping) {
        var code_point;
        if (category_mapping != null) {
          for (var i2 = 0; i2 < category_mapping.length; i2++) {
            var mapping = category_mapping[i2];
            var end = mapping.end || mapping.start;
            for (code_point = mapping.start; code_point <= end; code_point++) {
              this.character_category_map[code_point] = this.invoke_definition_map.lookup(mapping.default);
              for (var j = 0; j < mapping.compatible.length; j++) {
                var bitset = this.compatible_category_map[code_point];
                var compatible_category = mapping.compatible[j];
                if (compatible_category == null) {
                  continue;
                }
                var class_id = this.invoke_definition_map.lookup(compatible_category);
                if (class_id == null) {
                  continue;
                }
                var class_id_bit = 1 << class_id;
                bitset = bitset | class_id_bit;
                this.compatible_category_map[code_point] = bitset;
              }
            }
          }
        }
        var default_id = this.invoke_definition_map.lookup(DEFAULT_CATEGORY);
        if (default_id == null) {
          return;
        }
        for (code_point = 0; code_point < this.character_category_map.length; code_point++) {
          if (this.character_category_map[code_point] === 0) {
            this.character_category_map[code_point] = 1 << default_id;
          }
        }
      };
      CharacterDefinition.prototype.lookupCompatibleCategory = function(ch) {
        var classes = [];
        var code = ch.charCodeAt(0);
        var integer;
        if (code < this.compatible_category_map.length) {
          integer = this.compatible_category_map[code];
        }
        if (integer == null || integer === 0) {
          return classes;
        }
        for (var bit = 0; bit < 32; bit++) {
          if (integer << 31 - bit >>> 31 === 1) {
            var character_class = this.invoke_definition_map.getCharacterClass(bit);
            if (character_class == null) {
              continue;
            }
            classes.push(character_class);
          }
        }
        return classes;
      };
      CharacterDefinition.prototype.lookup = function(ch) {
        var class_id;
        var code = ch.charCodeAt(0);
        if (SurrogateAwareString.isSurrogatePair(ch)) {
          class_id = this.invoke_definition_map.lookup(DEFAULT_CATEGORY);
        } else if (code < this.character_category_map.length) {
          class_id = this.character_category_map[code];
        }
        if (class_id == null) {
          class_id = this.invoke_definition_map.lookup(DEFAULT_CATEGORY);
        }
        return this.invoke_definition_map.getCharacterClass(class_id);
      };
      module.exports = CharacterDefinition;
    }
  });

  // node_modules/kuromoji/src/dict/UnknownDictionary.js
  var require_UnknownDictionary = __commonJS({
    "node_modules/kuromoji/src/dict/UnknownDictionary.js"(exports, module) {
      "use strict";
      var TokenInfoDictionary = require_TokenInfoDictionary();
      var CharacterDefinition = require_CharacterDefinition();
      var ByteBuffer = require_ByteBuffer();
      function UnknownDictionary() {
        this.dictionary = new ByteBuffer(10 * 1024 * 1024);
        this.target_map = {};
        this.pos_buffer = new ByteBuffer(10 * 1024 * 1024);
        this.character_definition = null;
      }
      UnknownDictionary.prototype = Object.create(TokenInfoDictionary.prototype);
      UnknownDictionary.prototype.characterDefinition = function(character_definition) {
        this.character_definition = character_definition;
        return this;
      };
      UnknownDictionary.prototype.lookup = function(ch) {
        return this.character_definition.lookup(ch);
      };
      UnknownDictionary.prototype.lookupCompatibleCategory = function(ch) {
        return this.character_definition.lookupCompatibleCategory(ch);
      };
      UnknownDictionary.prototype.loadUnknownDictionaries = function(unk_buffer, unk_pos_buffer, unk_map_buffer, cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer) {
        this.loadDictionary(unk_buffer);
        this.loadPosVector(unk_pos_buffer);
        this.loadTargetMap(unk_map_buffer);
        this.character_definition = CharacterDefinition.load(cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer);
      };
      module.exports = UnknownDictionary;
    }
  });

  // node_modules/kuromoji/src/dict/DynamicDictionaries.js
  var require_DynamicDictionaries = __commonJS({
    "node_modules/kuromoji/src/dict/DynamicDictionaries.js"(exports, module) {
      "use strict";
      var doublearray = require_doublearray();
      var TokenInfoDictionary = require_TokenInfoDictionary();
      var ConnectionCosts = require_ConnectionCosts();
      var UnknownDictionary = require_UnknownDictionary();
      function DynamicDictionaries2(trie, token_info_dictionary, connection_costs, unknown_dictionary) {
        if (trie != null) {
          this.trie = trie;
        } else {
          this.trie = doublearray.builder(0).build([
            { k: "", v: 1 }
          ]);
        }
        if (token_info_dictionary != null) {
          this.token_info_dictionary = token_info_dictionary;
        } else {
          this.token_info_dictionary = new TokenInfoDictionary();
        }
        if (connection_costs != null) {
          this.connection_costs = connection_costs;
        } else {
          this.connection_costs = new ConnectionCosts(0, 0);
        }
        if (unknown_dictionary != null) {
          this.unknown_dictionary = unknown_dictionary;
        } else {
          this.unknown_dictionary = new UnknownDictionary();
        }
      }
      DynamicDictionaries2.prototype.loadTrie = function(base_buffer, check_buffer) {
        this.trie = doublearray.load(base_buffer, check_buffer);
        return this;
      };
      DynamicDictionaries2.prototype.loadTokenInfoDictionaries = function(token_info_buffer, pos_buffer, target_map_buffer) {
        this.token_info_dictionary.loadDictionary(token_info_buffer);
        this.token_info_dictionary.loadPosVector(pos_buffer);
        this.token_info_dictionary.loadTargetMap(target_map_buffer);
        return this;
      };
      DynamicDictionaries2.prototype.loadConnectionCosts = function(cc_buffer) {
        this.connection_costs.loadConnectionCosts(cc_buffer);
        return this;
      };
      DynamicDictionaries2.prototype.loadUnknownDictionaries = function(unk_buffer, unk_pos_buffer, unk_map_buffer, cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer) {
        this.unknown_dictionary.loadUnknownDictionaries(unk_buffer, unk_pos_buffer, unk_map_buffer, cat_map_buffer, compat_cat_map_buffer, invoke_def_buffer);
        return this;
      };
      module.exports = DynamicDictionaries2;
    }
  });

  // node_modules/kuroshiro/src/util.js
  var KATAKANA_HIRAGANA_SHIFT = "ぁ".charCodeAt(0) - "ァ".charCodeAt(0);
  var HIRAGANA_KATAKANA_SHIFT = "ァ".charCodeAt(0) - "ぁ".charCodeAt(0);
  var ROMANIZATION_SYSTEM = {
    NIPPON: "nippon",
    PASSPORT: "passport",
    HEPBURN: "hepburn"
  };
  var isHiragana = function(ch) {
    ch = ch[0];
    return ch >= "぀" && ch <= "ゟ";
  };
  var isKatakana = function(ch) {
    ch = ch[0];
    return ch >= "゠" && ch <= "ヿ";
  };
  var isKana = function(ch) {
    return isHiragana(ch) || isKatakana(ch);
  };
  var isKanji = function(ch) {
    ch = ch[0];
    return ch >= "一" && ch <= "鿏" || ch >= "豈" && ch <= "﫿" || ch >= "㐀" && ch <= "䶿";
  };
  var isJapanese = function(ch) {
    return isKana(ch) || isKanji(ch);
  };
  var hasHiragana = function(str) {
    for (let i2 = 0; i2 < str.length; i2++) {
      if (isHiragana(str[i2])) return true;
    }
    return false;
  };
  var hasKatakana = function(str) {
    for (let i2 = 0; i2 < str.length; i2++) {
      if (isKatakana(str[i2])) return true;
    }
    return false;
  };
  var hasKana = function(str) {
    for (let i2 = 0; i2 < str.length; i2++) {
      if (isKana(str[i2])) return true;
    }
    return false;
  };
  var hasKanji = function(str) {
    for (let i2 = 0; i2 < str.length; i2++) {
      if (isKanji(str[i2])) return true;
    }
    return false;
  };
  var hasJapanese = function(str) {
    for (let i2 = 0; i2 < str.length; i2++) {
      if (isJapanese(str[i2])) return true;
    }
    return false;
  };
  var toRawHiragana = function(str) {
    return [...str].map((ch) => {
      if (ch > "゠" && ch < "ヷ") {
        return String.fromCharCode(ch.charCodeAt(0) + KATAKANA_HIRAGANA_SHIFT);
      }
      return ch;
    }).join("");
  };
  var toRawKatakana = function(str) {
    return [...str].map((ch) => {
      if (ch > "぀" && ch < "゗") {
        return String.fromCharCode(ch.charCodeAt(0) + HIRAGANA_KATAKANA_SHIFT);
      }
      return ch;
    }).join("");
  };
  var toRawRomaji = function(str, system) {
    system = system || ROMANIZATION_SYSTEM.HEPBURN;
    const romajiSystem = {
      nippon: {
        // 数字と記号
        "１": "1",
        "２": "2",
        "３": "3",
        "４": "4",
        "５": "5",
        "６": "6",
        "７": "7",
        "８": "8",
        "９": "9",
        "０": "0",
        "！": "!",
        "“": '"',
        "”": '"',
        "＃": "#",
        "＄": "$",
        "％": "%",
        "＆": "&",
        "’": "'",
        "（": "(",
        "）": ")",
        "＝": "=",
        "～": "~",
        "｜": "|",
        "＠": "@",
        "‘": "`",
        "＋": "+",
        "＊": "*",
        "；": ";",
        "：": ":",
        "＜": "<",
        "＞": ">",
        "、": ",",
        "。": ".",
        "／": "/",
        "？": "?",
        "＿": "_",
        "・": "･",
        "「": '"',
        "」": '"',
        "｛": "{",
        "｝": "}",
        "￥": "\\",
        "＾": "^",
        // 直音-清音(ア～ノ)
        あ: "a",
        い: "i",
        う: "u",
        え: "e",
        お: "o",
        ア: "a",
        イ: "i",
        ウ: "u",
        エ: "e",
        オ: "o",
        か: "ka",
        き: "ki",
        く: "ku",
        け: "ke",
        こ: "ko",
        カ: "ka",
        キ: "ki",
        ク: "ku",
        ケ: "ke",
        コ: "ko",
        さ: "sa",
        し: "si",
        す: "su",
        せ: "se",
        そ: "so",
        サ: "sa",
        シ: "si",
        ス: "su",
        セ: "se",
        ソ: "so",
        た: "ta",
        ち: "ti",
        つ: "tu",
        て: "te",
        と: "to",
        タ: "ta",
        チ: "ti",
        ツ: "tu",
        テ: "te",
        ト: "to",
        な: "na",
        に: "ni",
        ぬ: "nu",
        ね: "ne",
        の: "no",
        ナ: "na",
        ニ: "ni",
        ヌ: "nu",
        ネ: "ne",
        ノ: "no",
        // 直音-清音(ハ～ヲ)
        は: "ha",
        ひ: "hi",
        ふ: "hu",
        へ: "he",
        ほ: "ho",
        ハ: "ha",
        ヒ: "hi",
        フ: "hu",
        ヘ: "he",
        ホ: "ho",
        ま: "ma",
        み: "mi",
        む: "mu",
        め: "me",
        も: "mo",
        マ: "ma",
        ミ: "mi",
        ム: "mu",
        メ: "me",
        モ: "mo",
        や: "ya",
        ゆ: "yu",
        よ: "yo",
        ヤ: "ya",
        ユ: "yu",
        ヨ: "yo",
        ら: "ra",
        り: "ri",
        る: "ru",
        れ: "re",
        ろ: "ro",
        ラ: "ra",
        リ: "ri",
        ル: "ru",
        レ: "re",
        ロ: "ro",
        わ: "wa",
        ゐ: "wi",
        ゑ: "we",
        を: "wo",
        ワ: "wa",
        ヰ: "wi",
        ヱ: "we",
        ヲ: "wo",
        // 直音-濁音(ガ～ボ)、半濁音(パ～ポ)
        が: "ga",
        ぎ: "gi",
        ぐ: "gu",
        げ: "ge",
        ご: "go",
        ガ: "ga",
        ギ: "gi",
        グ: "gu",
        ゲ: "ge",
        ゴ: "go",
        ざ: "za",
        じ: "zi",
        ず: "zu",
        ぜ: "ze",
        ぞ: "zo",
        ザ: "za",
        ジ: "zi",
        ズ: "zu",
        ゼ: "ze",
        ゾ: "zo",
        だ: "da",
        ぢ: "di",
        づ: "du",
        で: "de",
        ど: "do",
        ダ: "da",
        ヂ: "di",
        ヅ: "du",
        デ: "de",
        ド: "do",
        ば: "ba",
        び: "bi",
        ぶ: "bu",
        べ: "be",
        ぼ: "bo",
        バ: "ba",
        ビ: "bi",
        ブ: "bu",
        ベ: "be",
        ボ: "bo",
        ぱ: "pa",
        ぴ: "pi",
        ぷ: "pu",
        ぺ: "pe",
        ぽ: "po",
        パ: "pa",
        ピ: "pi",
        プ: "pu",
        ペ: "pe",
        ポ: "po",
        // 拗音-清音(キャ～リョ)
        きゃ: "kya",
        きゅ: "kyu",
        きょ: "kyo",
        しゃ: "sya",
        しゅ: "syu",
        しょ: "syo",
        ちゃ: "tya",
        ちゅ: "tyu",
        ちょ: "tyo",
        にゃ: "nya",
        にゅ: "nyu",
        にょ: "nyo",
        ひゃ: "hya",
        ひゅ: "hyu",
        ひょ: "hyo",
        みゃ: "mya",
        みゅ: "myu",
        みょ: "myo",
        りゃ: "rya",
        りゅ: "ryu",
        りょ: "ryo",
        キャ: "kya",
        キュ: "kyu",
        キョ: "kyo",
        シャ: "sya",
        シュ: "syu",
        ショ: "syo",
        チャ: "tya",
        チュ: "tyu",
        チョ: "tyo",
        ニャ: "nya",
        ニュ: "nyu",
        ニョ: "nyo",
        ヒャ: "hya",
        ヒュ: "hyu",
        ヒョ: "hyo",
        ミャ: "mya",
        ミュ: "myu",
        ミョ: "myo",
        リャ: "rya",
        リュ: "ryu",
        リョ: "ryo",
        // 拗音-濁音(ギャ～ビョ)、半濁音(ピャ～ピョ)、合拗音(クヮ、グヮ)
        ぎゃ: "gya",
        ぎゅ: "gyu",
        ぎょ: "gyo",
        じゃ: "zya",
        じゅ: "zyu",
        じょ: "zyo",
        ぢゃ: "dya",
        ぢゅ: "dyu",
        ぢょ: "dyo",
        びゃ: "bya",
        びゅ: "byu",
        びょ: "byo",
        ぴゃ: "pya",
        ぴゅ: "pyu",
        ぴょ: "pyo",
        くゎ: "kwa",
        ぐゎ: "gwa",
        ギャ: "gya",
        ギュ: "gyu",
        ギョ: "gyo",
        ジャ: "zya",
        ジュ: "zyu",
        ジョ: "zyo",
        ヂャ: "dya",
        ヂュ: "dyu",
        ヂョ: "dyo",
        ビャ: "bya",
        ビュ: "byu",
        ビョ: "byo",
        ピャ: "pya",
        ピュ: "pyu",
        ピョ: "pyo",
        クヮ: "kwa",
        グヮ: "gwa",
        // 小書きの仮名、符号
        ぁ: "a",
        ぃ: "i",
        ぅ: "u",
        ぇ: "e",
        ぉ: "o",
        ゃ: "ya",
        ゅ: "yu",
        ょ: "yo",
        ゎ: "wa",
        ァ: "a",
        ィ: "i",
        ゥ: "u",
        ェ: "e",
        ォ: "o",
        ャ: "ya",
        ュ: "yu",
        ョ: "yo",
        ヮ: "wa",
        ヵ: "ka",
        ヶ: "ke",
        ん: "n",
        ン: "n",
        // ー: "",
        "　": " ",
        // 外来音(イェ～グォ)
        いぇ: "ye",
        // うぃ: "",
        // うぇ: "",
        // うぉ: "",
        きぇ: "kye",
        // くぁ: "",
        くぃ: "kwi",
        くぇ: "kwe",
        くぉ: "kwo",
        // ぐぁ: "",
        ぐぃ: "gwi",
        ぐぇ: "gwe",
        ぐぉ: "gwo",
        イェ: "ye",
        // ウィ: "",
        // ウェ: "",
        // ウォ: "",
        // ヴ: "",
        // ヴァ: "",
        // ヴィ: "",
        // ヴェ: "",
        // ヴォ: "",
        // ヴュ: "",
        // ヴョ: "",
        キェ: "kya",
        // クァ: "",
        クィ: "kwi",
        クェ: "kwe",
        クォ: "kwo",
        // グァ: "",
        グィ: "gwi",
        グェ: "gwe",
        グォ: "gwo",
        // 外来音(シェ～フョ)
        しぇ: "sye",
        じぇ: "zye",
        すぃ: "swi",
        ずぃ: "zwi",
        ちぇ: "tye",
        つぁ: "twa",
        つぃ: "twi",
        つぇ: "twe",
        つぉ: "two",
        // てぃ: "ti",
        // てゅ: "tyu",
        // でぃ: "di",
        // でゅ: "dyu",
        // とぅ: "tu",
        // どぅ: "du",
        にぇ: "nye",
        ひぇ: "hye",
        ふぁ: "hwa",
        ふぃ: "hwi",
        ふぇ: "hwe",
        ふぉ: "hwo",
        ふゅ: "hwyu",
        ふょ: "hwyo",
        シェ: "sye",
        ジェ: "zye",
        スィ: "swi",
        ズィ: "zwi",
        チェ: "tye",
        ツァ: "twa",
        ツィ: "twi",
        ツェ: "twe",
        ツォ: "two",
        // ティ: "ti",
        // テュ: "tyu",
        // ディ: "di",
        // デュ: "dyu",
        // トゥ: "tu",
        // ドゥ: "du",
        ニェ: "nye",
        ヒェ: "hye",
        ファ: "hwa",
        フィ: "hwi",
        フェ: "hwe",
        フォ: "hwo",
        フュ: "hwyu",
        フョ: "hwyo"
      },
      passport: {
        // 数字と記号
        "１": "1",
        "２": "2",
        "３": "3",
        "４": "4",
        "５": "5",
        "６": "6",
        "７": "7",
        "８": "8",
        "９": "9",
        "０": "0",
        "！": "!",
        "“": '"',
        "”": '"',
        "＃": "#",
        "＄": "$",
        "％": "%",
        "＆": "&",
        "’": "'",
        "（": "(",
        "）": ")",
        "＝": "=",
        "～": "~",
        "｜": "|",
        "＠": "@",
        "‘": "`",
        "＋": "+",
        "＊": "*",
        "；": ";",
        "：": ":",
        "＜": "<",
        "＞": ">",
        "、": ",",
        "。": ".",
        "／": "/",
        "？": "?",
        "＿": "_",
        "・": "･",
        "「": '"',
        "」": '"',
        "｛": "{",
        "｝": "}",
        "￥": "\\",
        "＾": "^",
        // 直音-清音(ア～ノ)
        あ: "a",
        い: "i",
        う: "u",
        え: "e",
        お: "o",
        ア: "a",
        イ: "i",
        ウ: "u",
        エ: "e",
        オ: "o",
        か: "ka",
        き: "ki",
        く: "ku",
        け: "ke",
        こ: "ko",
        カ: "ka",
        キ: "ki",
        ク: "ku",
        ケ: "ke",
        コ: "ko",
        さ: "sa",
        し: "shi",
        す: "su",
        せ: "se",
        そ: "so",
        サ: "sa",
        シ: "shi",
        ス: "su",
        セ: "se",
        ソ: "so",
        た: "ta",
        ち: "chi",
        つ: "tsu",
        て: "te",
        と: "to",
        タ: "ta",
        チ: "chi",
        ツ: "tsu",
        テ: "te",
        ト: "to",
        な: "na",
        に: "ni",
        ぬ: "nu",
        ね: "ne",
        の: "no",
        ナ: "na",
        ニ: "ni",
        ヌ: "nu",
        ネ: "ne",
        ノ: "no",
        // 直音-清音(ハ～ヲ)
        は: "ha",
        ひ: "hi",
        ふ: "fu",
        へ: "he",
        ほ: "ho",
        ハ: "ha",
        ヒ: "hi",
        フ: "fu",
        ヘ: "he",
        ホ: "ho",
        ま: "ma",
        み: "mi",
        む: "mu",
        め: "me",
        も: "mo",
        マ: "ma",
        ミ: "mi",
        ム: "mu",
        メ: "me",
        モ: "mo",
        や: "ya",
        ゆ: "yu",
        よ: "yo",
        ヤ: "ya",
        ユ: "yu",
        ヨ: "yo",
        ら: "ra",
        り: "ri",
        る: "ru",
        れ: "re",
        ろ: "ro",
        ラ: "ra",
        リ: "ri",
        ル: "ru",
        レ: "re",
        ロ: "ro",
        わ: "wa",
        ゐ: "i",
        ゑ: "e",
        を: "o",
        ワ: "wa",
        ヰ: "i",
        ヱ: "e",
        ヲ: "o",
        // 直音-濁音(ガ～ボ)、半濁音(パ～ポ)
        が: "ga",
        ぎ: "gi",
        ぐ: "gu",
        げ: "ge",
        ご: "go",
        ガ: "ga",
        ギ: "gi",
        グ: "gu",
        ゲ: "ge",
        ゴ: "go",
        ざ: "za",
        じ: "ji",
        ず: "zu",
        ぜ: "ze",
        ぞ: "zo",
        ザ: "za",
        ジ: "ji",
        ズ: "zu",
        ゼ: "ze",
        ゾ: "zo",
        だ: "da",
        ぢ: "ji",
        づ: "zu",
        で: "de",
        ど: "do",
        ダ: "da",
        ヂ: "ji",
        ヅ: "zu",
        デ: "de",
        ド: "do",
        ば: "ba",
        び: "bi",
        ぶ: "bu",
        べ: "be",
        ぼ: "bo",
        バ: "ba",
        ビ: "bi",
        ブ: "bu",
        ベ: "be",
        ボ: "bo",
        ぱ: "pa",
        ぴ: "pi",
        ぷ: "pu",
        ぺ: "pe",
        ぽ: "po",
        パ: "pa",
        ピ: "pi",
        プ: "pu",
        ペ: "pe",
        ポ: "po",
        // 拗音-清音(キャ～リョ)
        きゃ: "kya",
        きゅ: "kyu",
        きょ: "kyo",
        しゃ: "sha",
        しゅ: "shu",
        しょ: "sho",
        ちゃ: "cha",
        ちゅ: "chu",
        ちょ: "cho",
        にゃ: "nya",
        にゅ: "nyu",
        にょ: "nyo",
        ひゃ: "hya",
        ひゅ: "hyu",
        ひょ: "hyo",
        みゃ: "mya",
        みゅ: "myu",
        みょ: "myo",
        りゃ: "rya",
        りゅ: "ryu",
        りょ: "ryo",
        キャ: "kya",
        キュ: "kyu",
        キョ: "kyo",
        シャ: "sha",
        シュ: "shu",
        ショ: "sho",
        チャ: "cha",
        チュ: "chu",
        チョ: "cho",
        ニャ: "nya",
        ニュ: "nyu",
        ニョ: "nyo",
        ヒャ: "hya",
        ヒュ: "hyu",
        ヒョ: "hyo",
        ミャ: "mya",
        ミュ: "myu",
        ミョ: "myo",
        リャ: "rya",
        リュ: "ryu",
        リョ: "ryo",
        // 拗音-濁音(ギャ～ビョ)、半濁音(ピャ～ピョ)、合拗音(クヮ、グヮ)
        ぎゃ: "gya",
        ぎゅ: "gyu",
        ぎょ: "gyo",
        じゃ: "ja",
        じゅ: "ju",
        じょ: "jo",
        ぢゃ: "ja",
        ぢゅ: "ju",
        ぢょ: "jo",
        びゃ: "bya",
        びゅ: "byu",
        びょ: "byo",
        ぴゃ: "pya",
        ぴゅ: "pyu",
        ぴょ: "pyo",
        // くゎ: "",
        // ぐゎ: "",
        ギャ: "gya",
        ギュ: "gyu",
        ギョ: "gyo",
        ジャ: "ja",
        ジュ: "ju",
        ジョ: "jo",
        ヂャ: "ja",
        ヂュ: "ju",
        ヂョ: "jo",
        ビャ: "bya",
        ビュ: "byu",
        ビョ: "byo",
        ピャ: "pya",
        ピュ: "pyu",
        ピョ: "pyo",
        // クヮ: "",
        // グヮ: "",
        // 小書きの仮名、符号
        ぁ: "a",
        ぃ: "i",
        ぅ: "u",
        ぇ: "e",
        ぉ: "o",
        ゃ: "ya",
        ゅ: "yu",
        ょ: "yo",
        ゎ: "wa",
        ァ: "a",
        ィ: "i",
        ゥ: "u",
        ェ: "e",
        ォ: "o",
        ャ: "ya",
        ュ: "yu",
        ョ: "yo",
        ヮ: "wa",
        ヵ: "ka",
        ヶ: "ke",
        ん: "n",
        ン: "n",
        // ー: "",
        "　": " ",
        // 外来音(イェ～グォ)
        // いぇ: "",
        // うぃ: "",
        // うぇ: "",
        // うぉ: "",
        // きぇ: "",
        // くぁ: "",
        // くぃ: "",
        // くぇ: "",
        // くぉ: "",
        // ぐぁ: "",
        // ぐぃ: "",
        // ぐぇ: "",
        // ぐぉ: "",
        // イェ: "",
        // ウィ: "",
        // ウェ: "",
        // ウォ: "",
        ヴ: "b"
        // ヴァ: "",
        // ヴィ: "",
        // ヴェ: "",
        // ヴォ: "",
        // ヴュ: "",
        // ヴョ: "",
        // キェ: "",
        // クァ: "",
        // クィ: "",
        // クェ: "",
        // クォ: "",
        // グァ: "",
        // グィ: "",
        // グェ: "",
        // グォ: "",
        // 外来音(シェ～フョ)
        // しぇ: "",
        // じぇ: "",
        // すぃ: "",
        // ずぃ: "",
        // ちぇ: "",
        // つぁ: "",
        // つぃ: "",
        // つぇ: "",
        // つぉ: "",
        // てぃ: "",
        // てゅ: "",
        // でぃ: "",
        // でゅ: "",
        // とぅ: "",
        // どぅ: "",
        // にぇ: "",
        // ひぇ: "",
        // ふぁ: "",
        // ふぃ: "",
        // ふぇ: "",
        // ふぉ: "",
        // ふゅ: "",
        // ふょ: "",
        // シェ: "",
        // ジェ: "",
        // スィ: "",
        // ズィ: "",
        // チェ: "",
        // ツァ: "",
        // ツィ: "",
        // ツェ: "",
        // ツォ: "",
        // ティ: "",
        // テュ: "",
        // ディ: "",
        // デュ: "",
        // トゥ: "",
        // ドゥ: "",
        // ニェ: "",
        // ヒェ: "",
        // ファ: "",
        // フィ: "",
        // フェ: "",
        // フォ: "",
        // フュ: "",
        // フョ: ""
      },
      hepburn: {
        // 数字と記号
        "１": "1",
        "２": "2",
        "３": "3",
        "４": "4",
        "５": "5",
        "６": "6",
        "７": "7",
        "８": "8",
        "９": "9",
        "０": "0",
        "！": "!",
        "“": '"',
        "”": '"',
        "＃": "#",
        "＄": "$",
        "％": "%",
        "＆": "&",
        "’": "'",
        "（": "(",
        "）": ")",
        "＝": "=",
        "～": "~",
        "｜": "|",
        "＠": "@",
        "‘": "`",
        "＋": "+",
        "＊": "*",
        "；": ";",
        "：": ":",
        "＜": "<",
        "＞": ">",
        "、": ",",
        "。": ".",
        "／": "/",
        "？": "?",
        "＿": "_",
        "・": "･",
        "「": '"',
        "」": '"',
        "｛": "{",
        "｝": "}",
        "￥": "\\",
        "＾": "^",
        // 直音-清音(ア～ノ)
        あ: "a",
        い: "i",
        う: "u",
        え: "e",
        お: "o",
        ア: "a",
        イ: "i",
        ウ: "u",
        エ: "e",
        オ: "o",
        か: "ka",
        き: "ki",
        く: "ku",
        け: "ke",
        こ: "ko",
        カ: "ka",
        キ: "ki",
        ク: "ku",
        ケ: "ke",
        コ: "ko",
        さ: "sa",
        し: "shi",
        す: "su",
        せ: "se",
        そ: "so",
        サ: "sa",
        シ: "shi",
        ス: "su",
        セ: "se",
        ソ: "so",
        た: "ta",
        ち: "chi",
        つ: "tsu",
        て: "te",
        と: "to",
        タ: "ta",
        チ: "chi",
        ツ: "tsu",
        テ: "te",
        ト: "to",
        な: "na",
        に: "ni",
        ぬ: "nu",
        ね: "ne",
        の: "no",
        ナ: "na",
        ニ: "ni",
        ヌ: "nu",
        ネ: "ne",
        ノ: "no",
        // 直音-清音(ハ～ヲ)
        は: "ha",
        ひ: "hi",
        ふ: "fu",
        へ: "he",
        ほ: "ho",
        ハ: "ha",
        ヒ: "hi",
        フ: "fu",
        ヘ: "he",
        ホ: "ho",
        ま: "ma",
        み: "mi",
        む: "mu",
        め: "me",
        も: "mo",
        マ: "ma",
        ミ: "mi",
        ム: "mu",
        メ: "me",
        モ: "mo",
        や: "ya",
        ゆ: "yu",
        よ: "yo",
        ヤ: "ya",
        ユ: "yu",
        ヨ: "yo",
        ら: "ra",
        り: "ri",
        る: "ru",
        れ: "re",
        ろ: "ro",
        ラ: "ra",
        リ: "ri",
        ル: "ru",
        レ: "re",
        ロ: "ro",
        わ: "wa",
        ゐ: "i",
        ゑ: "e",
        を: "o",
        ワ: "wa",
        ヰ: "i",
        ヱ: "e",
        ヲ: "o",
        // 直音-濁音(ガ～ボ)、半濁音(パ～ポ)
        が: "ga",
        ぎ: "gi",
        ぐ: "gu",
        げ: "ge",
        ご: "go",
        ガ: "ga",
        ギ: "gi",
        グ: "gu",
        ゲ: "ge",
        ゴ: "go",
        ざ: "za",
        じ: "ji",
        ず: "zu",
        ぜ: "ze",
        ぞ: "zo",
        ザ: "za",
        ジ: "ji",
        ズ: "zu",
        ゼ: "ze",
        ゾ: "zo",
        だ: "da",
        ぢ: "ji",
        づ: "zu",
        で: "de",
        ど: "do",
        ダ: "da",
        ヂ: "ji",
        ヅ: "zu",
        デ: "de",
        ド: "do",
        ば: "ba",
        び: "bi",
        ぶ: "bu",
        べ: "be",
        ぼ: "bo",
        バ: "ba",
        ビ: "bi",
        ブ: "bu",
        ベ: "be",
        ボ: "bo",
        ぱ: "pa",
        ぴ: "pi",
        ぷ: "pu",
        ぺ: "pe",
        ぽ: "po",
        パ: "pa",
        ピ: "pi",
        プ: "pu",
        ペ: "pe",
        ポ: "po",
        // 拗音-清音(キャ～リョ)
        きゃ: "kya",
        きゅ: "kyu",
        きょ: "kyo",
        しゃ: "sha",
        しゅ: "shu",
        しょ: "sho",
        ちゃ: "cha",
        ちゅ: "chu",
        ちょ: "cho",
        にゃ: "nya",
        にゅ: "nyu",
        にょ: "nyo",
        ひゃ: "hya",
        ひゅ: "hyu",
        ひょ: "hyo",
        みゃ: "mya",
        みゅ: "myu",
        みょ: "myo",
        りゃ: "rya",
        りゅ: "ryu",
        りょ: "ryo",
        キャ: "kya",
        キュ: "kyu",
        キョ: "kyo",
        シャ: "sha",
        シュ: "shu",
        ショ: "sho",
        チャ: "cha",
        チュ: "chu",
        チョ: "cho",
        ニャ: "nya",
        ニュ: "nyu",
        ニョ: "nyo",
        ヒャ: "hya",
        ヒュ: "hyu",
        ヒョ: "hyo",
        ミャ: "mya",
        ミュ: "myu",
        ミョ: "myo",
        リャ: "rya",
        リュ: "ryu",
        リョ: "ryo",
        // 拗音-濁音(ギャ～ビョ)、半濁音(ピャ～ピョ)、合拗音(クヮ、グヮ)
        ぎゃ: "gya",
        ぎゅ: "gyu",
        ぎょ: "gyo",
        じゃ: "ja",
        じゅ: "ju",
        じょ: "jo",
        ぢゃ: "ja",
        ぢゅ: "ju",
        ぢょ: "jo",
        びゃ: "bya",
        びゅ: "byu",
        びょ: "byo",
        ぴゃ: "pya",
        ぴゅ: "pyu",
        ぴょ: "pyo",
        // くゎ: "",
        // ぐゎ: "",
        ギャ: "gya",
        ギュ: "gyu",
        ギョ: "gyo",
        ジャ: "ja",
        ジュ: "ju",
        ジョ: "jo",
        ヂャ: "ja",
        ヂュ: "ju",
        ヂョ: "jo",
        ビャ: "bya",
        ビュ: "byu",
        ビョ: "byo",
        ピャ: "pya",
        ピュ: "pyu",
        ピョ: "pyo",
        // クヮ: "",
        // グヮ: "",
        // 小書きの仮名、符号
        ぁ: "a",
        ぃ: "i",
        ぅ: "u",
        ぇ: "e",
        ぉ: "o",
        ゃ: "ya",
        ゅ: "yu",
        ょ: "yo",
        ゎ: "wa",
        ァ: "a",
        ィ: "i",
        ゥ: "u",
        ェ: "e",
        ォ: "o",
        ャ: "ya",
        ュ: "yu",
        ョ: "yo",
        ヮ: "wa",
        ヵ: "ka",
        ヶ: "ke",
        ん: "n",
        ン: "n",
        // ー: "",
        "　": " ",
        // 外来音(イェ～グォ)
        いぇ: "ye",
        うぃ: "wi",
        うぇ: "we",
        うぉ: "wo",
        きぇ: "kye",
        くぁ: "kwa",
        くぃ: "kwi",
        くぇ: "kwe",
        くぉ: "kwo",
        ぐぁ: "gwa",
        ぐぃ: "gwi",
        ぐぇ: "gwe",
        ぐぉ: "gwo",
        イェ: "ye",
        ウィ: "wi",
        ウェ: "we",
        ウォ: "wo",
        ヴ: "vu",
        ヴァ: "va",
        ヴィ: "vi",
        ヴェ: "ve",
        ヴォ: "vo",
        ヴュ: "vyu",
        ヴョ: "vyo",
        キェ: "kya",
        クァ: "kwa",
        クィ: "kwi",
        クェ: "kwe",
        クォ: "kwo",
        グァ: "gwa",
        グィ: "gwi",
        グェ: "gwe",
        グォ: "gwo",
        // 外来音(シェ～フョ)
        しぇ: "she",
        じぇ: "je",
        // すぃ: "",
        // ずぃ: "",
        ちぇ: "che",
        つぁ: "tsa",
        つぃ: "tsi",
        つぇ: "tse",
        つぉ: "tso",
        てぃ: "ti",
        てゅ: "tyu",
        でぃ: "di",
        でゅ: "dyu",
        とぅ: "tu",
        どぅ: "du",
        にぇ: "nye",
        ひぇ: "hye",
        ふぁ: "fa",
        ふぃ: "fi",
        ふぇ: "fe",
        ふぉ: "fo",
        ふゅ: "fyu",
        ふょ: "fyo",
        シェ: "she",
        ジェ: "je",
        // スィ: "",
        // ズィ: "",
        チェ: "che",
        ツァ: "tsa",
        ツィ: "tsi",
        ツェ: "tse",
        ツォ: "tso",
        ティ: "ti",
        テュ: "tyu",
        ディ: "di",
        デュ: "dyu",
        トゥ: "tu",
        ドゥ: "du",
        ニェ: "nye",
        ヒェ: "hye",
        ファ: "fa",
        フィ: "fi",
        フェ: "fe",
        フォ: "fo",
        フュ: "fyu",
        フョ: "fyo"
      }
    };
    const reg_tsu = /(っ|ッ)([bcdfghijklmnopqrstuvwyz])/gm;
    const reg_xtsu = /っ|ッ/gm;
    let pnt = 0;
    let ch;
    let r;
    let result = "";
    if (system === ROMANIZATION_SYSTEM.PASSPORT) {
      str = str.replace(/ー/gm, "");
    }
    if (system === ROMANIZATION_SYSTEM.NIPPON || system === ROMANIZATION_SYSTEM.HEPBURN) {
      const reg_hatu = new RegExp(/(ん|ン)(?=あ|い|う|え|お|ア|イ|ウ|エ|オ|ぁ|ぃ|ぅ|ぇ|ぉ|ァ|ィ|ゥ|ェ|ォ|や|ゆ|よ|ヤ|ユ|ヨ|ゃ|ゅ|ょ|ャ|ュ|ョ)/g);
      let match;
      const indices = [];
      while ((match = reg_hatu.exec(str)) !== null) {
        indices.push(match.index + 1);
      }
      if (indices.length !== 0) {
        let mStr = "";
        for (let i2 = 0; i2 < indices.length; i2++) {
          if (i2 === 0) {
            mStr += `${str.slice(0, indices[i2])}'`;
          } else {
            mStr += `${str.slice(indices[i2 - 1], indices[i2])}'`;
          }
        }
        mStr += str.slice(indices[indices.length - 1]);
        str = mStr;
      }
    }
    const max2 = str.length;
    while (pnt <= max2) {
      if (r = romajiSystem[system][str.substring(pnt, pnt + 2)]) {
        result += r;
        pnt += 2;
      } else {
        result += (r = romajiSystem[system][ch = str.substring(pnt, pnt + 1)]) ? r : ch;
        pnt += 1;
      }
    }
    result = result.replace(reg_tsu, "$2$2");
    if (system === ROMANIZATION_SYSTEM.PASSPORT || system === ROMANIZATION_SYSTEM.HEPBURN) {
      result = result.replace(/cc/gm, "tc");
    }
    result = result.replace(reg_xtsu, "tsu");
    if (system === ROMANIZATION_SYSTEM.PASSPORT) {
      result = result.replace(/nm/gm, "mm");
      result = result.replace(/nb/gm, "mb");
      result = result.replace(/np/gm, "mp");
    }
    if (system === ROMANIZATION_SYSTEM.NIPPON) {
      result = result.replace(/aー/gm, "â");
      result = result.replace(/iー/gm, "î");
      result = result.replace(/uー/gm, "û");
      result = result.replace(/eー/gm, "ê");
      result = result.replace(/oー/gm, "ô");
    }
    if (system === ROMANIZATION_SYSTEM.HEPBURN) {
      result = result.replace(/aー/gm, "ā");
      result = result.replace(/iー/gm, "ī");
      result = result.replace(/uー/gm, "ū");
      result = result.replace(/eー/gm, "ē");
      result = result.replace(/oー/gm, "ō");
    }
    return result;
  };
  var getStrType = function(str) {
    let hasKJ = false;
    let hasHK = false;
    for (let i2 = 0; i2 < str.length; i2++) {
      if (isKanji(str[i2])) {
        hasKJ = true;
      } else if (isHiragana(str[i2]) || isKatakana(str[i2])) {
        hasHK = true;
      }
    }
    if (hasKJ && hasHK) return 1;
    if (hasKJ) return 0;
    if (hasHK) return 2;
    return 3;
  };
  var patchTokens = function(tokens) {
    for (let cr = 0; cr < tokens.length; cr++) {
      if (hasJapanese(tokens[cr].surface_form)) {
        if (!tokens[cr].reading) {
          if (tokens[cr].surface_form.split("").every(isKana)) {
            tokens[cr].reading = toRawKatakana(tokens[cr].surface_form);
          } else {
            tokens[cr].reading = tokens[cr].surface_form;
          }
        } else if (hasHiragana(tokens[cr].reading)) {
          tokens[cr].reading = toRawKatakana(tokens[cr].reading);
        }
      } else {
        tokens[cr].reading = tokens[cr].surface_form;
      }
    }
    for (let i2 = 0; i2 < tokens.length; i2++) {
      if (tokens[i2].pos && tokens[i2].pos === "助動詞" && (tokens[i2].surface_form === "う" || tokens[i2].surface_form === "ウ")) {
        if (i2 - 1 >= 0 && tokens[i2 - 1].pos && tokens[i2 - 1].pos === "動詞") {
          tokens[i2 - 1].surface_form += "う";
          if (tokens[i2 - 1].pronunciation) {
            tokens[i2 - 1].pronunciation += "ー";
          } else {
            tokens[i2 - 1].pronunciation = `${tokens[i2 - 1].reading}ー`;
          }
          tokens[i2 - 1].reading += "ウ";
          tokens.splice(i2, 1);
          i2--;
        }
      }
    }
    for (let j = 0; j < tokens.length; j++) {
      if (tokens[j].pos && (tokens[j].pos === "動詞" || tokens[j].pos === "形容詞") && tokens[j].surface_form.length > 1 && (tokens[j].surface_form[tokens[j].surface_form.length - 1] === "っ" || tokens[j].surface_form[tokens[j].surface_form.length - 1] === "ッ")) {
        if (j + 1 < tokens.length) {
          tokens[j].surface_form += tokens[j + 1].surface_form;
          if (tokens[j].pronunciation) {
            tokens[j].pronunciation += tokens[j + 1].pronunciation || tokens[j + 1].reading;
          } else {
            tokens[j].pronunciation = `${tokens[j].reading}${tokens[j + 1].reading}`;
          }
          tokens[j].reading += tokens[j + 1].reading;
          tokens.splice(j + 1, 1);
          j--;
        }
      }
    }
    return tokens;
  };
  var kanaToHiragna = function(str) {
    return toRawHiragana(str);
  };
  var kanaToKatakana = function(str) {
    return toRawKatakana(str);
  };
  var kanaToRomaji = function(str, system) {
    return toRawRomaji(str, system);
  };

  // node_modules/kuroshiro/src/core.js
  var mergeSokuonForward = function(notations, system) {
    const merged = [];
    for (let i2 = 0; i2 < notations.length; i2++) {
      const current = notations[i2];
      const next = notations[i2 + 1];
      if (current[1] !== 2 || !/^[っッ]$/.test(current[3]) || !next || next[1] === 3 || !next[3] || ![...next[3]].every(isKana) || /^[っッ]/.test(next[3]) || !/^[bcdfghjklmnpqrstvwxyz]/.test(toRawRomaji(next[3], system))) {
        merged.push(current);
      } else {
        const group = [current[0] + next[0], next[1], current[2] + next[2], current[3] + next[3]];
        i2++;
        const small = notations[i2 + 1];
        if (next[1] === 2 && next[3].length === 1 && small && small[1] === 2 && /^[ぁぃぅぇぉゃゅょゎァィゥェォャュョヮ]$/.test(small[3])) {
          group[0] += small[0];
          group[2] += small[2];
          group[3] += small[3];
          i2++;
        }
        merged.push(group);
      }
    }
    return merged;
  };
  var Kuroshiro = class {
    /**
     * Constructor
     * @constructs Kuroshiro
     */
    constructor() {
      this._analyzer = null;
    }
    /**
     * Initialize Kuroshiro
     * @memberOf Kuroshiro
     * @instance
     * @returns {Promise} Promise object represents the result of initialization
     */
    async init(analyzer) {
      if (!analyzer || typeof analyzer !== "object" || typeof analyzer.init !== "function" || typeof analyzer.parse !== "function") {
        throw new Error("Invalid initialization parameter.");
      } else if (this._analyzer == null) {
        await analyzer.init();
        this._analyzer = analyzer;
      } else {
        throw new Error("Kuroshiro has already been initialized.");
      }
    }
    /**
     * Convert given string to target syllabary with options available
     * @memberOf Kuroshiro
     * @instance
     * @param {string} str Given String
     * @param {Object} [options] Settings Object
     * @param {string} [options.to="hiragana"] Target syllabary ["hiragana"|"katakana"|"romaji"]
     * @param {string} [options.mode="normal"] Convert mode ["normal"|"spaced"|"okurigana"|"furigana"]
     * @param {string} [options.romajiSystem="hepburn"] Romanization System ["nippon"|"passport"|"hepburn"]
     * @param {string} [options.delimiter_start="("] Delimiter(Start)
     * @param {string} [options.delimiter_end=")"] Delimiter(End)
     * @returns {Promise} Promise object represents the result of conversion
     */
    async convert(str, options) {
      options = options || {};
      options.to = options.to || "hiragana";
      options.mode = options.mode || "normal";
      options.romajiSystem = options.romajiSystem || ROMANIZATION_SYSTEM.HEPBURN;
      options.delimiter_start = options.delimiter_start || "(";
      options.delimiter_end = options.delimiter_end || ")";
      str = str || "";
      if (["hiragana", "katakana", "romaji"].indexOf(options.to) === -1) {
        throw new Error("Invalid Target Syllabary.");
      }
      if (["normal", "spaced", "okurigana", "furigana"].indexOf(options.mode) === -1) {
        throw new Error("Invalid Conversion Mode.");
      }
      const ROMAJI_SYSTEMS = Object.keys(ROMANIZATION_SYSTEM).map((e) => ROMANIZATION_SYSTEM[e]);
      if (ROMAJI_SYSTEMS.indexOf(options.romajiSystem) === -1) {
        throw new Error("Invalid Romanization System.");
      }
      const rawTokens = await this._analyzer.parse(str);
      const tokens = patchTokens(rawTokens);
      if (options.mode === "normal" || options.mode === "spaced") {
        switch (options.to) {
          case "katakana":
            if (options.mode === "normal") {
              return tokens.map((token) => token.reading).join("");
            }
            return tokens.map((token) => token.reading).join(" ");
          case "romaji":
            const romajiConv = (token) => {
              let preToken;
              if (hasJapanese(token.surface_form)) {
                preToken = token.pronunciation || token.reading;
              } else {
                preToken = token.surface_form;
              }
              return toRawRomaji(preToken, options.romajiSystem);
            };
            if (options.mode === "normal") {
              return tokens.map(romajiConv).join("");
            }
            return tokens.map(romajiConv).join(" ");
          case "hiragana":
            for (let hi = 0; hi < tokens.length; hi++) {
              if (hasKanji(tokens[hi].surface_form)) {
                if (!hasKatakana(tokens[hi].surface_form)) {
                  tokens[hi].reading = toRawHiragana(tokens[hi].reading);
                } else {
                  tokens[hi].reading = toRawHiragana(tokens[hi].reading);
                  let tmp = "";
                  let hpattern = "";
                  for (let hc = 0; hc < tokens[hi].surface_form.length; hc++) {
                    if (isKanji(tokens[hi].surface_form[hc])) {
                      hpattern += "(.*)";
                    } else {
                      hpattern += isKatakana(tokens[hi].surface_form[hc]) ? toRawHiragana(tokens[hi].surface_form[hc]) : tokens[hi].surface_form[hc];
                    }
                  }
                  const hreg = new RegExp(hpattern);
                  const hmatches = hreg.exec(tokens[hi].reading);
                  if (hmatches) {
                    let pickKJ = 0;
                    for (let hc1 = 0; hc1 < tokens[hi].surface_form.length; hc1++) {
                      if (isKanji(tokens[hi].surface_form[hc1])) {
                        tmp += hmatches[pickKJ + 1];
                        pickKJ++;
                      } else {
                        tmp += tokens[hi].surface_form[hc1];
                      }
                    }
                    tokens[hi].reading = tmp;
                  }
                }
              } else {
                tokens[hi].reading = tokens[hi].surface_form;
              }
            }
            if (options.mode === "normal") {
              return tokens.map((token) => token.reading).join("");
            }
            return tokens.map((token) => token.reading).join(" ");
          default:
            throw new Error("Unknown option.to param");
        }
      } else if (options.mode === "okurigana" || options.mode === "furigana") {
        const notations = [];
        for (let i2 = 0; i2 < tokens.length; i2++) {
          const strType = getStrType(tokens[i2].surface_form);
          switch (strType) {
            case 0:
              notations.push([tokens[i2].surface_form, 1, toRawHiragana(tokens[i2].reading), tokens[i2].pronunciation || tokens[i2].reading]);
              break;
            case 1:
              let pattern = "";
              let isLastTokenKanji = false;
              const subs = [];
              for (let c = 0; c < tokens[i2].surface_form.length; c++) {
                if (isKanji(tokens[i2].surface_form[c])) {
                  if (!isLastTokenKanji) {
                    isLastTokenKanji = true;
                    pattern += "(.+)";
                    subs.push(tokens[i2].surface_form[c]);
                  } else {
                    subs[subs.length - 1] += tokens[i2].surface_form[c];
                  }
                } else {
                  isLastTokenKanji = false;
                  subs.push(tokens[i2].surface_form[c]);
                  pattern += isKatakana(tokens[i2].surface_form[c]) ? toRawHiragana(tokens[i2].surface_form[c]) : tokens[i2].surface_form[c];
                }
              }
              const reg = new RegExp(`^${pattern}$`);
              const matches = reg.exec(toRawHiragana(tokens[i2].reading));
              if (matches) {
                let pickKanji = 1;
                for (let c1 = 0; c1 < subs.length; c1++) {
                  if (isKanji(subs[c1][0])) {
                    notations.push([subs[c1], 1, matches[pickKanji], toRawKatakana(matches[pickKanji])]);
                    pickKanji += 1;
                  } else {
                    notations.push([subs[c1], 2, toRawHiragana(subs[c1]), toRawKatakana(subs[c1])]);
                  }
                }
              } else {
                notations.push([tokens[i2].surface_form, 1, toRawHiragana(tokens[i2].reading), tokens[i2].pronunciation || tokens[i2].reading]);
              }
              break;
            case 2:
              for (let c2 = 0; c2 < tokens[i2].surface_form.length; c2++) {
                notations.push([tokens[i2].surface_form[c2], 2, toRawHiragana(tokens[i2].reading[c2]), tokens[i2].pronunciation && tokens[i2].pronunciation[c2] || tokens[i2].reading[c2]]);
              }
              break;
            case 3:
              for (let c3 = 0; c3 < tokens[i2].surface_form.length; c3++) {
                notations.push([tokens[i2].surface_form[c3], 3, tokens[i2].surface_form[c3], tokens[i2].surface_form[c3]]);
              }
              break;
            default:
              throw new Error("Unknown strType");
          }
        }
        let result = "";
        switch (options.to) {
          case "katakana":
            if (options.mode === "okurigana") {
              for (let n0 = 0; n0 < notations.length; n0++) {
                if (notations[n0][1] !== 1) {
                  result += notations[n0][0];
                } else {
                  result += notations[n0][0] + options.delimiter_start + toRawKatakana(notations[n0][2]) + options.delimiter_end;
                }
              }
            } else {
              for (let n1 = 0; n1 < notations.length; n1++) {
                if (notations[n1][1] !== 1) {
                  result += notations[n1][0];
                } else {
                  result += `<ruby>${notations[n1][0]}<rp>${options.delimiter_start}</rp><rt>${toRawKatakana(notations[n1][2])}</rt><rp>${options.delimiter_end}</rp></ruby>`;
                }
              }
            }
            return result;
          case "romaji":
            {
              const romajiNotations = mergeSokuonForward(notations, options.romajiSystem);
              if (options.mode === "okurigana") {
                for (let n2 = 0; n2 < romajiNotations.length; n2++) {
                  if (romajiNotations[n2][1] !== 1) {
                    result += romajiNotations[n2][0];
                  } else {
                    result += romajiNotations[n2][0] + options.delimiter_start + toRawRomaji(romajiNotations[n2][3], options.romajiSystem) + options.delimiter_end;
                  }
                }
              } else {
                result += "<ruby>";
                for (let n3 = 0; n3 < romajiNotations.length; n3++) {
                  result += `${romajiNotations[n3][0]}<rp>${options.delimiter_start}</rp><rt>${toRawRomaji(romajiNotations[n3][3], options.romajiSystem)}</rt><rp>${options.delimiter_end}</rp>`;
                }
                result += "</ruby>";
              }
            }
            return result;
          case "hiragana":
            if (options.mode === "okurigana") {
              for (let n4 = 0; n4 < notations.length; n4++) {
                if (notations[n4][1] !== 1) {
                  result += notations[n4][0];
                } else {
                  result += notations[n4][0] + options.delimiter_start + notations[n4][2] + options.delimiter_end;
                }
              }
            } else {
              for (let n5 = 0; n5 < notations.length; n5++) {
                if (notations[n5][1] !== 1) {
                  result += notations[n5][0];
                } else {
                  result += `<ruby>${notations[n5][0]}<rp>${options.delimiter_start}</rp><rt>${notations[n5][2]}</rt><rp>${options.delimiter_end}</rp></ruby>`;
                }
              }
            }
            return result;
          default:
            throw new Error("Invalid Target Syllabary.");
        }
      }
    }
  };
  var Util = {
    isHiragana,
    isKatakana,
    isKana,
    isKanji,
    isJapanese,
    hasHiragana,
    hasKatakana,
    hasKana,
    hasKanji,
    hasJapanese,
    kanaToHiragna,
    kanaToKatakana,
    kanaToRomaji
  };
  Kuroshiro.Util = Util;
  var core_default = Kuroshiro;

  // node_modules/kuroshiro/src/index.js
  core_default.default = core_default;
  var src_default = core_default;

  // src/analyzer.js
  var import_Tokenizer = __toESM(require_Tokenizer(), 1);
  var import_DynamicDictionaries = __toESM(require_DynamicDictionaries(), 1);

  // node_modules/fflate/esm/browser.js
  var u8 = Uint8Array;
  var u16 = Uint16Array;
  var i32 = Int32Array;
  var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */
    0,
    0,
    /* impossible */
    0
  ]);
  var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */
    0,
    0
  ]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i2 = 0; i2 < 31; ++i2) {
      b[i2] = start += 1 << eb[i2 - 1];
    }
    var r = new i32(b[30]);
    for (var i2 = 1; i2 < 30; ++i2) {
      for (var j = b[i2]; j < b[i2 + 1]; ++j) {
        r[j] = j - b[i2] << 5 | i2;
      }
    }
    return { b, r };
  };
  var _a = freb(fleb, 2);
  var fl = _a.b;
  var revfl = _a.r;
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0);
  var fd = _b.b;
  var revfd = _b.r;
  var rev = new u16(32768);
  for (i = 0; i < 32768; ++i) {
    x = (i & 43690) >> 1 | (i & 21845) << 1;
    x = (x & 52428) >> 2 | (x & 13107) << 2;
    x = (x & 61680) >> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
  }
  var x;
  var i;
  var hMap = (function(cd, mb, r) {
    var s = cd.length;
    var i2 = 0;
    var l = new u16(mb);
    for (; i2 < s; ++i2) {
      if (cd[i2])
        ++l[cd[i2] - 1];
    }
    var le = new u16(mb);
    for (i2 = 1; i2 < mb; ++i2) {
      le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          var sv = i2 << 4 | cd[i2];
          var r_1 = mb - cd[i2];
          var v = le[cd[i2] - 1]++ << r_1;
          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            co[rev[v] >> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i2 = 0; i2 < s; ++i2) {
        if (cd[i2]) {
          co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
        }
      }
    }
    return co;
  });
  var flt = new u8(288);
  for (i = 0; i < 144; ++i)
    flt[i] = 8;
  var i;
  for (i = 144; i < 256; ++i)
    flt[i] = 9;
  var i;
  for (i = 256; i < 280; ++i)
    flt[i] = 7;
  var i;
  for (i = 280; i < 288; ++i)
    flt[i] = 8;
  var i;
  var fdt = new u8(32);
  for (i = 0; i < 32; ++i)
    fdt[i] = 5;
  var i;
  var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
  var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
  var max = function(a) {
    var m = a[0];
    for (var i2 = 1; i2 < a.length; ++i2) {
      if (a[i2] > m)
        m = a[i2];
    }
    return m;
  };
  var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
  };
  var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
  };
  var shft = function(p) {
    return (p + 7) / 8 | 0;
  };
  var slc = function(v, s, e) {
    if (s == null || s < 0)
      s = 0;
    if (e == null || e > v.length)
      e = v.length;
    return new u8(v.subarray(s, e));
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    // determined by compression function
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
    // determined by unknown compression method
  ];
  var err = function(ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e, err);
    if (!nt)
      throw e;
    return e;
  };
  var inflt = function(dat, st, buf, dict) {
    var sl = dat.length, dl = dict ? dict.length : 0;
    if (!sl || st.f && !st.l)
      return buf || new u8(0);
    var noBuf = !buf;
    var resize = noBuf || st.i != 2;
    var noSt = st.i;
    if (noBuf)
      buf = new u8(sl * 3);
    var cbuf = function(l2) {
      var bl = buf.length;
      if (l2 > bl) {
        var nbuf = new u8(Math.max(bl * 2, l2));
        nbuf.set(buf);
        buf = nbuf;
      }
    };
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    var tbts = sl * 8;
    do {
      if (!lm) {
        final = bits(dat, pos, 1);
        var type = bits(dat, pos + 1, 3);
        pos += 3;
        if (!type) {
          var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
          if (t > sl) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + l);
          buf.set(dat.subarray(s, t), bt);
          st.b = bt += l, st.p = pos = t * 8, st.f = final;
          continue;
        } else if (type == 1)
          lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
          var tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          var ldt = new u8(tl);
          var clt = new u8(19);
          for (var i2 = 0; i2 < hcLen; ++i2) {
            clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
          }
          pos += hcLen * 3;
          var clb = max(clt), clbmsk = (1 << clb) - 1;
          var clm = hMap(clt, clb, 1);
          for (var i2 = 0; i2 < tl; ) {
            var r = clm[bits(dat, pos, clbmsk)];
            pos += r & 15;
            var s = r >> 4;
            if (s < 16) {
              ldt[i2++] = s;
            } else {
              var c = 0, n = 0;
              if (s == 16)
                n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
              else if (s == 17)
                n = 3 + bits(dat, pos, 7), pos += 3;
              else if (s == 18)
                n = 11 + bits(dat, pos, 127), pos += 7;
              while (n--)
                ldt[i2++] = c;
            }
          }
          var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
          lbt = max(lt);
          dbt = max(dt);
          lm = hMap(lt, lbt, 1);
          dm = hMap(dt, dbt, 1);
        } else
          err(1);
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
      }
      if (resize)
        cbuf(bt + 131072);
      var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
      var lpos = pos;
      for (; ; lpos = pos) {
        var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
        pos += c & 15;
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (!c)
          err(2);
        if (sym < 256)
          buf[bt++] = sym;
        else if (sym == 256) {
          lpos = pos, lm = null;
          break;
        } else {
          var add = sym - 254;
          if (sym > 264) {
            var i2 = sym - 257, b = fleb[i2];
            add = bits(dat, pos, (1 << b) - 1) + fl[i2];
            pos += b;
          }
          var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
          if (!d)
            err(3);
          pos += d & 15;
          var dt = fd[dsym];
          if (dsym > 3) {
            var b = fdeb[dsym];
            dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
          }
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + 131072);
          var end = bt + add;
          if (bt < dt) {
            var shift = dl - dt, dend = Math.min(dt, end);
            if (shift + bt < 0)
              err(3);
            for (; bt < dend; ++bt)
              buf[bt] = dict[shift + bt];
          }
          for (; bt < end; ++bt)
            buf[bt] = buf[bt - dt];
        }
      }
      st.l = lm, st.p = lpos, st.b = bt, st.f = final;
      if (lm)
        final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
  };
  var et = /* @__PURE__ */ new u8(0);
  var gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8)
      err(6, "invalid gzip data");
    var flg = d[3];
    var st = 10;
    if (flg & 4)
      st += (d[10] | d[11] << 8) + 2;
    for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
      ;
    return st + (flg & 2);
  };
  var gzl = function(d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
  };
  function gunzipSync(data, opts) {
    var st = gzs(data);
    if (st + 8 > data.length)
      err(6, "invalid gzip data");
    return inflt(data.subarray(st, -8), { i: 2 }, opts && opts.out || new u8(gzl(data)), opts && opts.dictionary);
  }
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, { stream: true });
    tds = 1;
  } catch (e) {
  }

  // src/dictionary-files.js
  var dictionaryFiles = [
    {
      "name": "base.dat.gz",
      "sha256": "0803327762e1c93ca731e4319ab8343340f2806bb84941207782cde9d2d5a8eb"
    },
    {
      "name": "cc.dat.gz",
      "sha256": "02b7631be0d4de3a1a75cd9f9cc51536e4f94c9e6b389b813e06ba0f6e7de765"
    },
    {
      "name": "check.dat.gz",
      "sha256": "193ae0035fff6fe812b58d9ee730e7a7d7ee601d918481ce51075c58114f6cc9"
    },
    {
      "name": "tid.dat.gz",
      "sha256": "d43d831cb6fb0f0a411739cd287a6d5e998e121a8daca614df14a81a0dcac586"
    },
    {
      "name": "tid_map.dat.gz",
      "sha256": "33efd5ffd87a70f669add093fa39dee44341d58f940844ef107c8fd98bb795b2"
    },
    {
      "name": "tid_pos.dat.gz",
      "sha256": "60dbfc99a6ab993f30c5dab648bec6ad7f9aaefa5c14e1843837d95e509f8895"
    },
    {
      "name": "unk.dat.gz",
      "sha256": "f7f991cdeb9bfd3e9c0e4577cc50ee0815a11c508cccd444a9d3ab3c81521100"
    },
    {
      "name": "unk_char.dat.gz",
      "sha256": "9a8e86fd9aff32d323fbb59f5a7006f05927a11f8173c90712cc56293aeb3225"
    },
    {
      "name": "unk_compat.dat.gz",
      "sha256": "50f60aa29bc2e86c2903ab8c825bb6fa604d2b294d96941c1d3924259791899d"
    },
    {
      "name": "unk_invoke.dat.gz",
      "sha256": "6b210889548457c3006913afd12c8b525562255f2709e404604be9614a25e94c"
    },
    {
      "name": "unk_map.dat.gz",
      "sha256": "6df12460e5477230bb6fd9641def918b699fc0a8868016b6c9f794488630509b"
    },
    {
      "name": "unk_pos.dat.gz",
      "sha256": "5b183a29f281acc7e0542beca47b83f7985047c0a2d27e78a66f32276be5ad11"
    }
  ];

  // src/analyzer.js
  var DICTIONARY_BASE = "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/";
  async function downloadDictionary(base = DICTIONARY_BASE, fetcher = fetch) {
    const abort = new AbortController();
    const timer = setTimeout(() => abort.abort(), 12e4);
    try {
      const queue = [...dictionaryFiles];
      const entries = [];
      const download = async ({ name, sha256 }) => {
        const response = await fetcher(new URL(name, base).href, {
          signal: abort.signal,
          credentials: "omit",
          referrerPolicy: "no-referrer"
        });
        if (!response.ok) throw new Error(`Dictionary request failed (${response.status})`);
        const bytes = new Uint8Array(await response.arrayBuffer());
        const digest = await globalThis.crypto.subtle.digest("SHA-256", bytes);
        const actual = Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
        if (actual !== sha256) throw new Error("Dictionary integrity check failed");
        const decoded = gunzipSync(bytes);
        entries.push([name, decoded.buffer.slice(decoded.byteOffset, decoded.byteOffset + decoded.byteLength)]);
      };
      await Promise.all(Array.from({ length: 3 }, async () => {
        while (queue.length) {
          abort.signal.throwIfAborted();
          await download(queue.shift());
        }
      }));
      const files = Object.fromEntries(entries);
      const dic = new import_DynamicDictionaries.default();
      dic.loadTrie(new Int32Array(files["base.dat.gz"]), new Int32Array(files["check.dat.gz"]));
      dic.loadTokenInfoDictionaries(new Uint8Array(files["tid.dat.gz"]), new Uint8Array(files["tid_pos.dat.gz"]), new Uint8Array(files["tid_map.dat.gz"]));
      dic.loadConnectionCosts(new Int16Array(files["cc.dat.gz"]));
      dic.loadUnknownDictionaries(
        new Uint8Array(files["unk.dat.gz"]),
        new Uint8Array(files["unk_pos.dat.gz"]),
        new Uint8Array(files["unk_map.dat.gz"]),
        new Uint8Array(files["unk_char.dat.gz"]),
        new Uint32Array(files["unk_compat.dat.gz"]),
        new Uint8Array(files["unk_invoke.dat.gz"])
      );
      return new import_Tokenizer.default(dic);
    } finally {
      clearTimeout(timer);
      abort.abort();
    }
  }
  function createRomanizer({ loadTokenizer = downloadDictionary } = {}) {
    let ready;
    return {
      async convert(text) {
        if (!ready) {
          const kuroshiro = new src_default();
          ready = kuroshiro.init({
            async init() {
              this.tokenizer = await loadTokenizer();
            },
            async parse(input) {
              return this.tokenizer.tokenize(input);
            }
          }).then(() => kuroshiro);
          ready.catch(() => {
            ready = void 0;
          });
        }
        const converter = await ready;
        const parts = await Promise.all(text.split(/(\s+)/).map(
          (part) => !part || /^\s+$/.test(part) ? part : converter.convert(part.replace(/[\uFF66-\uFF9F]+/g, (kana) => kana.normalize("NFKC")), {
            to: "romaji",
            mode: "spaced",
            romajiSystem: "hepburn"
          })
        ));
        return parts.join("");
      }
    };
  }

  // src/controller.js
  var LYRIC_SELECTOR = [
    ".lyrics-lyricsContent-text",
    ".C8vlCbXzAR7qEMsoQG1r",
    '[data-testid="lyrics-line"]',
    '[data-testid="lyrics-line-always-visible"]',
    '[data-testid="lyrics-line-collapsible"]'
  ].join(",");
  var isJapanese2 = (text) => /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u.test(text);
  var LyricsController = class {
    constructor({ document: document2, convert, enabled = true, onError = () => {
    }, onLoading = () => {
    } }) {
      this.document = document2;
      this.convert = convert;
      this.enabled = enabled;
      this.onError = onError;
      this.onLoading = onLoading;
      this.nodes = /* @__PURE__ */ new Map();
      this.cache = /* @__PURE__ */ new Map();
      this.pending = /* @__PURE__ */ new Map();
      this.epoch = 0;
      this.failed = false;
      this.disposed = false;
      this.observer = new document2.defaultView.MutationObserver((mutations) => {
        if (!this.enabled || this.disposed) return;
        const lines = /* @__PURE__ */ new Set();
        for (const mutation of mutations) {
          this.collect(mutation.target.nodeType === 3 ? mutation.target.parentElement : mutation.target, lines, false);
          for (const node of mutation.addedNodes ?? []) this.collect(node, lines, true);
        }
        this.prune();
        for (const line of lines) this.processLine(line);
      });
    }
    start() {
      this.observer.observe(this.document.body, { childList: true, subtree: true, characterData: true });
      this.scan();
    }
    collect(node, lines, descendants) {
      if (node?.nodeType !== 1) return;
      const parent = node.closest(LYRIC_SELECTOR);
      if (parent) lines.add(parent);
      if (descendants) for (const line of node.querySelectorAll(LYRIC_SELECTOR)) lines.add(line);
    }
    scan() {
      this.prune();
      if (this.enabled && !this.disposed) {
        for (const line of this.document.querySelectorAll(LYRIC_SELECTOR)) this.processLine(line);
      }
    }
    processLine(line) {
      if (this.failed || !this.enabled || this.disposed) return;
      const walker = this.document.createTreeWalker(line, 4);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.parentElement.closest("script,style,button,[aria-hidden='true'],[data-romaji-ignore]")) continue;
        let state = this.nodes.get(node);
        if (state && (node.data === state.applied || node.data === state.original && state.busy)) continue;
        const original = node.data;
        if (!isJapanese2(original)) {
          this.nodes.delete(node);
          continue;
        }
        state = { original, applied: null, busy: true };
        this.nodes.set(node, state);
        const epoch = this.epoch;
        if (this.cache.has(original)) {
          this.apply(node, state, this.cache.get(original), epoch);
          continue;
        }
        if (!this.pending.has(original)) {
          this.onLoading();
          const promise = Promise.resolve().then(() => this.convert(original)).then((result) => {
            if (typeof result !== "string") throw new Error("Invalid romanization result");
            this.cache.set(original, result);
            if (this.cache.size > 1e3) this.cache.delete(this.cache.keys().next().value);
            return result;
          }).finally(() => this.pending.delete(original));
          this.pending.set(original, promise);
        }
        this.pending.get(original).then((result) => this.apply(node, state, result, epoch)).catch((error) => {
          state.busy = false;
          if (this.disposed || !this.enabled || epoch !== this.epoch || this.failed) return;
          this.failed = true;
          this.onError(error);
        });
      }
    }
    apply(node, state, result, epoch) {
      state.busy = false;
      if (this.disposed || !this.enabled || epoch !== this.epoch || !node.isConnected || this.nodes.get(node) !== state || node.data !== state.original || !node.parentElement?.closest(LYRIC_SELECTOR)) return;
      state.applied = result;
      node.data = result;
    }
    restore() {
      for (const [node, state] of this.nodes) {
        if (state.applied !== null && node.data === state.applied) node.data = state.original;
      }
      this.nodes.clear();
    }
    setEnabled(enabled) {
      this.epoch++;
      this.enabled = enabled;
      this.failed = false;
      this.restore();
      if (enabled) this.scan();
    }
    songChanged() {
      this.epoch++;
      this.restore();
      this.scan();
    }
    prune() {
      for (const [node, state] of this.nodes) {
        if (node.isConnected && node.parentElement?.closest(LYRIC_SELECTOR)) continue;
        if (state.applied !== null && node.data === state.applied) node.data = state.original;
        this.nodes.delete(node);
      }
    }
    dispose() {
      this.disposed = true;
      this.epoch++;
      this.observer.disconnect();
      this.restore();
      this.cache.clear();
    }
  };

  // src/main.js
  (() => {
    "use strict";
    const KEY = "romaji-lyrics:enabled";
    const INSTANCE = "__spicetifyRomajiLyrics";
    const icon = '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M1 3h7v1H5v1c0 1.5-.4 2.8-1.2 3.9L6 11l-.7.7L3.1 9.6 1 11.7l-.7-.7 2.2-2.2A6.3 6.3 0 0 1 1.3 6l1-.2c.1.8.4 1.6.9 2.3C3.7 7.2 4 6.2 4 5V4H1V3zm3-2h1v2H4V1zm6 5h1l4 8h-1.2l-1-2H8.2l-1 2H6l4-8zm.5 1.5L8.7 11h3.6l-1.8-3.5z"/></svg>';
    let retryTimer;
    let controller;
    let menu;
    let button;
    let disposed = false;
    let loadingNotified = false;
    let attempts = 0;
    let api;
    const onSongChange = () => controller?.songChanged();
    const dispose = () => {
      disposed = true;
      clearTimeout(retryTimer);
      controller?.dispose();
      menu?.deregister();
      button?.deregister();
      api?.Player?.removeEventListener?.("songchange", onSongChange);
      window.removeEventListener("pagehide", dispose);
      if (window[INSTANCE]?.dispose === dispose) delete window[INSTANCE];
    };
    window[INSTANCE]?.dispose?.();
    window[INSTANCE] = { dispose };
    function init() {
      if (disposed) return;
      api = window.Spicetify;
      if (!document.body || !api?.Player?.addEventListener || !api?.Menu?.Item || !api?.React?.createElement || api.ContextMenuV2 && !api.ReactJSX?.jsx) {
        if (++attempts < 150) retryTimer = setTimeout(init, 200);
        else console.warn("[Romaji Lyrics] Spicetify did not become ready; reload Spotify to retry.");
        return;
      }
      let enabled = true;
      try {
        enabled = api.LocalStorage?.get(KEY) !== "false";
      } catch {
      }
      const romanizer = createRomanizer();
      controller = new LyricsController({
        document,
        enabled,
        convert: (text) => romanizer.convert(text),
        onLoading: () => {
          if (loadingNotified) return;
          loadingNotified = true;
          api.showNotification?.("Romaji Lyrics: loading the Japanese dictionary…");
        },
        onError: () => {
          console.warn("[Romaji Lyrics] Conversion unavailable. Original lyrics remain visible.");
          api.showNotification?.("Romaji Lyrics: dictionary unavailable. Check your connection, then switch off and on to retry.", true);
        }
      });
      const toggle = () => {
        controller.setEnabled(!controller.enabled);
        try {
          api.LocalStorage?.set(KEY, String(controller.enabled));
        } catch {
        }
        menu.setState(controller.enabled);
        if (button) {
          button.active = controller.enabled;
          button.label = controller.enabled ? "Romaji Lyrics: on" : "Romaji Lyrics: off";
        }
        api.showNotification?.(`Romaji Lyrics: ${controller.enabled ? "on" : "off"}`);
      };
      menu = new api.Menu.Item("Romaji Lyrics", enabled, toggle, icon);
      menu.register();
      if (api.Playbar?.Button) {
        button = new api.Playbar.Button(enabled ? "Romaji Lyrics: on" : "Romaji Lyrics: off", icon, toggle, false, enabled);
      }
      api.Player.addEventListener("songchange", onSongChange);
      window.addEventListener("pagehide", dispose);
      controller.start();
    }
    init();
  })();
})();
