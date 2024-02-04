import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_propertyWhereInput } from "../inputs/Product_propertyWhereInput";
import { Property_group_optionRelationFilter } from "../inputs/Property_group_optionRelationFilter";
import { product_propertyProduct_idProduct_version_idProperty_group_option_idCompoundUniqueInput } from "../inputs/product_propertyProduct_idProduct_version_idProperty_group_option_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_propertyWhereUniqueInput", {})
export class Product_propertyWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_propertyProduct_idProduct_version_idProperty_group_option_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_product_version_id_property_group_option_id?: product_propertyProduct_idProduct_version_idProperty_group_option_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyWhereInput], {
    nullable: true
  })
  AND?: Product_propertyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyWhereInput], {
    nullable: true
  })
  OR?: Product_propertyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyWhereInput], {
    nullable: true
  })
  NOT?: Product_propertyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  property_group_option_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => Property_group_optionRelationFilter, {
    nullable: true
  })
  property_group_option?: Property_group_optionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
