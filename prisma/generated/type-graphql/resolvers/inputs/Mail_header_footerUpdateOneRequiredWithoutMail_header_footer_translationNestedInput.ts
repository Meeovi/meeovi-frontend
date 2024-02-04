import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footerCreateOrConnectWithoutMail_header_footer_translationInput } from "../inputs/Mail_header_footerCreateOrConnectWithoutMail_header_footer_translationInput";
import { Mail_header_footerCreateWithoutMail_header_footer_translationInput } from "../inputs/Mail_header_footerCreateWithoutMail_header_footer_translationInput";
import { Mail_header_footerUpdateToOneWithWhereWithoutMail_header_footer_translationInput } from "../inputs/Mail_header_footerUpdateToOneWithWhereWithoutMail_header_footer_translationInput";
import { Mail_header_footerUpsertWithoutMail_header_footer_translationInput } from "../inputs/Mail_header_footerUpsertWithoutMail_header_footer_translationInput";
import { Mail_header_footerWhereUniqueInput } from "../inputs/Mail_header_footerWhereUniqueInput";

@TypeGraphQL.InputType("Mail_header_footerUpdateOneRequiredWithoutMail_header_footer_translationNestedInput", {})
export class Mail_header_footerUpdateOneRequiredWithoutMail_header_footer_translationNestedInput {
  @TypeGraphQL.Field(_type => Mail_header_footerCreateWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  create?: Mail_header_footerCreateWithoutMail_header_footer_translationInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerCreateOrConnectWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  connectOrCreate?: Mail_header_footerCreateOrConnectWithoutMail_header_footer_translationInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerUpsertWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  upsert?: Mail_header_footerUpsertWithoutMail_header_footer_translationInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerWhereUniqueInput, {
    nullable: true
  })
  connect?: Mail_header_footerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerUpdateToOneWithWhereWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  update?: Mail_header_footerUpdateToOneWithWhereWithoutMail_header_footer_translationInput | undefined;
}
