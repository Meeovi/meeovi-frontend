import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationScalarWhereInput } from "../inputs/Landing_page_translationScalarWhereInput";
import { Landing_page_translationUpdateManyMutationInput } from "../inputs/Landing_page_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Landing_page_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Landing_page_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Landing_page_translationScalarWhereInput, {
    nullable: false
  })
  where!: Landing_page_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Landing_page_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Landing_page_translationUpdateManyMutationInput;
}
