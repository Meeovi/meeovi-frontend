import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutMail_template_mediaInput } from "../inputs/LanguageCreateNestedOneWithoutMail_template_mediaInput";
import { Mail_templateCreateNestedOneWithoutMail_template_mediaInput } from "../inputs/Mail_templateCreateNestedOneWithoutMail_template_mediaInput";
import { MediaCreateNestedOneWithoutMail_template_mediaInput } from "../inputs/MediaCreateNestedOneWithoutMail_template_mediaInput";

@TypeGraphQL.InputType("Mail_template_mediaCreateInput", {})
export class Mail_template_mediaCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutMail_template_mediaInput, {
    nullable: true
  })
  language?: LanguageCreateNestedOneWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateCreateNestedOneWithoutMail_template_mediaInput, {
    nullable: false
  })
  mail_template!: Mail_templateCreateNestedOneWithoutMail_template_mediaInput;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutMail_template_mediaInput, {
    nullable: false
  })
  media!: MediaCreateNestedOneWithoutMail_template_mediaInput;
}
