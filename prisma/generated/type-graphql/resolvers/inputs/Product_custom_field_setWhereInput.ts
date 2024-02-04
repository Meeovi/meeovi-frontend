import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Custom_field_setRelationFilter } from "../inputs/Custom_field_setRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";

@TypeGraphQL.InputType("Product_custom_field_setWhereInput", {})
export class Product_custom_field_setWhereInput {
  @TypeGraphQL.Field(_type => [Product_custom_field_setWhereInput], {
    nullable: true
  })
  AND?: Product_custom_field_setWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setWhereInput], {
    nullable: true
  })
  OR?: Product_custom_field_setWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_custom_field_setWhereInput], {
    nullable: true
  })
  NOT?: Product_custom_field_setWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  custom_field_set_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setRelationFilter, {
    nullable: true
  })
  custom_field_set?: Custom_field_setRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
