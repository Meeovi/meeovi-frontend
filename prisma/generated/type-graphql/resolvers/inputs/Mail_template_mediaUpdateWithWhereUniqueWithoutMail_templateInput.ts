import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaUpdateWithoutMail_templateInput } from "../inputs/Mail_template_mediaUpdateWithoutMail_templateInput";
import { Mail_template_mediaWhereUniqueInput } from "../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_mediaUpdateWithWhereUniqueWithoutMail_templateInput", {})
export class Mail_template_mediaUpdateWithWhereUniqueWithoutMail_templateInput {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_mediaUpdateWithoutMail_templateInput, {
    nullable: false
  })
  data!: Mail_template_mediaUpdateWithoutMail_templateInput;
}
