// This example demos how to operate on arrays in-place.
use arrow2::{
    array::{Array, PrimitiveArray},
    types::NativeType,
};

// this function will clone-on-write the array and apply `f` to its values
fn cow_apply<T: NativeType, F: Fn(&mut [T])>(array: &mut Box<dyn Array>, f: F) {
    // 1. downcast the array to its concrete type
    let array = array
        .as_any_mut()
        .downcast_mut::<PrimitiveArray<T>>()
        .unwrap();

    // 2. empty the mut reference and create a new array on the stack with its contents
    let new_array = array.take();

    // 3. deconstruct the array into its parts
    let (dt, values, validity) = new_array.into_inner();

    // 4. clone-on-write the values
    let mut values = values.make_mut();

    // 5. apply the function over the values
    f(&mut values);

    // 6. assign the new values to the array
    array.try_assign(dt, values.into(), validity).unwrap();
}

fn main() {
    // say we have have received an array
    let mut array = PrimitiveArray::from_vec(vec![1i32, 2]).boxed();

    // we can apply a transformation to its values without allocating a new array as follows:
    cow_apply(&mut array, |values: &mut [i32]| {
        values.iter_mut().for_each(|x| *x *= 10)
    });

    // confirm that it gives the right result :)
    assert_eq!(array.as_ref(), PrimitiveArray::from_vec(vec![10i32, 20]));
}
