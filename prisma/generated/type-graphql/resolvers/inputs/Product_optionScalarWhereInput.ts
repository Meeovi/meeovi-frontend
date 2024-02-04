import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Product_optionScalarWhereInput", {})
export class Product_optionScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_optionScalarWhereInput], {
    nullable: true
  })
  AND?: Product_optionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionScalarWhereInput], {
    nullable: true
  })
  OR?: Product_optionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_optionScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_optionScalarWhereInput[] | undefined;

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
}
