import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCreateWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationCreateWithoutDelivery_timeInput";
import { Delivery_time_translationUpdateWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationUpdateWithoutDelivery_timeInput";
import { Delivery_time_translationWhereUniqueInput } from "../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_time_translationUpsertWithWhereUniqueWithoutDelivery_timeInput", {})
export class Delivery_time_translationUpsertWithWhereUniqueWithoutDelivery_timeInput {
  @TypeGraphQL.Field(_type => Delivery_time_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Delivery_time_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationUpdateWithoutDelivery_timeInput, {
    nullable: false
  })
  update!: Delivery_time_translationUpdateWithoutDelivery_timeInput;

  @TypeGraphQL.Field(_type => Delivery_time_translationCreateWithoutDelivery_timeInput, {
    nullable: false
  })
  create!: Delivery_time_translationCreateWithoutDelivery_timeInput;
}
