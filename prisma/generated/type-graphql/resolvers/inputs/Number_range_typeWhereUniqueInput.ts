import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Number_range_sales_channelListRelationFilter } from "../inputs/Number_range_sales_channelListRelationFilter";
import { Number_range_typeWhereInput } from "../inputs/Number_range_typeWhereInput";
import { Number_range_type_translationListRelationFilter } from "../inputs/Number_range_type_translationListRelationFilter";

@TypeGraphQL.InputType("Number_range_typeWhereUniqueInput", {})
export class Number_range_typeWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technical_name?: string | undefined;

  @TypeGraphQL.Field(_type => [Number_range_typeWhereInput], {
    nullable: true
  })
  AND?: Number_range_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_typeWhereInput], {
    nullable: true
  })
  OR?: Number_range_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_typeWhereInput], {
    nullable: true
  })
  NOT?: Number_range_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  global?: BoolFilter | undefined;

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

  @TypeGraphQL.Field(_type => Number_range_type_translationListRelationFilter, {
    nullable: true
  })
  number_range_type_translation?: Number_range_type_translationListRelationFilter | undefined;
}
