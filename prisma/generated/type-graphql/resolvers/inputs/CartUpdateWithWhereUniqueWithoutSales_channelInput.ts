import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartUpdateWithoutSales_channelInput } from "../inputs/CartUpdateWithoutSales_channelInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class CartUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => CartWhereUniqueInput, {
    nullable: false
  })
  where!: CartWhereUniqueInput;

  @TypeGraphQL.Field(_type => CartUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: CartUpdateWithoutSales_channelInput;
}
