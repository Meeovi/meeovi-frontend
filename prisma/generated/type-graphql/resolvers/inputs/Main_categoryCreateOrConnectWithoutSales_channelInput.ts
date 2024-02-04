import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryCreateWithoutSales_channelInput } from "../inputs/Main_categoryCreateWithoutSales_channelInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryCreateOrConnectWithoutSales_channelInput", {})
export class Main_categoryCreateOrConnectWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Main_categoryCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Main_categoryCreateWithoutSales_channelInput;
}
