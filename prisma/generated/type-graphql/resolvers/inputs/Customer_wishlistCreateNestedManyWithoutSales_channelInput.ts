import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateManySales_channelInputEnvelope } from "../inputs/Customer_wishlistCreateManySales_channelInputEnvelope";
import { Customer_wishlistCreateOrConnectWithoutSales_channelInput } from "../inputs/Customer_wishlistCreateOrConnectWithoutSales_channelInput";
import { Customer_wishlistCreateWithoutSales_channelInput } from "../inputs/Customer_wishlistCreateWithoutSales_channelInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistCreateNestedManyWithoutSales_channelInput", {})
export class Customer_wishlistCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Customer_wishlistCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Customer_wishlistCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Customer_wishlistCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_wishlistCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_wishlistWhereUniqueInput[] | undefined;
}
