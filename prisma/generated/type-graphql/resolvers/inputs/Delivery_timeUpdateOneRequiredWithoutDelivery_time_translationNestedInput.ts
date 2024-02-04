import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeCreateOrConnectWithoutDelivery_time_translationInput } from "../inputs/Delivery_timeCreateOrConnectWithoutDelivery_time_translationInput";
import { Delivery_timeCreateWithoutDelivery_time_translationInput } from "../inputs/Delivery_timeCreateWithoutDelivery_time_translationInput";
import { Delivery_timeUpdateToOneWithWhereWithoutDelivery_time_translationInput } from "../inputs/Delivery_timeUpdateToOneWithWhereWithoutDelivery_time_translationInput";
import { Delivery_timeUpsertWithoutDelivery_time_translationInput } from "../inputs/Delivery_timeUpsertWithoutDelivery_time_translationInput";
import { Delivery_timeWhereUniqueInput } from "../inputs/Delivery_timeWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_timeUpdateOneRequiredWithoutDelivery_time_translationNestedInput", {})
export class Delivery_timeUpdateOneRequiredWithoutDelivery_time_translationNestedInput {
  @TypeGraphQL.Field(_type => Delivery_timeCreateWithoutDelivery_time_translationInput, {
    nullable: true
  })
  create?: Delivery_timeCreateWithoutDelivery_time_translationInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeCreateOrConnectWithoutDelivery_time_translationInput, {
    nullable: true
  })
  connectOrCreate?: Delivery_timeCreateOrConnectWithoutDelivery_time_translationInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeUpsertWithoutDelivery_time_translationInput, {
    nullable: true
  })
  upsert?: Delivery_timeUpsertWithoutDelivery_time_translationInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeWhereUniqueInput, {
    nullable: true
  })
  connect?: Delivery_timeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeUpdateToOneWithWhereWithoutDelivery_time_translationInput, {
    nullable: true
  })
  update?: Delivery_timeUpdateToOneWithWhereWithoutDelivery_time_translationInput | undefined;
}
