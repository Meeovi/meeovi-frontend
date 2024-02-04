import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutSales_channelInput } from "../inputs/Cms_pageCreateOrConnectWithoutSales_channelInput";
import { Cms_pageCreateWithoutSales_channelInput } from "../inputs/Cms_pageCreateWithoutSales_channelInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateNestedOneWithoutSales_channelInput", {})
export class Cms_pageCreateNestedOneWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput | undefined;
}
