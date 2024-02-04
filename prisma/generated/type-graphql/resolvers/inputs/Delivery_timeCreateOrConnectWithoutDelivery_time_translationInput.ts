import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeCreateWithoutDelivery_time_translationInput } from "../inputs/Delivery_timeCreateWithoutDelivery_time_translationInput";
import { Delivery_timeWhereUniqueInput } from "../inputs/Delivery_timeWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_timeCreateOrConnectWithoutDelivery_time_translationInput", {})
export class Delivery_timeCreateOrConnectWithoutDelivery_time_translationInput {
  @TypeGraphQL.Field(_type => Delivery_timeWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_timeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Delivery_timeCreateWithoutDelivery_time_translationInput, {
    nullable: false
  })
  create!: Delivery_timeCreateWithoutDelivery_time_translationInput;
}
