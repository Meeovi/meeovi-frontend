import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_type_translationCreateNestedManyWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationCreateNestedManyWithoutMail_template_typeInput";

@TypeGraphQL.InputType("Mail_template_typeCreateWithoutMail_templateInput", {})
export class Mail_template_typeCreateWithoutMail_templateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  technical_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  available_entities?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  template_data?: string | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateNestedManyWithoutMail_template_typeInput, {
    nullable: true
  })
  mail_template_type_translation?: Mail_template_type_translationCreateNestedManyWithoutMail_template_typeInput | undefined;
}
