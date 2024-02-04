import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Number_range_stateWhereInput", {})
export class Number_range_stateWhereInput {
  @TypeGraphQL.Field(_type => [Number_range_stateWhereInput], {
    nullable: true
  })
  AND?: Number_range_stateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_stateWhereInput], {
    nullable: true
  })
  OR?: Number_range_stateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_stateWhereInput], {
    nullable: true
  })
  NOT?: Number_range_stateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  number_range_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  last_value?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
