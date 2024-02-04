import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("Product_tagWhereInput", {})
export class Product_tagWhereInput {
  @TypeGraphQL.Field(_type => [Product_tagWhereInput], {
    nullable: true
  })
  AND?: Product_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereInput], {
    nullable: true
  })
  OR?: Product_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_tagWhereInput], {
    nullable: true
  })
  NOT?: Product_tagWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;
}
