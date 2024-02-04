import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Main_categoryUpdateWithoutSales_channelInput } from "../inputs/Main_categoryUpdateWithoutSales_channelInput";
import { Main_categoryWhereUniqueInput } from "../inputs/Main_categoryWhereUniqueInput";

@TypeGraphQL.InputType("Main_categoryUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Main_categoryUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Main_categoryWhereUniqueInput, {
    nullable: false
  })
  where!: Main_categoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Main_categoryUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Main_categoryUpdateWithoutSales_channelInput;
}
