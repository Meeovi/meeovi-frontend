import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManySales_channelInput } from "../inputs/CartCreateManySales_channelInput";

@TypeGraphQL.InputType("CartCreateManySales_channelInputEnvelope", {})
export class CartCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [CartCreateManySales_channelInput], {
    nullable: false
  })
  data!: CartCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
