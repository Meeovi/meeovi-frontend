import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_templateCreateWithoutAppInput } from "../inputs/App_templateCreateWithoutAppInput";
import { App_templateUpdateWithoutAppInput } from "../inputs/App_templateUpdateWithoutAppInput";
import { App_templateWhereUniqueInput } from "../inputs/App_templateWhereUniqueInput";

@TypeGraphQL.InputType("App_templateUpsertWithWhereUniqueWithoutAppInput", {})
export class App_templateUpsertWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_templateWhereUniqueInput, {
    nullable: false
  })
  where!: App_templateWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_templateUpdateWithoutAppInput, {
    nullable: false
  })
  update!: App_templateUpdateWithoutAppInput;

  @TypeGraphQL.Field(_type => App_templateCreateWithoutAppInput, {
    nullable: false
  })
  create!: App_templateCreateWithoutAppInput;
}
