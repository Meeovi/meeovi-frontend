import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateManySales_channelInputEnvelope } from "../inputs/Main_categoryCreateManySales_channelInputEnvelope";
import { Main_categoryCreateOrConnectWithoutSales_channelInput } from "../inputs/Main_categoryCreateOrConnectWithoutSales_channelInput";
import { Main_categoryCreateWithoutSales_channelInput } from "../inputs/Main_categoryCreateWithoutSales_channelInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryCreateNestedManyWithoutSales_channelInput", {})
export class Main_categoryCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Main_categoryCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Main_categoryCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Main_categoryCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Main_categoryCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Main_categoryCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Main_categoryWhereUniqueInput], {
    nullable: true
  })
  connect?: Main_categoryWhereUniqueInput[] | undefined;
}
