import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Product_tagScalarWhereInput", {})
export class Product_tagScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_tagScalarWhereInput], {
    nullable: true
  })
  AND?: Product_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagScalarWhereInput], {
    nullable: true
  })
  OR?: Product_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_tagScalarWhereInput[] | undefined;

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
  tag_id?: BytesFilter | undefined;
}
