import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeUpdateWithoutDelivery_time_translationInput } from "../inputs/Delivery_timeUpdateWithoutDelivery_time_translationInput";
import { Delivery_timeWhereInput } from "../inputs/Delivery_timeWhereInput";

@TypeGraphQL.InputType("Delivery_timeUpdateToOneWithWhereWithoutDelivery_time_translationInput", {})
export class Delivery_timeUpdateToOneWithWhereWithoutDelivery_time_translationInput {
  @TypeGraphQL.Field(_type => Delivery_timeWhereInput, {
    nullable: true
  })
  where?: Delivery_timeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeUpdateWithoutDelivery_time_translationInput, {
    nullable: false
  })
  data!: Delivery_timeUpdateWithoutDelivery_time_translationInput;
}
