import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateManyMail_template_typeInputEnvelope } from "../inputs/Mail_templateCreateManyMail_template_typeInputEnvelope";
import { Mail_templateCreateOrConnectWithoutMail_template_typeInput } from "../inputs/Mail_templateCreateOrConnectWithoutMail_template_typeInput";
import { Mail_templateCreateWithoutMail_template_typeInput } from "../inputs/Mail_templateCreateWithoutMail_template_typeInput";
import { Mail_templateWhereUniqueInput } from "../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.InputType("Mail_templateCreateNestedManyWithoutMail_template_typeInput", {})
export class Mail_templateCreateNestedManyWithoutMail_template_typeInput {
  @TypeGraphQL.Field(_type => [Mail_templateCreateWithoutMail_template_typeInput], {
    nullable: true
  })
  create?: Mail_templateCreateWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateCreateOrConnectWithoutMail_template_typeInput], {
    nullable: true
  })
  connectOrCreate?: Mail_templateCreateOrConnectWithoutMail_template_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_templateCreateManyMail_template_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_templateCreateManyMail_template_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_templateWhereUniqueInput[] | undefined;
}
