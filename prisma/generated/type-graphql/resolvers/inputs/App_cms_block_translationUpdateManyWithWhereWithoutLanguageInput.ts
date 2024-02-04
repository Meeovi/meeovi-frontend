import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationScalarWhereInput } from "../inputs/App_cms_block_translationScalarWhereInput";
import { App_cms_block_translationUpdateManyMutationInput } from "../inputs/App_cms_block_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("App_cms_block_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class App_cms_block_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_cms_block_translationScalarWhereInput, {
    nullable: false
  })
  where!: App_cms_block_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => App_cms_block_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_cms_block_translationUpdateManyMutationInput;
}
