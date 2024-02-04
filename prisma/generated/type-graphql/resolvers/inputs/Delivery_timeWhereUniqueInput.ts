import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Delivery_timeWhereInput } from "../inputs/Delivery_timeWhereInput";
import { Delivery_time_translationListRelationFilter } from "../inputs/Delivery_time_translationListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Shipping_methodListRelationFilter } from "../inputs/Shipping_methodListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Delivery_timeWhereUniqueInput", {})
export class Delivery_timeWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Delivery_timeWhereInput], {
    nullable: true
  })
  AND?: Delivery_timeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_timeWhereInput], {
    nullable: true
  })
  OR?: Delivery_timeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_timeWhereInput], {
    nullable: true
  })
  NOT?: Delivery_timeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  min?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  max?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  unit?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationListRelationFilter, {
    nullable: true
  })
  delivery_time_translation?: Delivery_time_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodListRelationFilter, {
    nullable: true
  })
  shipping_method?: Shipping_methodListRelationFilter | undefined;
}
