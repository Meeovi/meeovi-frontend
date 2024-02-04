import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationUpdateWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationUpdateWithoutDelivery_timeInput";
import { Delivery_time_translationWhereUniqueInput } from "../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_time_translationUpdateWithWhereUniqueWithoutDelivery_timeInput", {})
export class Delivery_time_translationUpdateWithWhereUniqueWithoutDelivery_timeInput {
  @TypeGraphQL.Field(_type => Delivery_time_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_time_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationUpdateWithoutDelivery_timeInput, {
    nullable: false
  })
  data!: Delivery_time_translationUpdateWithoutDelivery_timeInput;
}
