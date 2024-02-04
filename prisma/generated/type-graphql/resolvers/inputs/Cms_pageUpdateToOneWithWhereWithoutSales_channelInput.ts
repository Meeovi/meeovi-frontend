import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageUpdateWithoutSales_channelInput } from "../inputs/Cms_pageUpdateWithoutSales_channelInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageUpdateToOneWithWhereWithoutSales_channelInput", {})
export class Cms_pageUpdateToOneWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Cms_pageUpdateWithoutSales_channelInput;
}
