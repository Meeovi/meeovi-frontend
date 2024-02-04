import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MediaNullableRelationFilter } from "../inputs/MediaNullableRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { Product_manufacturerWhereInput } from "../inputs/Product_manufacturerWhereInput";
import { Product_manufacturer_translationListRelationFilter } from "../inputs/Product_manufacturer_translationListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { product_manufacturerIdVersion_idCompoundUniqueInput } from "../inputs/product_manufacturerIdVersion_idCompoundUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerWhereUniqueInput", {})
export class Product_manufacturerWhereUniqueInput {
  @TypeGraphQL.Field(_type => product_manufacturerIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: product_manufacturerIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerWhereInput], {
    nullable: true
  })
  AND?: Product_manufacturerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerWhereInput], {
    nullable: true
  })
  OR?: Product_manufacturerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerWhereInput], {
    nullable: true
  })
  NOT?: Product_manufacturerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  link?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  media_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  product?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediaNullableRelationFilter, {
    nullable: true
  })
  media?: MediaNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationListRelationFilter, {
    nullable: true
  })
  product_manufacturer_translation?: Product_manufacturer_translationListRelationFilter | undefined;
}
