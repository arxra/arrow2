use arrow2::{
    array::BooleanArray,
    datatypes::{DataType, Field},
    scalar::{FixedSizeListScalar, Scalar},
};

#[allow(clippy::eq_op)]
#[test]
fn equal() {
    let dt = DataType::FixedSizeList(Box::new(Field::new("a", DataType::Boolean, true)), 2);
    let a = FixedSizeListScalar::new(
        dt.clone(),
        Some(BooleanArray::from_slice([true, false]).arced()),
    );

    let b = FixedSizeListScalar::new(dt.clone(), None);

    assert_eq!(a, a);
    assert_eq!(b, b);
    assert!(a != b);

    let b = FixedSizeListScalar::new(dt, Some(BooleanArray::from_slice([true, true]).arced()));
    assert!(a != b);
    assert_eq!(b, b);
}

#[test]
fn basics() {
    let dt = DataType::FixedSizeList(Box::new(Field::new("a", DataType::Boolean, true)), 2);
    let a = FixedSizeListScalar::new(
        dt.clone(),
        Some(BooleanArray::from_slice([true, false]).arced()),
    );

    assert_eq!(
        BooleanArray::from_slice([true, false]),
        a.values().unwrap().as_ref()
    );
    assert_eq!(a.data_type(), &dt);
    assert!(a.is_valid());

    let _: &dyn std::any::Any = a.as_any();
}
