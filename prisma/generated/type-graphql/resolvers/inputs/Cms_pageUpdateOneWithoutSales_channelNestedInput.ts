import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutSales_channelInput } from "../inputs/Cms_pageCreateOrConnectWithoutSales_channelInput";
import { Cms_pageCreateWithoutSales_channelInput } from "../inputs/Cms_pageCreateWithoutSales_channelInput";
import { Cms_pageUpdateToOneWithWhereWithoutSales_channelInput } from "../inputs/Cms_pageUpdateToOneWithWhereWithoutSales_channelInput";
import { Cms_pageUpsertWithoutSales_channelInput } from "../inputs/Cms_pageUpsertWithoutSales_channelInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageUpdateOneWithoutSales_channelNestedInput", {})
export class Cms_pageUpdateOneWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpsertWithoutSales_channelInput, {
    nullable: true
  })
  upsert?: Cms_pageUpsertWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  disconnect?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  delete?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateToOneWithWhereWithoutSales_channelInput, {
    nullable: true
  })
  update?: Cms_pageUpdateToOneWithWhereWithoutSales_channelInput | undefined;
}
