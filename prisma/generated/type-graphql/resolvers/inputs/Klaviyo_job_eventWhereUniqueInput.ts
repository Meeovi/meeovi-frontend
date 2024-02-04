import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Klaviyo_job_eventWhereInput } from "../inputs/Klaviyo_job_eventWhereInput";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Klaviyo_job_eventWhereUniqueInput", {})
export class Klaviyo_job_eventWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventWhereInput], {
    nullable: true
  })
  AND?: Klaviyo_job_eventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventWhereInput], {
    nullable: true
  })
  OR?: Klaviyo_job_eventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_job_eventWhereInput], {
    nullable: true
  })
  NOT?: Klaviyo_job_eventWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  entity_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  happened_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;
}
