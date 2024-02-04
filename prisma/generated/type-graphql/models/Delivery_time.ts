import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Delivery_time_translation } from "../models/Delivery_time_translation";
import { Shipping_method } from "../models/Shipping_method";
import { Delivery_timeCount } from "../resolvers/outputs/Delivery_timeCount";

@TypeGraphQL.ObjectType("Delivery_time", {})
export class Delivery_time {
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
  updated_at?: Date | null;

  delivery_time_translation?: Delivery_time_translation[];

  shipping_method?: Shipping_method[];

  @TypeGraphQL.Field(_type => Delivery_timeCount, {
    nullable: true
  })
  _count?: Delivery_timeCount | null;
}
