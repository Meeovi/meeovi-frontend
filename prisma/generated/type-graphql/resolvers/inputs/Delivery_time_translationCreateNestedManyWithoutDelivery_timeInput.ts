import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCreateManyDelivery_timeInputEnvelope } from "../inputs/Delivery_time_translationCreateManyDelivery_timeInputEnvelope";
import { Delivery_time_translationCreateOrConnectWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationCreateOrConnectWithoutDelivery_timeInput";
import { Delivery_time_translationCreateWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationCreateWithoutDelivery_timeInput";
import { Delivery_time_translationWhereUniqueInput } from "../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_time_translationCreateNestedManyWithoutDelivery_timeInput", {})
export class Delivery_time_translationCreateNestedManyWithoutDelivery_timeInput {
  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateWithoutDelivery_timeInput], {
    nullable: true
  })
  create?: Delivery_time_translationCreateWithoutDelivery_timeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateOrConnectWithoutDelivery_timeInput], {
    nullable: true
  })
  connectOrCreate?: Delivery_time_translationCreateOrConnectWithoutDelivery_timeInput[] | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationCreateManyDelivery_timeInputEnvelope, {
    nullable: true
  })
  createMany?: Delivery_time_translationCreateManyDelivery_timeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Delivery_time_translationWhereUniqueInput[] | undefined;
}
