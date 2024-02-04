import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCreateManyDelivery_timeInput } from "../inputs/Delivery_time_translationCreateManyDelivery_timeInput";

@TypeGraphQL.InputType("Delivery_time_translationCreateManyDelivery_timeInputEnvelope", {})
export class Delivery_time_translationCreateManyDelivery_timeInputEnvelope {
  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateManyDelivery_timeInput], {
    nullable: false
  })
  data!: Delivery_time_translationCreateManyDelivery_timeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
