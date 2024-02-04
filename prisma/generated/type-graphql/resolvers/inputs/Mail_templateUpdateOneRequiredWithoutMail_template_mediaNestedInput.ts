import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateOrConnectWithoutMail_template_mediaInput } from "../inputs/Mail_templateCreateOrConnectWithoutMail_template_mediaInput";
import { Mail_templateCreateWithoutMail_template_mediaInput } from "../inputs/Mail_templateCreateWithoutMail_template_mediaInput";
import { Mail_templateUpdateToOneWithWhereWithoutMail_template_mediaInput } from "../inputs/Mail_templateUpdateToOneWithWhereWithoutMail_template_mediaInput";
import { Mail_templateUpsertWithoutMail_template_mediaInput } from "../inputs/Mail_templateUpsertWithoutMail_template_mediaInput";
import { Mail_templateWhereUniqueInput } from "../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.InputType("Mail_templateUpdateOneRequiredWithoutMail_template_mediaNestedInput", {})
export class Mail_templateUpdateOneRequiredWithoutMail_template_mediaNestedInput {
  @TypeGraphQL.Field(_type => Mail_templateCreateWithoutMail_template_mediaInput, {
    nullable: true
  })
  create?: Mail_templateCreateWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateCreateOrConnectWithoutMail_template_mediaInput, {
    nullable: true
  })
  connectOrCreate?: Mail_templateCreateOrConnectWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateUpsertWithoutMail_template_mediaInput, {
    nullable: true
  })
  upsert?: Mail_templateUpsertWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateWhereUniqueInput, {
    nullable: true
  })
  connect?: Mail_templateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateUpdateToOneWithWhereWithoutMail_template_mediaInput, {
    nullable: true
  })
  update?: Mail_templateUpdateToOneWithWhereWithoutMail_template_mediaInput | undefined;
}
