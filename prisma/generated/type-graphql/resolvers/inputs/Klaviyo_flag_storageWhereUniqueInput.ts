import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Klaviyo_flag_storageWhereInput } from "../inputs/Klaviyo_flag_storageWhereInput";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Klaviyo_flag_storageWhereUniqueInput", {})
export class Klaviyo_flag_storageWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageWhereInput], {
    nullable: true
  })
  AND?: Klaviyo_flag_storageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageWhereInput], {
    nullable: true
  })
  OR?: Klaviyo_flag_storageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageWhereInput], {
    nullable: true
  })
  NOT?: Klaviyo_flag_storageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  key?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  value?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

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
