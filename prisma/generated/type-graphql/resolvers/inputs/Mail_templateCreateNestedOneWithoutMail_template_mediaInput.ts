import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateOrConnectWithoutMail_template_mediaInput } from "../inputs/Mail_templateCreateOrConnectWithoutMail_template_mediaInput";
import { Mail_templateCreateWithoutMail_template_mediaInput } from "../inputs/Mail_templateCreateWithoutMail_template_mediaInput";
import { Mail_templateWhereUniqueInput } from "../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.InputType("Mail_templateCreateNestedOneWithoutMail_template_mediaInput", {})
export class Mail_templateCreateNestedOneWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => Mail_templateCreateWithoutMail_template_mediaInput, {
    nullable: true
  })
  create?: Mail_templateCreateWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateCreateOrConnectWithoutMail_template_mediaInput, {
    nullable: true
  })
  connectOrCreate?: Mail_templateCreateOrConnectWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateWhereUniqueInput, {
    nullable: true
  })
  connect?: Mail_templateWhereUniqueInput | undefined;
}
