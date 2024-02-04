import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_type_translationCreateManyMail_template_typeInputEnvelope } from "../inputs/Mail_template_type_translationCreateManyMail_template_typeInputEnvelope";
import { Mail_template_type_translationCreateOrConnectWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationCreateOrConnectWithoutMail_template_typeInput";
import { Mail_template_type_translationCreateWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationCreateWithoutMail_template_typeInput";
import { Mail_template_type_translationWhereUniqueInput } from "../inputs/Mail_template_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_type_translationCreateNestedManyWithoutMail_template_typeInput", {})
export class Mail_template_type_translationCreateNestedManyWithoutMail_template_typeInput {
  @TypeGraphQL.Field(_type => [Mail_template_type_translationCreateWithoutMail_template_typeInput], {
    nullable: true
  })
  create?: Mail_template_type_translationCreateWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationCreateOrConnectWithoutMail_template_typeInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_type_translationCreateOrConnectWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateManyMail_template_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_type_translationCreateManyMail_template_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_type_translationWhereUniqueInput[] | undefined;
}
