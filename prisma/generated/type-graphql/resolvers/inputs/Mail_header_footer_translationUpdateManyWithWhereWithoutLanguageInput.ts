import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationScalarWhereInput } from "../inputs/Mail_header_footer_translationScalarWhereInput";
import { Mail_header_footer_translationUpdateManyMutationInput } from "../inputs/Mail_header_footer_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Mail_header_footer_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Mail_header_footer_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationScalarWhereInput, {
    nullable: false
  })
  where!: Mail_header_footer_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Mail_header_footer_translationUpdateManyMutationInput;
}
