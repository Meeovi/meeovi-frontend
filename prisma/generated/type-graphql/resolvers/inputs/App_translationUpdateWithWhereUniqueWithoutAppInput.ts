import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationUpdateWithoutAppInput } from "../inputs/App_translationUpdateWithoutAppInput";
import { App_translationWhereUniqueInput } from "../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_translationUpdateWithWhereUniqueWithoutAppInput", {})
export class App_translationUpdateWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => App_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_translationUpdateWithoutAppInput, {
    nullable: false
  })
  data!: App_translationUpdateWithoutAppInput;
}
