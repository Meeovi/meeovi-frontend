import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Product_sorting_translationScalarWhereInput", {})
export class Product_sorting_translationScalarWhereInput {
  @TypeGraphQL.Field(_type => [Product_sorting_translationScalarWhereInput], {
    nullable: true
  })
  AND?: Product_sorting_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationScalarWhereInput], {
    nullable: true
  })
  OR?: Product_sorting_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_sorting_translationScalarWhereInput], {
    nullable: true
  })
  NOT?: Product_sorting_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  product_sorting_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
