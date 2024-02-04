import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_optionWhereInput } from "../inputs/Product_optionWhereInput";
import { Property_group_optionRelationFilter } from "../inputs/Property_group_optionRelationFilter";
import { product_optionProduct_idProduct_version_idProperty_group_option_idCompoundUniqueInput } from "../inputs/product_optionProduct_idProduct_version_idProperty_group_option_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_optionWhereUniqueInput", {})
export class Product_optionWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_optionProduct_idProduct_version_idProperty_group_option_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_product_version_id_property_group_option_id?: product_optionProduct_idProduct_version_idProperty_group_option_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_optionWhereInput], {
    nullable: true
  })
  AND?: Product_optionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionWhereInput], {
    nullable: true
  })
  OR?: Product_optionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionWhereInput], {
    nullable: true
  })
  NOT?: Product_optionWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Property_group_optionRelationFilter, {
    nullable: true
  })
  property_group_option?: Property_group_optionRelationFilter | undefined;
}
