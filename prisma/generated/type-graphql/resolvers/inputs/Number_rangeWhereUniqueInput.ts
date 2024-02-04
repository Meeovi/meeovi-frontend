import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Number_rangeWhereInput } from "../inputs/Number_rangeWhereInput";
import { Number_range_sales_channelListRelationFilter } from "../inputs/Number_range_sales_channelListRelationFilter";
import { Number_range_translationListRelationFilter } from "../inputs/Number_range_translationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Number_rangeWhereUniqueInput", {})
export class Number_rangeWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Number_rangeWhereInput], {
    nullable: true
  })
  AND?: Number_rangeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_rangeWhereInput], {
    nullable: true
  })
  OR?: Number_rangeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_rangeWhereInput], {
    nullable: true
  })
  NOT?: Number_rangeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  type_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  global?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  pattern?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  start?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelListRelationFilter, {
    nullable: true
  })
  number_range_sales_channel?: Number_range_sales_channelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationListRelationFilter, {
    nullable: true
  })
  number_range_translation?: Number_range_translationListRelationFilter | undefined;
}
