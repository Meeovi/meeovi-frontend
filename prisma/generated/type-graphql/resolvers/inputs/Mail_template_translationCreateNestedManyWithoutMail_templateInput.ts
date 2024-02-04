import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationCreateManyMail_templateInputEnvelope } from "../inputs/Mail_template_translationCreateManyMail_templateInputEnvelope";
import { Mail_template_translationCreateOrConnectWithoutMail_templateInput } from "../inputs/Mail_template_translationCreateOrConnectWithoutMail_templateInput";
import { Mail_template_translationCreateWithoutMail_templateInput } from "../inputs/Mail_template_translationCreateWithoutMail_templateInput";
import { Mail_template_translationWhereUniqueInput } from "../inputs/Mail_template_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_translationCreateNestedManyWithoutMail_templateInput", {})
export class Mail_template_translationCreateNestedManyWithoutMail_templateInput {
  @TypeGraphQL.Field(_type => [Mail_template_translationCreateWithoutMail_templateInput], {
    nullable: true
  })
  create?: Mail_template_translationCreateWithoutMail_templateInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationCreateOrConnectWithoutMail_templateInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_translationCreateOrConnectWithoutMail_templateInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationCreateManyMail_templateInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_translationCreateManyMail_templateInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_translationWhereUniqueInput[] | undefined;
}
