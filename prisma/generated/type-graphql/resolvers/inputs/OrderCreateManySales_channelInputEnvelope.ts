import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManySales_channelInput } from "../inputs/OrderCreateManySales_channelInput";

@TypeGraphQL.InputType("OrderCreateManySales_channelInputEnvelope", {})
export class OrderCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManySales_channelInput], {
    nullable: false
  })
  data!: OrderCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
