import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateManySales_channelInputEnvelope } from "../inputs/Main_categoryCreateManySales_channelInputEnvelope";
import { Main_categoryCreateOrConnectWithoutSales_channelInput } from "../inputs/Main_categoryCreateOrConnectWithoutSales_channelInput";
import { Main_categoryCreateWithoutSales_channelInput } from "../inputs/Main_categoryCreateWithoutSales_channelInput";
import { Main_categoryScalarWhereInput } from "../inputs/Main_categoryScalarWhereInput";
import { Main_categoryUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Main_categoryUpdateManyWithWhereWithoutSales_channelInput";
import { Main_categoryUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Main_categoryUpdateWithWhereUniqueWithoutSales_channelInput";
import { Main_categoryUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Main_categoryUpsertWithWhereUniqueWithoutSales_channelInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryUpdateManyWithoutSales_channelNestedInput", {})
export class Main_categoryUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Main_categoryCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Main_categoryCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Main_categoryCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Main_categoryUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Main_categoryCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Main_categoryCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  set?: Main_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Main_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  delete?: Main_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Main_categoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Main_categoryUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Main_categoryUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Main_categoryScalarWhereInput[] | undefined;
}
