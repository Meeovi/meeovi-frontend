import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateWithoutSales_channelInput } from "../inputs/CartCreateWithoutSales_channelInput";
import { CartUpdateWithoutSales_channelInput } from "../inputs/CartUpdateWithoutSales_channelInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpsertWithWhereUniqueWithoutSales_channelInput", {})
export class CartUpsertWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: CartUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => CartCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: CartCreateWithoutSales_channelInput;
}
