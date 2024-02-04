import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationScalarWhereInput } from "../inputs/App_translationScalarWhereInput";
import { App_translationUpdateManyMutationInput } from "../inputs/App_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("App_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class App_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_translationScalarWhereInput, {
    nullable: false
  })
  where!: App_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => App_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_translationUpdateManyMutationInput;
}
