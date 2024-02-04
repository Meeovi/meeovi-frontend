import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Currency_country_roundingScalarWhereInput", {})
export class Currency_country_roundingScalarWhereInput {
  @TypeGraphQL.Field(_type => [Currency_country_roundingScalarWhereInput], {
    nullable: true
  })
  AND?: Currency_country_roundingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingScalarWhereInput], {
    nullable: true
  })
  OR?: Currency_country_roundingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_country_roundingScalarWhereInput], {
    nullable: true
  })
  NOT?: Currency_country_roundingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  currency_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  country_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  item_rounding?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  total_rounding?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
