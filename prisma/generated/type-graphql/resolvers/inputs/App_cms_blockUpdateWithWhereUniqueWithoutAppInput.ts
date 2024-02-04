import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockUpdateWithoutAppInput } from "../inputs/App_cms_blockUpdateWithoutAppInput";
import { App_cms_blockWhereUniqueInput } from "../inputs/App_cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("App_cms_blockUpdateWithWhereUniqueWithoutAppInput", {})
export class App_cms_blockUpdateWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: App_cms_blockWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_cms_blockUpdateWithoutAppInput, {
    nullable: false
  })
  data!: App_cms_blockUpdateWithoutAppInput;
}
