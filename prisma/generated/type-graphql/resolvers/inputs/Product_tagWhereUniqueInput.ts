import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { Product_tagWhereInput } from "../inputs/Product_tagWhereInput";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { product_tagProduct_idProduct_version_idTag_idCompoundUniqueInput } from "../inputs/product_tagProduct_idProduct_version_idTag_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_tagWhereUniqueInput", {})
export class Product_tagWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_tagProduct_idProduct_version_idTag_idCompoundUniqueInput, {
    nullable: true
  })
  product_id_product_version_id_tag_id?: product_tagProduct_idProduct_version_idTag_idCompoundUniqueInput | undefined;

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
