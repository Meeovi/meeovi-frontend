import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateScalarWhereInput } from "../inputs/Mail_templateScalarWhereInput";
import { Mail_templateUpdateManyMutationInput } from "../inputs/Mail_templateUpdateManyMutationInput";

@TypeGraphQL.InputType("Mail_templateUpdateManyWithWhereWithoutMail_template_typeInput", {})
export class Mail_templateUpdateManyWithWhereWithoutMail_template_typeInput {
  @TypeGraphQL.Field(_type => Mail_templateScalarWhereInput, {
    nullable: false
  })
  where!: Mail_templateScalarWhereInput;

  @TypeGraphQL.Field(_type => Mail_templateUpdateManyMutationInput, {
    nullable: false
  })
  data!: Mail_templateUpdateManyMutationInput;
}
