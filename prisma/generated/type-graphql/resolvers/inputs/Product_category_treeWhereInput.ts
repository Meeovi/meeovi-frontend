import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";

@TypeGraphQL.InputType("Product_category_treeWhereInput", {})
export class Product_category_treeWhereInput {
  @TypeGraphQL.Field(_type => [Product_category_treeWhereInput], {
    nullable: true
  })
  AND?: Product_category_treeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereInput], {
    nullable: true
  })
  OR?: Product_category_treeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeWhereInput], {
    nullable: true
  })
  NOT?: Product_category_treeWhereInput[] | undefined;

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
  category_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  category_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryRelationFilter, {
    nullable: true
  })
  category?: CategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;
}
