import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateManySales_channelInput } from "../inputs/Customer_wishlistCreateManySales_channelInput";

@TypeGraphQL.InputType("Customer_wishlistCreateManySales_channelInputEnvelope", {})
export class Customer_wishlistCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_wishlistCreateManySales_channelInput], {
    nullable: false
  })
  data!: Customer_wishlistCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
