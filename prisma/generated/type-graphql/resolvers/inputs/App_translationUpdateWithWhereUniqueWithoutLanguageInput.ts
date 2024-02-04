import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationUpdateWithoutLanguageInput } from "../inputs/App_translationUpdateWithoutLanguageInput";
import { App_translationWhereUniqueInput } from "../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class App_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: App_translationUpdateWithoutLanguageInput;
}
