import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateWithoutSales_channelInput } from "../inputs/Customer_wishlistCreateWithoutSales_channelInput";
import { Customer_wishlistUpdateWithoutSales_channelInput } from "../inputs/Customer_wishlistUpdateWithoutSales_channelInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistUpsertWithWhereUniqueWithoutSales_channelInput", {})
export class Customer_wishlistUpsertWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_wishlistUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: Customer_wishlistUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Customer_wishlistCreateWithoutSales_channelInput;
}
