(function() {var implementors = {};
implementors["arrow2"] = [{"text":"impl&lt;'a, O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/array/struct.BinaryValueIter.html\" title=\"struct arrow2::array::BinaryValueIter\">BinaryValueIter</a>&lt;'a, O&gt;","synthetic":false,"types":["arrow2::array::binary::iterator::BinaryValueIter"]},{"text":"impl&lt;'a, O:&nbsp;<a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/array/struct.Utf8ValuesIter.html\" title=\"struct arrow2::array::Utf8ValuesIter\">Utf8ValuesIter</a>&lt;'a, O&gt;","synthetic":false,"types":["arrow2::array::utf8::iterator::Utf8ValuesIter"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitChunksExact.html\" title=\"struct arrow2::bitmap::utils::BitChunksExact\">BitChunksExact</a>&lt;'_, T&gt;","synthetic":false,"types":["arrow2::bitmap::utils::chunk_iterator::chunks_exact::BitChunksExact"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitChunks.html\" title=\"struct arrow2::bitmap::utils::BitChunks\">BitChunks</a>&lt;'_, T&gt;","synthetic":false,"types":["arrow2::bitmap::utils::chunk_iterator::BitChunks"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitmapIter.html\" title=\"struct arrow2::bitmap::utils::BitmapIter\">BitmapIter</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::bitmap::utils::iterator::BitmapIter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.SlicesIterator.html\" title=\"struct arrow2::bitmap::utils::SlicesIterator\">SlicesIterator</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::bitmap::utils::slice_iterator::SlicesIterator"]},{"text":"impl&lt;'a, T, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.ZipValidity.html\" title=\"struct arrow2::bitmap::utils::ZipValidity\">ZipValidity</a>&lt;'a, T, I&gt;","synthetic":false,"types":["arrow2::bitmap::utils::zip_validity::ZipValidity"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/types/struct.BitChunkIter.html\" title=\"struct arrow2::types::BitChunkIter\">BitChunkIter</a>&lt;T&gt;","synthetic":false,"types":["arrow2::types::bit_chunk::BitChunkIter"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"arrow2/types/trait.Index.html\" title=\"trait arrow2::types::Index\">Index</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/types/struct.IndexRange.html\" title=\"struct arrow2::types::IndexRange\">IndexRange</a>&lt;I&gt;","synthetic":false,"types":["arrow2::types::index::IndexRange"]},{"text":"impl&lt;'a, L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/compute/merge_sort/struct.MergeSortSlices.html\" title=\"struct arrow2::compute::merge_sort::MergeSortSlices\">MergeSortSlices</a>&lt;'a, L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;'a <a class=\"type\" href=\"arrow2/compute/merge_sort/type.MergeSlice.html\" title=\"type arrow2::compute::merge_sort::MergeSlice\">MergeSlice</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;'a <a class=\"type\" href=\"arrow2/compute/merge_sort/type.MergeSlice.html\" title=\"type arrow2::compute::merge_sort::MergeSlice\">MergeSlice</a>&gt;,&nbsp;</span>","synthetic":false,"types":["arrow2::compute::merge_sort::MergeSortSlices"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Seek.html\" title=\"trait std::io::Seek\">Seek</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/ipc/read/struct.FileReader.html\" title=\"struct arrow2::io::ipc::read::FileReader\">FileReader</a>&lt;R&gt;","synthetic":false,"types":["arrow2::io::ipc::read::reader::FileReader"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/ipc/read/struct.StreamReader.html\" title=\"struct arrow2::io::ipc::read::StreamReader\">StreamReader</a>&lt;R&gt;","synthetic":false,"types":["arrow2::io::ipc::read::stream::StreamReader"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Seek.html\" title=\"trait std::io::Seek\">Seek</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/parquet/read/struct.RecordReader.html\" title=\"struct arrow2::io::parquet::read::RecordReader\">RecordReader</a>&lt;R&gt;","synthetic":false,"types":["arrow2::io::parquet::read::record_batch::RecordReader"]},{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"type\" href=\"arrow2/error/type.Result.html\" title=\"type arrow2::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"arrow2/record_batch/struct.RecordBatch.html\" title=\"struct arrow2::record_batch::RecordBatch\">RecordBatch</a>&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/parquet/write/struct.RowGroupIterator.html\" title=\"struct arrow2::io::parquet::write::RowGroupIterator\">RowGroupIterator</a>&lt;I&gt;","synthetic":false,"types":["arrow2::io::parquet::write::record_batch::RowGroupIterator"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/avro/read/struct.Reader.html\" title=\"struct arrow2::io::avro::read::Reader\">Reader</a>&lt;R&gt;","synthetic":false,"types":["arrow2::io::avro::read::Reader"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()