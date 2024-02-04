import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Property_group_optionRelationFilter } from "../inputs/Property_group_optionRelationFilter";

@TypeGraphQL.InputType("Product_optionWhereInput", {})
export class Product_optionWhereInput {
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
