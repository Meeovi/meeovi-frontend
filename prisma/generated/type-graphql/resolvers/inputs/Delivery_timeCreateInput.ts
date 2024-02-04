import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCreateNestedManyWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationCreateNestedManyWithoutDelivery_timeInput";
import { Shipping_methodCreateNestedManyWithoutDelivery_timeInput } from "../inputs/Shipping_methodCreateNestedManyWithoutDelivery_timeInput";

@TypeGraphQL.InputType("Delivery_timeCreateInput", {})
export class Delivery_timeCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  min!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  max!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  unit!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationCreateNestedManyWithoutDelivery_timeInput, {
    nullable: true
  })
  delivery_time_translation?: Delivery_time_translationCreateNestedManyWithoutDelivery_timeInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodCreateNestedManyWithoutDelivery_timeInput, {
    nullable: true
  })
  shipping_method?: Shipping_methodCreateNestedManyWithoutDelivery_timeInput | undefined;
}
