import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutSales_channelInput } from "../inputs/Cms_pageCreateWithoutSales_channelInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateOrConnectWithoutSales_channelInput", {})
export class Cms_pageCreateOrConnectWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutSales_channelInput;
}
