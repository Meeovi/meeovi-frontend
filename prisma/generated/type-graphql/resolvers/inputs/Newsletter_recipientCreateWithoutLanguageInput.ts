import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagCreateNestedManyWithoutNewsletter_recipientInput } from "../inputs/Newsletter_recipient_tagCreateNestedManyWithoutNewsletter_recipientInput";
import { Sales_channelCreateNestedOneWithoutNewsletter_recipientInput } from "../inputs/Sales_channelCreateNestedOneWithoutNewsletter_recipientInput";
import { SalutationCreateNestedOneWithoutNewsletter_recipientInput } from "../inputs/SalutationCreateNestedOneWithoutNewsletter_recipientInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateWithoutLanguageInput", {})
export class Newsletter_recipientCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zip_code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  street?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  hash!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  confirmed_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutNewsletter_recipientInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutNewsletter_recipientInput;

  @TypeGraphQL.Field(_type => SalutationCreateNestedOneWithoutNewsletter_recipientInput, {
    nullable: true
  })
  salutation?: SalutationCreateNestedOneWithoutNewsletter_recipientInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagCreateNestedManyWithoutNewsletter_recipientInput, {
    nullable: true
  })
  newsletter_recipient_tag?: Newsletter_recipient_tagCreateNestedManyWithoutNewsletter_recipientInput | undefined;
}
