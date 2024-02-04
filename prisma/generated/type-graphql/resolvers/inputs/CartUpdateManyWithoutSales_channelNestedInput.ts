import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManySales_channelInputEnvelope } from "../inputs/CartCreateManySales_channelInputEnvelope";
import { CartCreateOrConnectWithoutSales_channelInput } from "../inputs/CartCreateOrConnectWithoutSales_channelInput";
import { CartCreateWithoutSales_channelInput } from "../inputs/CartCreateWithoutSales_channelInput";
import { CartScalarWhereInput } from "../inputs/CartScalarWhereInput";
import { CartUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/CartUpdateManyWithWhereWithoutSales_channelInput";
import { CartUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/CartUpdateWithWhereUniqueWithoutSales_channelInput";
import { CartUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/CartUpsertWithWhereUniqueWithoutSales_channelInput";
import { CartWhereUniqueInput } from "../inputs/CartWhereUniqueInput";

@TypeGraphQL.InputType("CartUpdateManyWithoutSales_channelNestedInput", {})
export class CartUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [CartCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: CartCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: CartCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: CartUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => CartCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: CartCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  set?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  delete?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereUniqueInput], {
    nullable: true
  })
  connect?: CartWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: CartUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: CartUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CartScalarWhereInput[] | undefined;
}
