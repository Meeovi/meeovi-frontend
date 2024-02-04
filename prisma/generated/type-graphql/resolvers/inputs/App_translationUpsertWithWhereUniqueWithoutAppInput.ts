import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationCreateWithoutAppInput } from "../inputs/App_translationCreateWithoutAppInput";
import { App_translationUpdateWithoutAppInput } from "../inputs/App_translationUpdateWithoutAppInput";
import { App_translationWhereUniqueInput } from "../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_translationUpsertWithWhereUniqueWithoutAppInput", {})
export class App_translationUpsertWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_translationUpdateWithoutAppInput, {
    nullable: false
  })
  update!: App_translationUpdateWithoutAppInput;

  @TypeGraphQL.Field(_type => App_translationCreateWithoutAppInput, {
    nullable: false
  })
  create!: App_translationCreateWithoutAppInput;
}
