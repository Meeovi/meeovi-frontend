import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Product_category_treeScalarWhereInput", {})
export class Product_category_treeScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_category_treeScalarWhereInput], {
    nullable: true
  })
  AND?: Product_category_treeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeScalarWhereInput], {
    nullable: true
  })
  OR?: Product_category_treeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_category_treeScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_category_treeScalarWhereInput[] | undefined;

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
}
