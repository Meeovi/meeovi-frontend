import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateOrConnectWithoutMail_template_translationInput } from "../inputs/Mail_templateCreateOrConnectWithoutMail_template_translationInput";
import { Mail_templateCreateWithoutMail_template_translationInput } from "../inputs/Mail_templateCreateWithoutMail_template_translationInput";
import { Mail_templateUpdateToOneWithWhereWithoutMail_template_translationInput } from "../inputs/Mail_templateUpdateToOneWithWhereWithoutMail_template_translationInput";
import { Mail_templateUpsertWithoutMail_template_translationInput } from "../inputs/Mail_templateUpsertWithoutMail_template_translationInput";
import { Mail_templateWhereUniqueInput } from "../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.InputType("Mail_templateUpdateOneRequiredWithoutMail_template_translationNestedInput", {})
export class Mail_templateUpdateOneRequiredWithoutMail_template_translationNestedInput {
  @TypeGraphQL.Field(_type => Mail_templateCreateWithoutMail_template_translationInput, {
    nullable: true
  })
  create?: Mail_templateCreateWithoutMail_template_translationInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateCreateOrConnectWithoutMail_template_translationInput, {
    nullable: true
  })
  connectOrCreate?: Mail_templateCreateOrConnectWithoutMail_template_translationInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateUpsertWithoutMail_template_translationInput, {
    nullable: true
  })
  upsert?: Mail_templateUpsertWithoutMail_template_translationInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateWhereUniqueInput, {
    nullable: true
  })
  connect?: Mail_templateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateUpdateToOneWithWhereWithoutMail_template_translationInput, {
    nullable: true
  })
  update?: Mail_templateUpdateToOneWithWhereWithoutMail_template_translationInput | undefined;
}
