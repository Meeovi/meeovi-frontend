import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationScalarWhereInput } from "../inputs/Mail_template_translationScalarWhereInput";
import { Mail_template_translationUpdateManyMutationInput } from "../inputs/Mail_template_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Mail_template_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Mail_template_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Mail_template_translationScalarWhereInput, {
    nullable: false
  })
  where!: Mail_template_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Mail_template_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Mail_template_translationUpdateManyMutationInput;
}
