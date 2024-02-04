import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManySales_channelInputEnvelope } from "../inputs/CartCreateManySales_channelInputEnvelope";
import { CartCreateOrConnectWithoutSales_channelInput } from "../inputs/CartCreateOrConnectWithoutSales_channelInput";
import { CartCreateWithoutSales_channelInput } from "../inputs/CartCreateWithoutSales_channelInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartCreateNestedManyWithoutSales_channelInput", {})
export class CartCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: CartCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;
}
