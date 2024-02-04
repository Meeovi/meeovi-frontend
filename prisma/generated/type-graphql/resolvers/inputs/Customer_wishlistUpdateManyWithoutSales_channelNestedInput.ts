import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateManySales_channelInputEnvelope } from "../inputs/Customer_wishlistCreateManySales_channelInputEnvelope";
import { Customer_wishlistCreateOrConnectWithoutSales_channelInput } from "../inputs/Customer_wishlistCreateOrConnectWithoutSales_channelInput";
import { Customer_wishlistCreateWithoutSales_channelInput } from "../inputs/Customer_wishlistCreateWithoutSales_channelInput";
import { Customer_wishlistScalarWhereInput } from "../inputs/Customer_wishlistScalarWhereInput";
import { Customer_wishlistUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Customer_wishlistUpdateManyWithWhereWithoutSales_channelInput";
import { Customer_wishlistUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Customer_wishlistUpdateWithWhereUniqueWithoutSales_channelInput";
import { Customer_wishlistUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Customer_wishlistUpsertWithWhereUniqueWithoutSales_channelInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistUpdateManyWithoutSales_channelNestedInput", {})
export class Customer_wishlistUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Customer_wishlistCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Customer_wishlistCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Customer_wishlistCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Customer_wishlistUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_wishlistCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_wishlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_wishlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_wishlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_wishlistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Customer_wishlistUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Customer_wishlistUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_wishlistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_wishlistScalarWhereInput[] | undefined;
}
