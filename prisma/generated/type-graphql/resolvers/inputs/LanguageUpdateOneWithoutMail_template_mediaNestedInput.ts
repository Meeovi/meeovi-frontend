import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutMail_template_mediaInput } from "../inputs/LanguageCreateOrConnectWithoutMail_template_mediaInput";
import { LanguageCreateWithoutMail_template_mediaInput } from "../inputs/LanguageCreateWithoutMail_template_mediaInput";
import { LanguageUpdateToOneWithWhereWithoutMail_template_mediaInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutMail_template_mediaInput";
import { LanguageUpsertWithoutMail_template_mediaInput } from "../inputs/LanguageUpsertWithoutMail_template_mediaInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneWithoutMail_template_mediaNestedInput", {})
export class LanguageUpdateOneWithoutMail_template_mediaNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_template_mediaInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutMail_template_mediaInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutMail_template_mediaInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  disconnect?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  delete?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutMail_template_mediaInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutMail_template_mediaInput | undefined;
}
