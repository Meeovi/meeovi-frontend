import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Klaviyo_checkout_mappingWhereInput } from "../inputs/Klaviyo_checkout_mappingWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Klaviyo_checkout_mappingWhereUniqueInput", {})
export class Klaviyo_checkout_mappingWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingWhereInput], {
    nullable: true
  })
  AND?: Klaviyo_checkout_mappingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingWhereInput], {
    nullable: true
  })
  OR?: Klaviyo_checkout_mappingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingWhereInput], {
    nullable: true
  })
  NOT?: Klaviyo_checkout_mappingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  reference?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  mapping_table?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
