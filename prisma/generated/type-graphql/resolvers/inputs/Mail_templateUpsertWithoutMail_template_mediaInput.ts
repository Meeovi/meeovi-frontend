import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateWithoutMail_template_mediaInput } from "../inputs/Mail_templateCreateWithoutMail_template_mediaInput";
import { Mail_templateUpdateWithoutMail_template_mediaInput } from "../inputs/Mail_templateUpdateWithoutMail_template_mediaInput";
import { Mail_templateWhereInput } from "../inputs/Mail_templateWhereInput";

@TypeGraphQL.InputType("Mail_templateUpsertWithoutMail_template_mediaInput", {})
export class Mail_templateUpsertWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => Mail_templateUpdateWithoutMail_template_mediaInput, {
    nullable: false
  })
  update!: Mail_templateUpdateWithoutMail_template_mediaInput;

  @TypeGraphQL.Field(_type => Mail_templateCreateWithoutMail_template_mediaInput, {
    nullable: false
  })
  create!: Mail_templateCreateWithoutMail_template_mediaInput;

  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  where?: Mail_templateWhereInput | undefined;
}
