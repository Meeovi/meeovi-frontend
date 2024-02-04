import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaScalarWhereInput } from "../inputs/Mail_template_mediaScalarWhereInput";
import { Mail_template_mediaUpdateManyMutationInput } from "../inputs/Mail_template_mediaUpdateManyMutationInput";

@TypeGraphQL.InputType("Mail_template_mediaUpdateManyWithWhereWithoutMail_templateInput", {})
export class Mail_template_mediaUpdateManyWithWhereWithoutMail_templateInput {
  @TypeGraphQL.Field(_type => Mail_template_mediaScalarWhereInput, {
    nullable: false
  })
  where!: Mail_template_mediaScalarWhereInput;

  @TypeGraphQL.Field(_type => Mail_template_mediaUpdateManyMutationInput, {
    nullable: false
  })
  data!: Mail_template_mediaUpdateManyMutationInput;
}
